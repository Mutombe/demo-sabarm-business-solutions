import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { services } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  return (
    <PageTransition>
      <SEO
        title="Services — Sabarm Business Solutions"
        description="Audit, tax, advisory, bookkeeping, payroll, company secretarial and due diligence — for Zimbabwean businesses of every size."
      />
      <PageHero
        numeral="02 / SERVICES"
        eyebrow="What we do"
        title="A full-service practice, sized to your business."
        sub="Seven core service lines, delivered as one continuous team. The partner who signs your audit opinion is the same partner who understands your tax position and your governance file."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-stone-200">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 60} className="border-r border-b border-stone-200 -ml-px -mt-px">
                <ServiceCard service={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal-800 text-ivory-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="numeral text-copper-300 mb-4">SCOPE &amp; FEES</p>
            <h2 className="font-display text-3xl lg:text-4xl leading-tight text-balance mb-4">
              Every engagement begins with a scoped, fixed-fee proposal.
            </h2>
            <p className="text-teal-100/85 leading-relaxed max-w-2xl">
              No surprise invoices, no time-sheet anxiety. You receive a named team, a clear timeline, and a fee your board can plan around.
            </p>
          </div>
          <div className="lg:col-span-5 flex lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-copper-500 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-copper-600 transition-colors"
            >
              Request a proposal
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
