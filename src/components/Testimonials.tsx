'use client';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Jose',
      initial: 'J',
      quote: 'The EQT Precision Model completely changed how I approach trading. I went from inconsistent losses to consistent wins.',
      result: 'First Payout in 45 Days'
    },
    {
      name: 'Adriel',
      initial: 'A',
      quote: 'Envo\'s teaching style is unlike anything else. He breaks down complex concepts into actionable strategies that actually work.',
      result: 'Passed Evaluation in 30 Days'
    },
    {
      name: 'Angelina',
      initial: 'A',
      quote: 'Best investment I\'ve made in my trading career. The community and support alone are worth it, but the results speak for themselves.',
      result: '$10K+ Monthly Payouts'
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built by Traders. <span className="text-primary-gold">Proven by Results.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="fade-in bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-xl p-8 glow-border relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-teal text-3xl opacity-50">
                "
              </div>

              {/* Avatar */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-teal rounded-full flex items-center justify-center text-primary-bg font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-primary-gold text-sm font-medium">{testimonial.result}</div>
                </div>
              </div>

              {/* Quote */}
              <p className="text-text-secondary leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}