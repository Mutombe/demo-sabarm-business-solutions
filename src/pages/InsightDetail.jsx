import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Calendar, CaretLeft, CaretRight } from '@phosphor-icons/react';
import { insights } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import InsightCard from '../components/InsightCard';

export default function InsightDetail() {
  const { slug } = useParams();
  const idx = insights.findIndex((i) => i.slug === slug);
  if (idx === -1) return <Navigate to="/insights" replace />;
  const post = insights[idx];
  const prev = insights[(idx - 1 + insights.length) % insights.length];
  const next = insights[(idx + 1) % insights.length];
  const related = insights.filter((_, i) => i !== idx).slice(0, 3);

  return (
    <PageTransition>
      <SEO
        title={`${post.title} — Sabarm Insights`}
        description={post.excerpt}
      />
      <PageHero
        numeral={`INSIGHT ${String(idx + 1).padStart(2, '0')} / ${String(insights.length).padStart(2, '0')}`}
        eyebrow={post.category}
        title={post.title}
        sub={post.excerpt}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Insights', to: '/insights' },
          { label: post.category },
        ]}
        image={post.cover}
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap items-center gap-5 text-[12px] text-stone-500 font-mono tracking-wide mb-10 pb-6 border-b border-stone-200">
            <span className="flex items-center gap-2"><User size={14} weight="duotone" /> {post.author}</span>
            <span className="flex items-center gap-2"><Calendar size={14} weight="duotone" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} weight="duotone" /> {post.readTime}</span>
          </div>

          <SectionReveal>
            <div
              className="prose-sabarm text-[16px]"
              dangerouslySetInnerHTML={{ __html: post.body }}
            />
          </SectionReveal>
        </div>
      </section>

      <section className="bg-ivory-100 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8 grid grid-cols-2 gap-6">
          <Link to={`/insights/${prev.slug}`} className="group flex items-center gap-3 text-left">
            <CaretLeft size={20} className="text-stone-400 group-hover:text-teal-700 transition-colors" weight="bold" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1">Previous</p>
              <p className="font-display text-base sm:text-lg text-teal-700 truncate">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/insights/${next.slug}`} className="group flex items-center gap-3 text-right justify-end">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1">Next</p>
              <p className="font-display text-base sm:text-lg text-teal-700 truncate">{next.title}</p>
            </div>
            <CaretRight size={20} className="text-stone-400 group-hover:text-teal-700 transition-colors" weight="bold" />
          </Link>
        </div>
      </section>

      <section className="bg-ivory-50 py-16">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-5">
            <div>
              <p className="numeral mb-3">RELATED</p>
              <h2 className="font-display text-3xl lg:text-4xl text-teal-800">Keep reading.</h2>
            </div>
            <Link
              to="/insights"
              className="text-[12px] uppercase tracking-[0.16em] text-teal-700 border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors inline-flex items-center gap-2"
            >
              All insights <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((ins) => (
              <InsightCard key={ins.slug} insight={ins} />
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
