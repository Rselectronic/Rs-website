import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const articles = [
  {
    title: 'Understanding IPC Class 2 vs Class 3 Standards',
    date: '2024-12-15',
    excerpt:
      'A deep dive into the differences between IPC Class 2 and Class 3 standards, and how to determine which level of quality your product requires.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    slug: 'ipc-class-2-vs-class-3',
  },
  {
    title: 'The Complete Guide to Turnkey PCB Manufacturing',
    date: '2024-11-28',
    excerpt:
      'Everything you need to know about turnkey PCB assembly — from component sourcing to final delivery — and why it saves time and money.',
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=600&q=80',
    slug: 'turnkey-pcb-manufacturing-guide',
  },
  {
    title: 'How to Prepare Your BOM for PCB Assembly',
    date: '2024-11-10',
    excerpt:
      'Best practices for creating a clean, accurate Bill of Materials that speeds up quoting and reduces errors during production.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    slug: 'prepare-bom-pcb-assembly',
  },
  {
    title: 'SMT vs Through-Hole: Choosing the Right Assembly Method',
    date: '2024-10-25',
    excerpt:
      'Comparing surface mount and through-hole technology — when to use each, cost implications, and how mixed assemblies work.',
    image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=80',
    slug: 'smt-vs-through-hole',
  },
  {
    title: 'Why Montreal is a Hub for Electronics Manufacturing',
    date: '2024-10-08',
    excerpt:
      "Montreal's growing electronics ecosystem, proximity to aerospace giants, and skilled workforce make it an ideal location for PCB assembly.",
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    slug: 'montreal-electronics-manufacturing',
  },
  {
    title: 'Reducing Lead Times in PCB Production',
    date: '2024-09-20',
    excerpt:
      'Practical strategies for shortening your PCB assembly lead time, from early BOM review to selecting the right manufacturing partner.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=600&q=80',
    slug: 'reducing-pcb-lead-times',
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function BlogGrid() {
  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 lg:px-12 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl border border-[var(--border)] bg-white shadow-sm overflow-hidden transition-all duration-200 hover:border-[var(--primary)] hover:shadow-lg hover:shadow-blue-500/10"
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
              <div className="p-6">
                <time className="font-mono text-[11px] text-[var(--primary)] tracking-wider">
                  {formatDate(article.date)}
                </time>
                <h3 className="font-display text-lg font-semibold text-[var(--blue-900)] mt-2 mb-3 leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] group-hover:gap-2.5 transition-all duration-200">
                  Read more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
