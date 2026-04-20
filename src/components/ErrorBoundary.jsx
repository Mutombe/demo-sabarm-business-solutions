import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Sabarm site error:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
          <div className="max-w-md text-center">
            <p className="numeral mb-4">ERR / 500</p>
            <h1 className="font-display text-3xl text-teal-700 mb-4">
              Something didn't reconcile.
            </h1>
            <p className="text-stone-500 mb-8">
              A part of this page failed to load. You can refresh or return to the home page.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-teal-600 text-ivory-50 text-sm tracking-wide"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-stone-700 text-stone-700 text-sm tracking-wide"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
