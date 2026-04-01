'use client';

export default function Footer() {
  const socialLinks = [
    { name: 'YouTube', handle: '@ENVOTRADES', url: 'https://youtube.com/@ENVOTRADES' },
    { name: 'Twitter', handle: '@ENVOTRADES', url: 'https://twitter.com/ENVOTRADES' },
    { name: 'TikTok', handle: '@ENVOTRADES', url: 'https://tiktok.com/@ENVOTRADES' },
    { name: 'Discord', handle: 'Discord', url: '#' },
    { name: 'Telegram', handle: 'Telegram', url: 'https://t.me/+hNiKvJohY101MzBh' }
  ];

  return (
    <footer className="py-16 px-4 bg-gradient-to-t from-black to-primary-bg border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              EQT Academy
            </h3>
            <p className="text-primary-teal font-medium">
              Execution · Quality · Timing
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary-teal transition-colors duration-300"
              >
                {link.name} ({link.handle})
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-text-secondary text-sm">
              © 2026 EQT Academy. All rights reserved.
            </div>
            
            <div className="text-text-secondary text-xs text-center max-w-md">
              Trading involves substantial risk and is not suitable for every investor. 
              Past performance does not guarantee future results.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}