import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — Sabarm Business Solutions" description="The page you are looking for could not be found." />
      <section className="min-h-[70vh] flex items-center justify-center bg-ivory-50">
        <div className="max-w-xl text-center px-6">
          <p className="numeral mb-6">ERR / 404</p>
          <h1 className="font-display text-6xl lg:text-7xl text-teal-800 mb-6 leading-[1.04]">
            Off-ledger.
          </h1>
          <p className="text-stone-600 mb-8 leading-relaxed">
            The page you are looking for could not be reconciled. Let's get you back to something that balances.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-ivory-50 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-teal-700 transition-colors"
            >
              Home page
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 border border-teal-700 text-teal-700 px-8 py-4 text-[12px] tracking-[0.16em] uppercase hover:bg-teal-700 hover:text-ivory-50 transition-colors"
            >
              Our services
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
