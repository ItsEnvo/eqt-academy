'use client';

export default function FinalCTA() {
  const scrollToMentorship = () => {
    document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 to-primary-gold/10"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="fade-in text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Start <span className="text-primary-teal">Today</span>.
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Join hundreds of traders building real consistency with the EQT Precision Model.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
            <a
              href="https://whop.com/1-on-1-mentorship-72-e51c/vip-live-trading-group/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-primary-gold text-primary-bg font-semibold px-8 py-4 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Join the Community — $200/mo
            </a>
            <button
              onClick={scrollToMentorship}
              className="w-full sm:w-auto bg-transparent border-2 border-primary-teal text-primary-teal font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary-teal hover:text-primary-bg transition-all duration-300 transform hover:scale-105"
            >
              Apply for 1-on-1 Mentorship
            </button>
          </div>

          {/* Free Community */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-6 mb-4">
            <a
              href="https://t.me/+hNiKvJohY101MzBh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(0,136,204,.12)', border: '1px solid rgba(0,136,204,.25)', color: '#0088cc' }}
            >
              <span>✈️</span> Free Telegram
            </a>
            <a
              href="https://discord.gg/Yhyg6Gj33"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(88,101,242,.12)', border: '1px solid rgba(88,101,242,.25)', color: '#5865F2' }}
            >
              <span>💬</span> Free Discord
            </a>
          </div>

          <p className="text-text-secondary text-sm">
            Limited enrollment • Premium support
          </p>
        </div>
      </div>
    </section>
  );
}