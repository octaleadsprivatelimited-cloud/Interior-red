'use client';

import { useState, useEffect } from 'react';
import { Users, Award, Clock, Star, CheckCircle, TrendingUp } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers who trust our design expertise'
    },
    {
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'Awards Won',
      description: 'Industry recognition for our outstanding work'
    },
    {
      icon: Clock,
      number: 10,
      suffix: '+',
      label: 'Years Experience',
      description: 'Decade of expertise in interior design'
    },
    {
      icon: Star,
      number: 4.9,
      suffix: '/5',
      label: 'Client Rating',
      description: 'Average rating from our satisfied clients'
    },
    {
      icon: CheckCircle,
      number: 98,
      suffix: '%',
      label: 'Success Rate',
      description: 'Projects completed on time and within budget'
    },
    {
      icon: TrendingUp,
      number: 300,
      suffix: '%',
      label: 'Growth Rate',
      description: 'Year-over-year business growth'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section id="stats-section" className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
            Our Achievements
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Numbers That
            <span className="block text-yellow-300">Speak for Themselves</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our track record of success is built on years of dedication, 
            expertise, and commitment to excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-colors duration-300">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl lg:text-5xl font-bold block">
                      {stat.number === 4.9 ? (
                        <AnimatedNumber end={4.9} />
                      ) : (
                        <AnimatedNumber end={stat.number} />
                      )}
                      <span className="text-2xl lg:text-3xl">{stat.suffix}</span>
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              Let's create something extraordinary together. Our proven track record 
              speaks for itself, and we're ready to add your project to our success list.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
