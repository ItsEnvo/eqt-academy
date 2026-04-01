'use client';

export default function HeroSection() {
  const scrollToMentorship = () => {
    document.getElementById('mentorship')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="animated-grid"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Become a Six Figure{' '}
            <span className="text-primary-teal">Funded</span> and{' '}
            <span className="text-primary-gold">Profitable</span> Trader
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-primary-teal">
            In Less Than Six Months
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-12 leading-relaxed">
            EQT Academy teaches traders to think like professionals — structure, liquidity, and precision. 
            Built for those ready to go all in.
          </p>
        </div>

        {/* YouTube Video */}
        <div className="fade-in mb-12">
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden glow-border">
            <iframe
              src="https://www.youtube.com/embed/VNOpLg0otLo"
              title="EQT Academy Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="fade-in mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <a
              href="https://whop.com/eqt-academy/"
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
        </div>

        {/* Free Community Links */}
        <div className="fade-in mb-6">
          <p className="text-text-secondary text-sm mb-3">Join our free community:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://t.me/+hNiKvJohY101MzBh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(0,136,204,.12)', border: '1px solid rgba(0,136,204,.25)', color: '#0088cc' }}
            >
              <span>✈️</span> Join Free Telegram
            </a>
            <a
              href="https://discord.gg/YOUR_INVITE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'rgba(88,101,242,.12)', border: '1px solid rgba(88,101,242,.25)', color: '#5865F2' }}
            >
              <span>💬</span> Join Free Discord
            </a>
          </div>
        </div>

        {/* Limited Spots Notice */}
        <div className="fade-in">
          <p className="text-text-secondary text-sm md:text-base">
            Limited spots available this month
          </p>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-bg to-transparent"></div>
    </section>
  );
}