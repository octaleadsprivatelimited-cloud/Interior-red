import { ArrowRight, MessageCircle, Palette, Ruler, Hammer, CheckCircle, Star } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start with a detailed discussion about your vision, needs, and budget to understand your project goals.',
      icon: MessageCircle,
      details: [
        'Project scope discussion',
        'Budget planning',
        'Timeline establishment',
        'Style preferences review'
      ]
    },
    {
      number: '02',
      title: 'Design Concept',
      description: 'Our team creates initial design concepts and mood boards to bring your vision to life.',
      icon: Palette,
      details: [
        'Mood board creation',
        'Color scheme selection',
        'Material recommendations',
        '3D visualization'
      ]
    },
    {
      number: '03',
      title: 'Space Planning',
      description: 'We develop detailed floor plans and layouts optimized for functionality and aesthetics.',
      icon: Ruler,
      details: [
        'Detailed floor plans',
        'Furniture placement',
        'Traffic flow optimization',
        'Storage solutions'
      ]
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'Our experienced team manages the entire implementation process with regular updates.',
      icon: Hammer,
      details: [
        'Project management',
        'Vendor coordination',
        'Quality control',
        'Timeline monitoring'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50 hidden md:block">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How We Work
            <span className="block text-accent">Step by Step</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process ensures your project is completed on time, 
            within budget, and exceeds your expectations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="flex items-center mb-4">
                    <span className="text-6xl font-bold text-accent/20 mr-4">
                      {step.number}
                    </span>
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Element */}
                <div className="flex-1">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <Icon className="w-16 h-16 mx-auto mb-4 opacity-80" />
                        <h4 className="text-xl font-semibold">Step {step.number}</h4>
                        <p className="text-white/80">{step.title}</p>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Dream Space Interiors?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity, expertise, and attention to detail to deliver 
              exceptional results that exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Award-Winning Design</h4>
              <p className="text-gray-600">
                Recognized for excellence in interior design with multiple industry awards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h4>
              <p className="text-gray-600">
                We stand behind our work with a comprehensive quality guarantee.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h4>
              <p className="text-gray-600">
                We complete projects on schedule without compromising on quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
