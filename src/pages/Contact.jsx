import React, { useState } from 'react';
import { toast } from 'sonner';
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
  WhatsappLogo,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react';
import { business, services, waHref, mailHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [sendVia, setSendVia] = useState('whatsapp'); // 'whatsapp' | 'email'

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and a brief message.');
      return;
    }
    const body = `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Service of interest: ${form.service || '—'}

${form.message}`;
    if (sendVia === 'whatsapp') {
      window.open(waHref(body), '_blank');
    } else {
      window.location.href = mailHref(`Sabarm enquiry — ${form.name}`, body);
    }
    toast.success(`Thanks, ${form.name.split(' ')[0]}. Sending your message via ${sendVia}.`);
  };

  const inputCls =
    'w-full bg-ivory-50 border border-stone-200 px-4 py-3 text-[14.5px] text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600/30 transition-all';

  return (
    <PageTransition>
      <SEO
        title="Contact — Sabarm Business Solutions"
        description="Get in touch with Sabarm Business Solutions. Mount Pleasant Business Park, Harare. +263 77 856 2152."
      />
      <PageHero
        numeral="08 / CONTACT"
        eyebrow="Get in touch"
        title="Let's talk about the year ahead."
        sub="A partner will come back within one working day. For same-day answers, WhatsApp is the fastest channel."
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-ivory-50 py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
          {/* Left — info */}
          <div className="lg:col-span-5 space-y-5">
            <SectionReveal>
              <p className="numeral mb-3">OUR OFFICE</p>
              <h2 className="font-display text-3xl lg:text-4xl text-teal-800 leading-[1.1] mb-6">
                Mount Pleasant Business Park.
              </h2>
            </SectionReveal>

            <div className="bg-ivory-100 border border-stone-200 divide-y divide-stone-200">
              {[
                { icon: MapPin, label: 'Address', value: business.address },
                { icon: Phone, label: 'Phone', value: business.phone, href: `tel:${business.phone.replace(/\s/g, '')}` },
                { icon: EnvelopeSimple, label: 'Email', value: business.email, href: `mailto:${business.email}` },
                {
                  icon: Clock,
                  label: 'Hours',
                  value: `Mon–Fri ${business.hours.weekdays} · Sat ${business.hours.saturday}`,
                },
              ].map((row, i) => {
                const Icon = row.icon;
                const Content = row.href ? 'a' : 'div';
                return (
                  <Content
                    key={i}
                    {...(row.href ? { href: row.href } : {})}
                    className="flex items-start gap-4 p-5 hover:bg-ivory-200/50 transition-colors"
                  >
                    <div className="h-10 w-10 bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                      <Icon size={18} weight="duotone" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-stone-500 font-mono mb-1">
                        {row.label}
                      </p>
                      <p className="text-[14.5px] text-stone-800 leading-snug">{row.value}</p>
                    </div>
                  </Content>
                );
              })}
            </div>

            <a
              href={waHref('Hello Sabarm — I would like to book a discovery meeting.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-teal-600 text-ivory-50 py-4 text-[12px] uppercase tracking-[0.16em] hover:bg-teal-700 transition-colors mt-5"
            >
              <WhatsappLogo size={14} weight="fill" />
              Chat on WhatsApp
            </a>

            <div className="aspect-[16/11] overflow-hidden border border-stone-200 mt-5">
              <iframe
                title="Sabarm Office — Google Maps"
                src={`https://www.google.com/maps?q=${business.mapQuery}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <SectionReveal>
              <p className="numeral mb-3">ENQUIRY</p>
              <h2 className="font-display text-3xl lg:text-4xl text-teal-800 leading-[1.1] mb-2">
                Send us a message.
              </h2>
              <p className="text-stone-600 mb-8 max-w-xl">
                Fill in the form below and choose how you'd like your enquiry delivered. A partner will respond within one working day.
              </p>
            </SectionReveal>
            <form onSubmit={onSubmit} className="space-y-4 bg-ivory-100 border border-stone-200 p-6 lg:p-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                    Full name *
                  </label>
                  <input name="name" value={form.name} onChange={onChange} required className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                    Company
                  </label>
                  <input name="company" value={form.company} onChange={onChange} className={inputCls} placeholder="Your company" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                    Email *
                  </label>
                  <input name="email" type="email" value={form.email} onChange={onChange} required className={inputCls} placeholder="you@company.com" />
                </div>
                <div>
                  <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                    Phone
                  </label>
                  <input name="phone" type="tel" value={form.phone} onChange={onChange} className={inputCls} placeholder="+263 ..." />
                </div>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                  Service of interest
                </label>
                <select name="service" value={form.service} onChange={onChange} className={inputCls}>
                  <option value="">Select a service...</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="General enquiry">General enquiry</option>
                </select>
              </div>
              <div>
                <label className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  required
                  rows={5}
                  className={inputCls}
                  placeholder="Tell us briefly about your business and what you're looking for."
                />
              </div>

              {/* Send via toggle */}
              <div className="pt-3">
                <p className="text-[11px] uppercase tracking-[0.16em] text-stone-500 font-mono block mb-3">
                  Send via
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: 'whatsapp', label: 'WhatsApp', Icon: WhatsappLogo },
                    { id: 'email', label: 'Email', Icon: EnvelopeSimple },
                  ].map(({ id, label, Icon }) => (
                    <button
                      type="button"
                      key={id}
                      onClick={() => setSendVia(id)}
                      className={`flex items-center justify-center gap-2 py-3 text-[12px] uppercase tracking-[0.14em] transition-colors border ${
                        sendVia === id
                          ? id === 'whatsapp'
                            ? 'bg-[#25D366] text-white border-[#25D366]'
                            : 'bg-copper-500 text-ivory-50 border-copper-500'
                          : 'bg-ivory-50 border-stone-300 text-stone-600 hover:border-teal-600'
                      }`}
                    >
                      <Icon size={14} weight="fill" />
                      {label}
                      {sendVia === id && <CheckCircle size={14} weight="fill" />}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 py-4 text-[12px] uppercase tracking-[0.16em] mt-3 transition-colors ${
                  sendVia === 'whatsapp'
                    ? 'bg-[#25D366] hover:bg-[#1faa52] text-white'
                    : 'bg-teal-600 hover:bg-teal-700 text-ivory-50'
                }`}
              >
                Send via {sendVia === 'whatsapp' ? 'WhatsApp' : 'Email'}
                <ArrowRight size={14} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
