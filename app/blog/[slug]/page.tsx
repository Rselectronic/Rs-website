import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articles, getArticleBySlug } from '@/lib/blog-data';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | RS PCB Assembly Blog`,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prev = articles[currentIndex + 1] ?? null;
  const next = articles[currentIndex - 1] ?? null;

  return (
    <div className="pb-24 md:pb-32">
      {/* Hero image */}
      <div className="relative h-[45vh] min-h-[300px] mx-3 md:mx-5 mt-3 rounded-3xl overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono text-xs uppercase tracking-widest mb-6 transition-colors w-fit"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Blog
          </Link>
          <time className="font-mono text-[11px] uppercase tracking-widest text-[var(--primary)] mb-3 block">
            {formatDate(article.date)}
          </time>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter text-white leading-tight max-w-3xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="mx-auto max-w-3xl px-6 md:px-8 mt-12">
        <p className="text-lg text-[var(--muted-foreground)] leading-relaxed mb-10 border-l-4 border-[var(--primary)] pl-6 italic">
          {article.excerpt}
        </p>

        <div className="prose prose-blue max-w-none space-y-6">
          {article.content.split('\n\n').map((block, i) => {
            if (block.startsWith('**') && block.endsWith('**')) {
              return (
                <h2 key={i} className="font-display text-xl md:text-2xl font-bold text-[var(--blue-900)] mt-10 mb-3">
                  {block.replace(/\*\*/g, '')}
                </h2>
              );
            }
            // Render inline bold
            const parts = block.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="text-[var(--foreground)] leading-relaxed">
                {parts.map((part, j) =>
                  part.startsWith('**') ? (
                    <strong key={j} className="font-semibold text-[var(--blue-900)]">
                      {part.replace(/\*\*/g, '')}
                    </strong>
                  ) : (
                    part
                  )
                )}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[var(--blue-900)] p-8 md:p-10 text-white text-center">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/50 mb-3">Get Started</p>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">Ready to work with us?</h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto text-sm leading-relaxed">
            Send us your Gerber files and BOM. We'll have a same-day quote back to you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[var(--primary)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[var(--blue-700)] transition-colors"
          >
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--primary)] transition-colors"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-2 flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </p>
                <p className="font-display font-semibold text-[var(--blue-900)] text-sm leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {prev.title}
                </p>
              </Link>
            ) : <div />}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--primary)] transition-colors text-right"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted-foreground)] mb-2 flex items-center gap-1 justify-end">
                  Next <ArrowRight className="h-3 w-3" />
                </p>
                <p className="font-display font-semibold text-[var(--blue-900)] text-sm leading-snug group-hover:text-[var(--primary)] transition-colors">
                  {next.title}
                </p>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </div>
  );
}
