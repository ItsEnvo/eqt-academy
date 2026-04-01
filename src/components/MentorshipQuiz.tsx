'use client';

import { useState } from 'react';

interface QuizStep {
  question: string;
  options: string[];
}

export default function MentorshipQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const quizSteps: QuizStep[] = [
    {
      question: "How much trading experience do you have?",
      options: ["Beginner", "Some success but inconsistent", "Expert and profitable"]
    },
    {
      question: "What markets do you currently trade?",
      options: ["Forex", "Futures/Indices", "Crypto", "I haven't started yet"]
    },
    {
      question: "What's your biggest challenge right now?",
      options: ["Finding consistent setups", "Managing risk/emotions", "Scaling my account", "Everything"]
    },
    {
      question: "How much time can you dedicate to trading daily?",
      options: ["1-2 hours", "3-4 hours", "Full time"]
    },
    {
      question: "What's your trading goal in the next 6 months?",
      options: ["Pass a funded evaluation", "Become consistently profitable", "Scale to 6 figures", "Replace my 9-5 income"]
    },
    {
      question: "Are you willing to invest in yourself to reach your goals?",
      options: ["Yes absolutely", "Depends on the investment", "I need to think about it"]
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = answer;
    setAnswers(newAnswers);
    
    setIsTransitioning(true);
    setTimeout(() => {
      if (currentStep < quizSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setCurrentStep(currentStep + 1); // Move to form step
      }
      setIsTransitioning(false);
    }, 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const goBack = () => {
    if (currentStep > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section id="mentorship" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="fade-in text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for <span className="text-primary-teal">Personal Coaching</span>?
          </h2>
          <p className="text-lg text-text-secondary">
            Answer a few questions to see if 1-on-1 mentorship is right for you.
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl p-8 glow-border">
          {!isSubmitted ? (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-text-secondary">
                    Step {Math.min(currentStep + 1, 7)} of 7
                  </span>
                  <span className="text-sm text-text-secondary">
                    {Math.round(((Math.min(currentStep + 1, 7)) / 7) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-primary-teal h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(Math.min(currentStep + 1, 7) / 7) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Quiz Steps */}
              {currentStep < quizSteps.length && (
                <div className={`quiz-step ${!isTransitioning ? 'active' : 'exiting'}`}>
                  <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    {quizSteps[currentStep].question}
                  </h3>
                  <div className="space-y-4">
                    {quizSteps[currentStep].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        className="w-full p-4 text-left bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600 hover:border-primary-teal rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        <span className="font-medium text-primary-teal mr-3">
                          {String.fromCharCode(65 + index)})
                        </span>
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Step */}
              {currentStep === quizSteps.length && (
                <div className={`quiz-step ${!isTransitioning ? 'active' : 'exiting'}`}>
                  <h3 className="text-xl md:text-2xl font-bold mb-8 text-center">
                    Enter your information
                  </h3>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-primary-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-primary-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-primary-teal focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary-teal text-primary-bg font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                    >
                      Submit Application
                    </button>
                    <p className="text-xs text-text-secondary text-center">
                      By continuing, you consent to us emailing and texting you. Unsubscribe anytime.
                    </p>
                  </form>
                </div>
              )}

              {/* Back Button */}
              {currentStep > 0 && (
                <div className="mt-8 text-center">
                  <button
                    onClick={goBack}
                    className="text-primary-teal hover:text-primary-gold transition-colors duration-300"
                  >
                    ← Go Back
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-primary-teal">
                Application received!
              </h3>
              <p className="text-lg text-text-secondary mb-8">
                We'll be in touch within 24 hours.
              </p>
              <a
                href="https://whop.com/1-on-1-mentorship-72-e51c/vip-live-trading-group/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary-gold text-primary-bg font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Join the group while you wait
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}