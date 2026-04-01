'use client';

export default function StorySection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/5 to-primary-gold/5"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="fade-in text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-teal">
            I've Been Where You Are
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl leading-relaxed">
            <p className="text-text-primary">
              I started trading in 2020 after losing my job during Covid. I was delivering Uber Eats, 
              working in a studio, and studying charts every day, trying to figure it out.
            </p>
            
            <p className="text-text-primary">
              I failed, learned, and built a system that changed my life.
            </p>
            
            <p className="text-primary-gold font-medium text-xl md:text-2xl">
              Now, I'm helping traders do the same.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}