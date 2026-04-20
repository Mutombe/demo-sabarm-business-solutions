import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  WhatsappLogo,
  CaretLeft,
  CaretRight,
  ShieldCheck,
  Target,
  Handshake,
  Scales,
  ClipboardText,
  Receipt,
  ChartLineUp,
  BookOpen,
  Users,
  Vault,
  MagnifyingGlass,
  Briefcase,
} from '@phosphor-icons/react';

const IconMap = {
  ShieldCheck,
  Target,
  Handshake,
  Scales,
  ClipboardText,
  Receipt,
  ChartLineUp,
  BookOpen,
  Users,
  Vault,
  MagnifyingGlass,
  Briefcase,
};
import { services, waHref, business } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function ServiceDetail() {
  const { slug } = useParams();
  const idx = services.findIndex((s) => s.slug === slug);
  if (idx === -1) return <Navigate to="/services" replace />;
  const service = services[idx];
  const Icon = IconMap[service.icon] || Briefcase;
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const related = services.filter((_, i) => i !== idx).slice(0, 4);

  return (
    <PageTransition>
      <SEO
        title={`${service.title} — Sabarm Business Solutions`}
        description={service.short}
      />
      <PageHero
        numeral={`SERVICE 0${idx + 1} / 0${services.length}`}
        eyebrow="Service"
        title={service.title}
        sub={service.short}
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        image={service.hero}
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-12">
          {/* Main content */}
          <div className="lg:col-span-8">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-14 w-14 bg-teal-50 flex items-center justify-center text-teal-600">
                  <Icon size={28} weight="duotone" />
                </div>
                <p className="text-[12px] uppercase tracking-[0.2em] text-copper-500 font-mono">
                  What {service.title.toLowerCase()} looks like at Sabarm
                </p>
              </div>
              <div
                className="prose-sabarm text-stone-700 leading-relaxed text-[15.5px]"
                dangerouslySetInnerHTML={{ __html: `<p>${service.body}</p>` }}
              />
            </SectionReveal>

            <SectionReveal className="mt-14">
              <h2 className="font-display text-3xl text-teal-700 mb-8">What we deliver</h2>
              <div className="grid sm:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
                {service.sub.map((item, i) => (
                  <div key={i} className="bg-ivory-50 p-6 flex items-start gap-3">
                    <CheckCircle size={22} className="text-teal-600 shrink-0 mt-0.5" weight="duotone" />
                    <div>
                      <span className="numeral text-stone-400 block mb-1">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[14.5px] text-stone-700 leading-snug">{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal className="mt-14">
              <h2 className="font-display text-3xl text-teal-700 mb-6">Why choose Sabarm</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { t: 'Partner-led', b: 'Every engagement is led, reviewed and signed by a named partner — not delegated to a junior team.' },
                  { t: 'Sector-fluent', b: 'We bring the specific technical vocabulary, regulators, and reporting habits of your industry.' },
                  { t: 'Fixed fee', b: 'Proposals are scoped, priced and committed upfront. No billable-hour surprises.' },
                ].map((f, i) => (
                  <div key={i} className="border border-stone-200 p-6 bg-ivory-100/60">
                    <p className="numeral mb-3">{String(i + 1).padStart(2, '0')}</p>
                    <h4 className="font-display text-lg text-teal-700 mb-2">{f.t}</h4>
                    <p className="text-[13.5px] text-stone-600 leading-relaxed">{f.b}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-teal-700 text-ivory-50 p-7">
              <p className="numeral text-copper-300 mb-3">ENQUIRE</p>
              <h3 className="font-display text-2xl text-ivory-50 leading-tight mb-3">
                Talk to a partner about this service.
              </h3>
              <p className="text-[13.5px] text-teal-100/80 leading-relaxed mb-6">
                A one-hour discovery meeting is enough for us to understand your scope and come back with a fixed-fee proposal.
              </p>
              <div className="space-y-2.5">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-copper-500 text-ivory-50 py-3 text-[11px] uppercase tracking-[0.16em] hover:bg-copper-600 transition-colors"
                >
                  Book a consultation
                  <ArrowRight size={12} weight="bold" />
                </Link>
                <a
                  href={waHref(`Hello Sabarm — I'm interested in ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-ivory-50 text-teal-800 py-3 text-[11px] uppercase tracking-[0.16em] hover:bg-ivory-200 transition-colors"
                >
                  <WhatsappLogo size={12} weight="fill" /> WhatsApp
                </a>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 border border-teal-500/60 text-ivory-100 py-3 text-[11px] uppercase tracking-[0.16em] hover:bg-teal-800 transition-colors"
                >
                  <Phone size={12} weight="bold" /> {business.phone}
                </a>
              </div>
            </div>

            <div className="bg-ivory-100 border border-stone-200 p-7">
              <p className="numeral mb-3">FIRM STATS</p>
              <dl className="space-y-4">
                {[
                  { k: 'Years practising', v: '9' },
                  { k: 'Clients served', v: '140+' },
                  { k: 'Google rating', v: '4.9 / 5' },
                  { k: 'ICAZ partners', v: 'Yes' },
                ].map((s) => (
                  <div key={s.k} className="flex items-baseline justify-between border-b border-stone-200 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-[12px] uppercase tracking-wider text-stone-500 font-mono">{s.k}</dt>
                    <dd className="font-display text-xl text-teal-700 tabular-nums">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-ivory-50 border border-stone-200 p-7">
              <p className="numeral mb-3">OTHER SERVICES</p>
              <ul className="space-y-1">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/services/${r.slug}`}
                      className="flex items-center justify-between py-2.5 border-b border-stone-200 last:border-b-0 text-[14px] text-stone-700 hover:text-teal-700 transition-colors group"
                    >
                      <span>{r.title}</span>
                      <ArrowRight size={14} className="text-stone-400 group-hover:text-copper-500 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-ivory-100 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-8 grid grid-cols-2 gap-6">
          <Link to={`/services/${prev.slug}`} className="group flex items-center gap-3 text-left">
            <CaretLeft size={20} className="text-stone-400 group-hover:text-teal-700 transition-colors" weight="bold" />
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1">Previous</p>
              <p className="font-display text-base sm:text-lg text-teal-700 truncate">{prev.title}</p>
            </div>
          </Link>
          <Link to={`/services/${next.slug}`} className="group flex items-center gap-3 text-right justify-end">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1">Next</p>
              <p className="font-display text-base sm:text-lg text-teal-700 truncate">{next.title}</p>
            </div>
            <CaretRight size={20} className="text-stone-400 group-hover:text-teal-700 transition-colors" weight="bold" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
