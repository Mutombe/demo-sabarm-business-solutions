import React, { useState, useMemo } from 'react';
import { insights } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import InsightCard from '../components/InsightCard';

export default function Insights() {
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(insights.map((i) => i.category)))];
  }, []);
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? insights : insights.filter((i) => i.category === cat);
  const [featured, ...rest] = filtered;

  return (
    <PageTransition>
      <SEO
        title="Insights — Sabarm Business Solutions"
        description="Practical Zimbabwean accounting, tax and reporting notes written by our partners."
      />
      <PageHero
        numeral="06 / INSIGHTS"
        eyebrow="Thinking"
        title="Writing that finance teams actually use."
        sub="Short, practical notes on Zimbabwean accounting, tax and reporting — the kind of thing a CFO can circulate to the audit committee without editing."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Insights' }]}
        image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          {/* Filter */}
          <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-stone-200 pb-6">
            <span className="numeral text-stone-500 mr-3 hidden sm:inline">FILTER /</span>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-[12px] uppercase tracking-[0.14em] transition-colors ${
                  cat === c
                    ? 'bg-teal-600 text-ivory-50'
                    : 'bg-ivory-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {featured && (
            <SectionReveal className="mb-8">
              <InsightCard insight={featured} featured />
            </SectionReveal>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((ins, i) => (
              <SectionReveal key={ins.slug} delay={i * 70}>
                <InsightCard insight={ins} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
