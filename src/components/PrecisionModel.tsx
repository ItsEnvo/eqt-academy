'use client';

export default function PrecisionModel() {
  const pillars = [
    {
      title: 'Execution',
      description: 'Master precise entry and exit strategies with professional-grade execution techniques.',
      icon: '⚡'
    },
    {
      title: 'Quality',
      description: 'Learn to identify high-probability setups and filter out noise.',
      icon: '🎯'
    },
    {
      title: 'Timing',
      description: 'Develop an intuitive sense of market timing.',
      icon: '⏰'
    }
  ];

  return (
    <section className="py-20 px-4 section-alt">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Is the <span className="text-primary-teal">EQT Precision Model</span>?
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
            The EQT Precision Model is a framework built on Execution, Quality, and Timing — 
            the three pillars of consistent trading.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="fade-in bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl p-8 text-center glow-border"
            >
              <div className="text-5xl mb-4">{pillar.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary-teal">
                {pillar.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in text-center">
          <div className="text-lg md:text-xl font-medium text-text-secondary">
            <span className="text-primary-teal">Execution</span>
            {' · '}
            <span className="text-primary-gold">Quality</span>
            {' · '}
            <span className="text-primary-teal">Timing</span>
          </div>
        </div>
      </div>
    </section>
  );
}