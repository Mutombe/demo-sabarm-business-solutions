import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Quotes,
  Star,
  ShieldCheck,
  Target,
  Handshake,
  Scales,
  Phone,
  WhatsappLogo,
  CheckCircle,
} from '@phosphor-icons/react';
import {
  hero,
  stats,
  values,
  services,
  industries,
  insights,
  reviews,
  process,
  credentials,
  business,
  waHref,
} from '../data/siteData';

import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import InsightCard from '../components/InsightCard';

const VALUE_ICONS = { ShieldCheck, Target, Handshake, Scales };

export default function Home() {
  const [featuredInsight, ...otherInsights] = insights;

  return (
    <PageTransition>
      <SEO
        title="Sabarm Business Solutions — Chartered Accounting, Audit & Advisory | Harare"
        description={hero.sub}
      />

      {/* HERO */}
      <section className="relative bg-ivory-50 overflow-hidden">
        <div className="absolute inset-0 fine-grid opacity-60 pointer-events-none" />
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-12 lg:pt-16 pb-20 lg:pb-24">
          {/* Top meta row */}
          <div className="flex items-center justify-between mb-10 lg:mb-14">
            <p className="numeral text-teal-700">01 / INTRODUCTION</p>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-stone-500 font-mono tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-copper-500 animate-pulse" />
              Accepting engagements · FY 2026
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <p className="text-[12px] uppercase tracking-[0.22em] text-copper-500 font-mono mb-6">
                {hero.eyebrow}
              </p>
              <h1 className="font-display text-[42px] sm:text-6xl lg:text-[78px] leading-[1.02] text-teal-800 text-balance">
                {hero.headline}
                <span className="block italic text-teal-600 mt-1">
                  {hero.headlineAccent}
                </span>
              </h1>
              <p className="mt-8 text-stone-600 text-base lg:text-lg leading-relaxed max-w-2xl text-pretty">
                {hero.sub}
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to={hero.ctaPrimary.to}
                  className="inline-flex items-center justify-center gap-2 bg-teal-600 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-teal-700 transition-colors"
                >
                  {hero.ctaPrimary.label}
                  <ArrowRight size={14} weight="bold" />
                </Link>
                <Link
                  to={hero.ctaSecondary.to}
                  className="inline-flex items-center justify-center gap-2 border border-teal-700 text-teal-700 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-teal-700 hover:text-ivory-50 transition-colors"
                >
                  {hero.ctaSecondary.label}
                </Link>
              </div>

              {/* Meta grid */}
              <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-5 max-w-2xl pt-10 border-t border-stone-200">
                {hero.meta.map((s) => (
                  <div key={s.k}>
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1.5">
                      {s.k}
                    </dt>
                    <dd className="font-display text-2xl text-teal-700 tabular-nums">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hero imagery — layered, editorial */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] bg-teal-100 overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.imageAlt}
                  loading="eager"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-teal-900/10" />
              </div>
              <div className="absolute -bottom-8 -left-8 sm:-left-14 w-44 sm:w-56 aspect-[4/5] bg-ivory-100 overflow-hidden shadow-xl border-4 border-ivory-50 hidden sm:block">
                <img
                  src={hero.secondaryImage}
                  alt={hero.secondaryImageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute top-5 right-5 bg-ivory-50 px-4 py-3 shadow-md border border-stone-200">
                <div className="flex items-center gap-1 mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={12} weight="fill" className="text-copper-500" />
                  ))}
                </div>
                <div className="text-[10px] text-stone-500 font-mono tracking-wide">
                  <span className="text-teal-700 font-semibold">4.9 / 5</span> · 20 Google reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="border-y border-stone-200 bg-ivory-100">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((c, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <CheckCircle size={18} className="text-teal-600 shrink-0" weight="duotone" />
              <div>
                <div className="font-semibold text-teal-700 tracking-tight">{c.label}</div>
                <div className="text-[11px] text-stone-500 uppercase tracking-wider font-mono mt-0.5 truncate">
                  {c.k}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="numeral mb-4">02 / SERVICES</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-teal-800 leading-[1.08] text-balance">
                A full-service practice. Sized to your business.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-stone-600 leading-relaxed text-pretty">
                From statutory audit through to transaction advisory, Sabarm works as one continuous team — so that the partner who signs your audit opinion is the same partner who understands your tax position and your governance file.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 mt-6 text-teal-700 text-[12px] uppercase tracking-[0.16em] font-medium border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors"
              >
                All services
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-stone-200">
            {services.map((s, i) => (
              <div key={s.slug} className="border-r border-b border-stone-200 -ml-px -mt-px">
                <ServiceCard service={s} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS — deep teal ledger band */}
      <section className="relative bg-teal-800 text-ivory-50 overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 fine-grid opacity-20 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
          <div className="grid md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className="border-t border-teal-600 pt-5">
                  <p className="numeral text-copper-300 mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <div className="font-display text-5xl lg:text-6xl text-ivory-50 tabular-nums leading-none mb-4">
                    {s.value}
                  </div>
                  <p className="text-sm text-teal-100/80 leading-relaxed max-w-[240px]">
                    {s.label}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-ivory-100 py-20 lg:py-28">
        <div className="grain" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-3xl mb-16">
            <p className="numeral mb-4">03 / FIRM VALUES</p>
            <h2 className="font-display text-4xl sm:text-5xl text-teal-800 leading-[1.08] text-balance">
              The four disciplines we practise — every engagement, every year.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon] || ShieldCheck;
              return (
                <SectionReveal key={v.title} delay={i * 80} className="bg-ivory-50 p-8 flex flex-col">
                  <Icon size={28} className="text-copper-500 mb-6" weight="duotone" />
                  <h3 className="font-display text-xl text-teal-700 mb-3">
                    <span className="text-stone-400 font-mono text-sm mr-3">0{i + 1}</span>
                    {v.title}
                  </h3>
                  <p className="text-[14px] text-stone-600 leading-relaxed">{v.body}</p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="numeral mb-4">04 / INDUSTRIES</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-teal-800 leading-[1.08] text-balance">
                Sector specialists. Not generalists.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-stone-600 leading-relaxed">
                We concentrate our attention on five industries that shape the Zimbabwean economy — so every engagement is led by a team that has done the work before.
              </p>
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 mt-6 text-teal-700 text-[12px] uppercase tracking-[0.16em] font-medium border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors"
              >
                Explore industries
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="md:col-span-2 lg:col-span-2">
              <IndustryCard industry={industries[0]} index={0} />
            </div>
            <div className="md:col-span-1 lg:col-span-1">
              <IndustryCard industry={industries[1]} index={1} />
            </div>
            <div className="md:col-span-1 lg:col-span-2">
              <IndustryCard industry={industries[2]} index={2} />
            </div>
            <div className="md:col-span-1 lg:col-span-3">
              <IndustryCard industry={industries[3]} index={3} />
            </div>
            <div className="md:col-span-1 lg:col-span-2">
              <IndustryCard industry={industries[4]} index={4} />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-teal-50 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 fine-grid opacity-40 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-3xl mb-14">
            <p className="numeral mb-4">05 / HOW WE WORK</p>
            <h2 className="font-display text-4xl sm:text-5xl text-teal-800 leading-[1.08] text-balance">
              A predictable four-step rhythm.
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {process.map((p, i) => (
              <SectionReveal key={p.n} delay={i * 80} className="bg-ivory-50 p-8 relative">
                <div className="flex items-center justify-between mb-7">
                  <span className="font-display text-5xl text-teal-200 tabular-nums leading-none">
                    {p.n}
                  </span>
                  {i < process.length - 1 && (
                    <ArrowRight size={20} className="text-copper-400 hidden lg:block" weight="bold" />
                  )}
                </div>
                <h3 className="font-display text-xl text-teal-700 mb-3">{p.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{p.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-ivory-50 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="numeral mb-4">06 / CLIENT VOICE</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-teal-800 leading-[1.08] text-balance">
                What our corporate clients say.
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-end gap-5">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={18} weight="fill" className="text-copper-500" />
                ))}
              </div>
              <p className="text-sm text-stone-500">
                <span className="text-teal-700 font-semibold">{business.rating} / 5</span> across {business.reviewCount} Google reviews
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {reviews.map((r, i) => (
              <SectionReveal key={i} delay={i * 80} className="bg-ivory-100 border border-stone-200 p-8 lg:p-10 relative flex flex-col">
                <Quotes size={28} className="text-copper-400 mb-6" weight="fill" />
                <p className="font-display text-lg lg:text-xl text-teal-800 leading-snug mb-8 text-balance">
                  "{r.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-stone-300/70 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-stone-800 text-[14px]">{r.name}</div>
                    <div className="text-[12px] text-stone-500 mt-0.5">{r.role}</div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array(r.rating).fill(0).map((_, j) => (
                      <Star key={j} size={12} weight="fill" className="text-copper-500" />
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-ivory-100 py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-7">
              <p className="numeral mb-4">07 / INSIGHTS</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-teal-800 leading-[1.08] text-balance">
                Writing that finance teams actually use.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-stone-600 leading-relaxed">
                Our partners publish short, practical notes on Zimbabwean accounting, tax and reporting — the kind of thing a CFO can circulate to the audit committee without editing.
              </p>
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 mt-6 text-teal-700 text-[12px] uppercase tracking-[0.16em] font-medium border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors"
              >
                All insights
                <ArrowUpRight size={14} weight="bold" />
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className="mb-6">
            <InsightCard insight={featuredInsight} featured />
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherInsights.slice(0, 3).map((ins, i) => (
              <SectionReveal key={ins.slug} delay={i * 80}>
                <InsightCard insight={ins} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-teal-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
            alt=""
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-teal-950/70" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="numeral text-copper-300 mb-6">08 / GET STARTED</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ivory-50 leading-[1.06] text-balance mb-8">
              Let's talk about the year ahead.
            </h2>
            <p className="text-lg text-teal-100/85 max-w-2xl leading-relaxed mb-10 text-pretty">
              Most mandates begin with a no-cost discovery meeting — one hour, no slides, no obligation. Book yours below and a partner will come back within one working day.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-copper-500 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-copper-600 transition-colors"
              >
                Book a consultation
                <ArrowRight size={14} weight="bold" />
              </Link>
              <a
                href={waHref('Hello Sabarm — I would like to book a discovery meeting.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ivory-100/40 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-ivory-50 hover:text-teal-800 transition-colors"
              >
                <WhatsappLogo size={14} weight="fill" />
                WhatsApp a partner
              </a>
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center gap-2 text-ivory-50 px-4 py-4 text-[13px] hover:text-copper-300 transition-colors"
              >
                <Phone size={14} weight="bold" />
                {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
