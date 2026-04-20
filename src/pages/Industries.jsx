import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { industries } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import IndustryCard from '../components/IndustryCard';

export default function Industries() {
  return (
    <PageTransition>
      <SEO
        title="Industries — Sabarm Business Solutions"
        description="Sector-specialist accounting, audit and advisory for financial services, mining, retail, manufacturing and NGOs."
      />
      <PageHero
        numeral="04 / INDUSTRIES"
        eyebrow="Sector specialisation"
        title="Sector specialists. Not generalists."
        sub="We concentrate our attention on five industries that shape the Zimbabwean economy. Every engagement is led by a team that has done the work before — in your sector, under your regulators, in your currency."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        image="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <SectionReveal key={ind.slug} delay={i * 80} className={i === 0 ? 'lg:col-span-2' : ''}>
                <IndustryCard industry={ind} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed sector panels */}
      <section className="bg-ivory-100 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 space-y-14">
          {industries.map((ind, i) => (
            <SectionReveal key={ind.slug} className="grid lg:grid-cols-12 gap-8 items-center">
              <div className={`lg:col-span-6 aspect-[4/3] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="lg:col-span-6">
                <p className="numeral mb-3">
                  {String(i + 1).padStart(2, '0')} / SECTOR
                </p>
                <h3 className="font-display text-3xl lg:text-4xl text-teal-800 mb-4 text-balance">
                  {ind.name}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">{ind.tagline}</p>
                <ul className="space-y-2 mb-6">
                  {ind.points.map((p, j) => (
                    <li key={j} className="text-[14px] text-stone-700 flex items-baseline gap-3">
                      <span className="text-copper-500 font-mono text-[11px] tabular-nums">0{j + 1}</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-teal-700 text-[12px] uppercase tracking-[0.16em] font-medium border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors"
                >
                  Discuss a {ind.name.split(' ')[0].toLowerCase()} engagement
                  <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
