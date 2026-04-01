'use client';

export default function WhatYouGet() {
  const features = [
    {
      icon: '📊',
      title: 'Daily Trade Signals',
      description: 'Exact entries, stop losses, and take profits for US30, NAS100, and Gold. Posted before the move.'
    },
    {
      icon: '🔴',
      title: 'Live Trading Sessions',
      description: 'Watch me trade live every morning during the New York session. Real money, real commentary.'
    },
    {
      icon: '📈',
      title: 'AI-Verified Track Record',
      description: 'Every trade logged automatically. Win rate updated in real time. Full transparency.'
    },
    {
      icon: '🎓',
      title: 'Full Trading Education',
      description: 'Learn the EQT Precision Model from scratch. Structure, liquidity, timing, risk management.'
    }
  ];

  return (
    <section className="py-20 px-4 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What's Inside <span className="text-primary-teal">EQT Academy</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="fade-in bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl p-8 glow-border hover:glow-border-gold transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}