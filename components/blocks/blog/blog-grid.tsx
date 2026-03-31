'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/blog-data';
import { useI18n } from '@/lib/i18n';

export function BlogGrid() {
  const { t, locale } = useI18n();

  function formatDate(dateStr: string) {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-2xl border border-[var(--border)] bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-blue-500/10 flex flex-col"
            >
              <div className="overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <time className="font-mono text-[11px] text-[var(--primary)] tracking-wider">
                  {formatDate(article.date)}
                </time>
                <h3 className="font-display text-lg font-semibold text-[var(--blue-900)] mt-2 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] group-hover:gap-2.5 transition-all duration-200">
                  {t('blog.readMore')} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
