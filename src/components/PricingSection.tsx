'use client';

export default function PricingSection() {
  const scrollToMentorship = () => {
    document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose Your <span className="text-primary-teal">Path</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* EQT Academy Plan */}
          <div className="fade-in bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-8 glow-border-gold relative">
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-gold text-primary-bg px-4 py-2 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                EQT Academy
              </h3>
              <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                $200<span className="text-lg text-text-secondary">/month</span>
              </div>
              <div className="text-text-secondary">
                or $50/week
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Daily trade signals',
                'Live trading sessions every morning',
                'AI-verified win rate tracker',
                'Full education library',
                'Discord + Telegram community'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary-gold rounded-full flex-shrink-0"></div>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://whop.com/eqt-academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-primary-gold text-primary-bg font-bold py-4 px-6 rounded-xl text-center block hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Join EQT Academy
            </a>
          </div>

          {/* 1-on-1 Mentorship Plan */}
          <div className="fade-in bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-8 glow-border relative">
            {/* Limited Spots Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-teal text-primary-bg px-4 py-2 rounded-full text-sm font-bold">
                LIMITED SPOTS
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                1-on-1 Mentorship
              </h3>
              <div className="text-4xl md:text-5xl font-bold text-primary-teal mb-2">
                Apply
              </div>
              <div className="text-text-secondary">
                Custom pricing
              </div>
            </div>

            <div className="mb-6">
              <div className="text-text-secondary text-sm mb-4">Everything in Academy +</div>
              <ul className="space-y-4">
                {[
                  'Personal 1-on-1 coaching calls',
                  'Custom trading plan',
                  'Direct access to Envo',
                  'Priority support'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-teal rounded-full flex-shrink-0"></div>
                    <span className="text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={scrollToMentorship}
              className="w-full bg-transparent border-2 border-primary-teal text-primary-teal font-bold py-4 px-6 rounded-xl hover:bg-primary-teal hover:text-primary-bg transition-all duration-300 transform hover:scale-105"
            >
              Apply for Mentorship
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}