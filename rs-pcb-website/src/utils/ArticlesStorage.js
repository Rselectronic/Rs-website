/**
 * Articles Storage Utility — Firebase Firestore Edition
 * ---------------------------------------------------
 * Uses Firestore for Articles post data.
 * Images are compressed and stored as base64 inside the Firestore document.
 * No Firebase Storage needed — everything runs on the free Spark plan.
 */

import { db } from './firebase'
import {
  collection, getDocs, getDoc, doc, setDoc, updateDoc, deleteDoc,
  query, orderBy
} from 'firebase/firestore'
import samplePosts from '../data/ArticlesPosts'

const POSTS_COLLECTION = 'ArticlesPosts'
const AUTH_KEY = 'rs_admin_auth'

// Admin credentials
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'RS2026!'

// ==================== AUTH ====================

export function adminLogin(username, password) {
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, JSON.stringify({ loggedIn: true, timestamp: Date.now() }))
    return true
  }
  return false
}

export function adminLogout() {
  localStorage.removeItem(AUTH_KEY)
}

export function isAdminLoggedIn() {
  try {
    const auth = JSON.parse(localStorage.getItem(AUTH_KEY))
    if (!auth || !auth.loggedIn) return false
    if (Date.now() - auth.timestamp > 24 * 60 * 60 * 1000) {
      adminLogout()
      return false
    }
    return true;
  } catch {
    return false;
  }
}

// ==================== Articles POSTS (Firestore) ====================

export async function getAllPosts() {
  try {
    const q = query(collection(db, POSTS_COLLECTION), orderBy('date', 'desc'))
    const snapshot = await getDocs(q)

    if (snapshot.empty) {
      await seedSamplePosts()
      const snapshot2 = await getDocs(q)
      return snapshot2.docs.map((d) => ({ id: d.id, ...d.data() }))
    }

    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }))
  } catch (err) {
    console.error('Error fetching posts:', err)
    return samplePosts
  }
}

export async function getPostBySlug(slug) {
  try {
    const docRef = doc(db, POSTS_COLLECTION, slug)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    }
    return null
  } catch (err) {
    console.error('Error fetching post:', err)
    return null
  }
}

export async function createPost(post) {
  const existing = await getDoc(doc(db, POSTS_COLLECTION, post.slug))
  if (existing.exists()) {
    throw new Error('A post with this slug already exists')
  }
  await setDoc(doc(db, POSTS_COLLECTION, post.slug), {
    title: post.title,
    slug: post.slug,
    date: post.date,
    author: post.author,
    excerpt: post.excerpt,
    image: post.image || '',
    content: post.content,
    createdAt: new Date().toISOString(),
  })
  return post
}

export async function updatePost(slug, updatedPost) {
  const docRef = doc(db, POSTS_COLLECTION, slug)
  await updateDoc(docRef, {
    title: updatedPost.title,
    slug: updatedPost.slug,
    date: updatedPost.date,
    author: updatedPost.author,
    excerpt: updatedPost.excerpt,
    image: updatedPost.image || '',
    content: updatedPost.content,
  })
  return updatedPost
}

export async function deletePost(slug) {
  await deleteDoc(doc(db, POSTS_COLLECTION, slug))
}

// ==================== IMAGE COMPRESSION ====================

/**
 * Compress an image file and return a base64 string.
 * Resizes to max 800px wide and compresses to JPEG ~70% quality.
 * Result is typically 50-150KB — well within Firestore's 1MB doc limit.
 */
export function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const MAX_WIDTH = 800
        let width = img.width
        let height = img.height

        if (width > MAX_WIDTH) {
          height = Math.round((height * MAX_WIDTH) / width)
          width = MAX_WIDTH
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)

        // Compress as JPEG at 70% quality
        const base64 = canvas.toDataURL('image/jpeg', 0.7)
        resolve(base64)
      }
      img.onerror = reject
      img.src = e.target.result
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// ==================== SEED SAMPLE POSTS ====================

async function seedSamplePosts() {
  for (const post of samplePosts) {
    try {
      await setDoc(doc(db, POSTS_COLLECTION, post.slug), {
        ...post,
        createdAt: new Date().toISOString(),
      })
    } catch (err) {
      console.error('Error seeding post:', err)
    }
  }
}

// ==================== HELPERS ====================

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}