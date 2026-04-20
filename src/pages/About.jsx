import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Target, Handshake, Scales } from '@phosphor-icons/react';
import { values, business, stats, faqs, process } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

const VALUE_ICONS = { ShieldCheck, Target, Handshake, Scales };

export default function About() {
  return (
    <PageTransition>
      <SEO
        title="About — Sabarm Business Solutions"
        description="About Sabarm Business Solutions — an independent Zimbabwean firm of chartered accountants based in Mount Pleasant, Harare."
      />
      <PageHero
        numeral="07 / ABOUT"
        eyebrow="The firm"
        title="An independent Zimbabwean firm, practising quietly and well."
        sub="Founded in 2016 in Mount Pleasant, Sabarm was built on one premise: that the level of technical rigour, judgement and client intimacy available at the top of the profession should be available to Zimbabwean businesses of every size."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Story */}
      <section className="bg-ivory-50 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionReveal>
              <p className="numeral mb-4">OUR STORY</p>
              <h2 className="font-display text-4xl lg:text-5xl text-teal-800 leading-[1.08] text-balance mb-6">
                Built for the Zimbabwean market.
              </h2>
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
                  alt="Sabarm partner in office"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </SectionReveal>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[15.5px] text-stone-700 leading-relaxed">
            <SectionReveal>
              <p>
                Sabarm Business Solutions was founded in 2016 by a group of chartered accountants who had spent the first decade of their careers with Big Four firms and multinationals. What they saw, consistently, was a gap: the largest firms could serve the largest companies, but the mid-market and SME segment — the backbone of the Zimbabwean economy — was under-served by anyone who treated audit, tax and advisory as one integrated discipline.
              </p>
              <p>
                We set out to be that firm. Big-firm training, big-firm technical files, big-firm independence — delivered by a team small enough for the managing partner to know your finance director's name.
              </p>
              <p>
                Nine years on, Sabarm serves more than 140 clients across financial services, mining, retail, manufacturing and the NGO sector. Our partners remain personally involved in every engagement. The firm is ICAZ-registered and maintains its own comprehensive quality-control manual.
              </p>
              <p>
                We are based at Mount Pleasant Business Park in Harare. Most of our client base is Zimbabwean — but we also serve a growing portfolio of regional and diaspora owners who trust us to keep their Zimbabwean interests compliant, reported and audited to an institutional standard.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Mission / tagline card */}
      <section className="bg-teal-800 text-ivory-50 py-16 lg:py-20 relative overflow-hidden">
        <div className="grain" />
        <div className="absolute inset-0 fine-grid opacity-20" />
        <div className="relative max-w-[1100px] mx-auto px-5 lg:px-10 text-center">
          <SectionReveal>
            <p className="numeral text-copper-300 mb-6">OUR PROMISE</p>
            <blockquote className="font-display italic text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-ivory-50 text-balance">
              "{business.tagline}"
            </blockquote>
            <p className="mt-8 text-[12px] uppercase tracking-[0.2em] text-teal-200 font-mono">
              — The Sabarm Business Solutions promise
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-ivory-100 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-14">
            <p className="numeral mb-4">FIRM VALUES</p>
            <h2 className="font-display text-4xl lg:text-5xl text-teal-800 leading-[1.08] text-balance">
              The four disciplines we practise.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {values.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon];
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

      {/* Stats */}
      <section className="bg-ivory-50 py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-stone-200">
            {stats.map((s, i) => (
              <div key={i} className="border-r border-b border-stone-200 p-8">
                <p className="numeral mb-4">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div className="font-display text-5xl text-teal-700 tabular-nums mb-3">{s.value}</div>
                <p className="text-sm text-stone-600 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-teal-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 fine-grid opacity-40" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="numeral mb-4">HOW WE WORK</p>
            <h2 className="font-display text-4xl lg:text-5xl text-teal-800 leading-[1.08] text-balance">
              A predictable rhythm.
            </h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {process.map((p, i) => (
              <div key={p.n} className="bg-ivory-50 p-8">
                <span className="font-display text-5xl text-teal-200 tabular-nums leading-none block mb-6">
                  {p.n}
                </span>
                <h3 className="font-display text-xl text-teal-700 mb-3">{p.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory-50 py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionReveal>
              <p className="numeral mb-4">FAQ</p>
              <h2 className="font-display text-4xl text-teal-800 leading-[1.08] text-balance mb-6">
                Frequently asked questions.
              </h2>
              <p className="text-stone-600 leading-relaxed">
                If you don't see your question here, a partner is happy to take it directly — email or WhatsApp works.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 text-teal-700 text-[12px] uppercase tracking-[0.16em] font-medium border-b border-teal-700 pb-1 hover:text-copper-500 hover:border-copper-500 transition-colors"
              >
                Ask a partner
                <ArrowRight size={14} weight="bold" />
              </Link>
            </SectionReveal>
          </div>
          <div className="lg:col-span-8 space-y-0 border-t border-stone-200">
            {faqs.map((f, i) => (
              <SectionReveal key={i} delay={i * 50} className="border-b border-stone-200 py-6 group">
                <details>
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-5">
                    <span className="flex items-baseline gap-4">
                      <span className="numeral">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-display text-xl text-teal-800 text-pretty">{f.q}</span>
                    </span>
                    <span className="text-copper-500 text-xl font-light transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="pl-11 mt-4 text-[14.5px] text-stone-600 leading-relaxed max-w-2xl">
                    {f.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
