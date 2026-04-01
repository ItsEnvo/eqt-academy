'use client';

export default function WinRateTracker() {
  const stats = [
    { label: 'Today', wins: 4, total: 5, percentage: 80 },
    { label: 'This Week', wins: 18, total: 23, percentage: 78 },
    { label: 'This Month', wins: 67, total: 85, percentage: 79 },
    { label: 'All Time', wins: 412, total: 530, percentage: 78 },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="fade-in">
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-2xl p-8 md:p-12 glow-border animate-pulse-glow max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-teal">
                Live Win Rate Tracker
              </h2>
              <div className="inline-flex items-center gap-2 bg-primary-teal/10 text-primary-teal px-4 py-2 rounded-full text-sm font-medium mb-2">
                <div className="w-2 h-2 bg-primary-teal rounded-full animate-pulse"></div>
                Every trade verified by AI in real time
              </div>
              <p className="text-text-secondary">
                Updated daily — no hiding losses
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-text-secondary text-sm font-medium mb-2">
                    {stat.label}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {stat.wins}/{stat.total}
                  </div>
                  <div className={`text-lg font-semibold ${
                    stat.percentage >= 80 
                      ? 'text-green-400' 
                      : stat.percentage >= 70 
                        ? 'text-primary-teal'
                        : 'text-yellow-400'
                  }`}>
                    ({stat.percentage}%)
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}