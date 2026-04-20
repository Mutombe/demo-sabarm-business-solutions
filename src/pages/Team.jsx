import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import { team, credentials } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Team() {
  return (
    <PageTransition>
      <SEO
        title="Our Team — Sabarm Business Solutions"
        description="Meet the chartered accountants, tax specialists and advisors behind Sabarm Business Solutions."
      />
      <PageHero
        numeral="05 / TEAM"
        eyebrow="People"
        title="Chartered accountants. Senior-led engagements."
        sub="The strength of a professional services firm lives in its people. Our partners remain close to every file — reviewing working papers, writing the opinions, and presenting to your board."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Team' }]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          {/* Partners (first 3 featured) */}
          <SectionReveal className="mb-10">
            <p className="numeral mb-3">PARTNERS</p>
            <h2 className="font-display text-3xl lg:text-4xl text-teal-800 mb-3">
              The partner group.
            </h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Our three partners each lead a practice area — audit, tax and advisory — and jointly carry responsibility for every engagement the firm signs.
            </p>
          </SectionReveal>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {team.slice(0, 3).map((p, i) => (
              <SectionReveal key={p.name} delay={i * 100} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-stone-200 mb-5">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700"
                  />
                </div>
                <p className="numeral mb-2">
                  PARTNER / 0{i + 1}
                </p>
                <h3 className="font-display text-2xl text-teal-800 mb-1">{p.name}</h3>
                <p className="text-[13px] text-copper-600 font-medium tracking-wide mb-3">{p.role} · {p.creds}</p>
                <p className="text-sm text-stone-600 leading-relaxed">{p.bio}</p>
              </SectionReveal>
            ))}
          </div>

          {/* Senior team */}
          <SectionReveal className="mb-10">
            <p className="numeral mb-3">SENIOR TEAM</p>
            <h2 className="font-display text-3xl lg:text-4xl text-teal-800 mb-3">
              Managers &amp; seniors.
            </h2>
            <p className="text-stone-600 max-w-2xl leading-relaxed">
              Deeply technical specialists who run the day-to-day of our engagements — on the ground with your team.
            </p>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {team.slice(3).map((p, i) => (
              <SectionReveal key={p.name} delay={i * 80} className="group">
                <div className="aspect-[4/5] overflow-hidden bg-stone-200 mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-display text-lg text-teal-800 leading-tight">{p.name}</h4>
                <p className="text-[12px] text-copper-600 font-medium tracking-wide mt-1 mb-2">{p.role}</p>
                <p className="text-[11px] uppercase tracking-wider text-stone-500 font-mono">{p.creds}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-teal-800 text-ivory-50 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="mb-10 max-w-2xl">
            <p className="numeral text-copper-300 mb-4">CREDENTIALS</p>
            <h2 className="font-display text-3xl lg:text-4xl leading-tight text-balance">
              Registered, regulated, and accountable.
            </h2>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-teal-600">
            {credentials.map((c, i) => (
              <div key={i} className="bg-teal-800 p-6">
                <p className="numeral text-copper-300 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h4 className="font-display text-lg text-ivory-50 mb-2">{c.label}</h4>
                <p className="text-[12px] text-teal-100/80 font-mono tracking-wide uppercase leading-snug">
                  {c.k}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-copper-500 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-copper-600 transition-colors"
            >
              Work with our team
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
