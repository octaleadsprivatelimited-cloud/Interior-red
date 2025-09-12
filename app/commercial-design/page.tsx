import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Building, CheckCircle, Star, Users, Target, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Interior Design Services - Elite Interior Design',
  description: 'Professional commercial interior design services for offices, retail spaces, restaurants, and more. Boost productivity and impress clients.',
  keywords: ['commercial interior design', 'office design', 'retail design', 'restaurant design', 'workplace design'],
};

const CommercialDesign = () => {
  const services = [
    {
      title: 'Office Design',
      description: 'Create productive work environments that inspire creativity and collaboration.',
      features: ['Open plan layouts', 'Private offices', 'Meeting rooms', 'Break areas', 'Reception design'],
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      price: 'Starting at $15,000'
    },
    {
      title: 'Retail Design',
      description: 'Design retail spaces that enhance customer experience and drive sales.',
      features: ['Store layout', 'Product display', 'Customer flow', 'Brand integration', 'Lighting design'],
        image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
      price: 'Starting at $20,000'
    },
    {
      title: 'Restaurant Design',
      description: 'Create memorable dining experiences with innovative restaurant design.',
      features: ['Dining area layout', 'Kitchen design', 'Bar design', 'Ambiance creation', 'Brand storytelling'],
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      price: 'Starting at $25,000'
    },
    {
      title: 'Healthcare Design',
      description: 'Design healing environments that promote patient comfort and staff efficiency.',
      features: ['Patient rooms', 'Waiting areas', 'Treatment rooms', 'Staff areas', 'Compliance standards'],
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      price: 'Starting at $30,000'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Increased Productivity',
      description: 'Well-designed workspaces can increase employee productivity by up to 20%.'
    },
    {
      icon: Target,
      title: 'Brand Enhancement',
      description: 'Professional spaces reinforce your brand identity and values to clients.'
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'Stand out from competitors with innovative, functional design solutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Commercial interior design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Commercial
            <span className="block text-accent">Interior Design</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Create professional, inspiring work environments that boost productivity and impress clients.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Professional
              <span className="block text-accent">Commercial Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From corporate offices to retail spaces, we design commercial environments 
              that enhance your business performance and brand image.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-accent text-white text-sm font-medium rounded-full">
                      {service.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors duration-200">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Commercial Design
              <span className="block text-accent">Matters</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional commercial design goes beyond aesthetics - it's an investment 
              in your business success and employee well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Streamlined
                <span className="block text-accent">Project Management</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand that commercial projects require minimal disruption to your 
                business operations. Our streamlined process ensures efficient execution 
                with maximum results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Minimal Disruption</h3>
                    <p className="text-gray-600">We work around your business hours to minimize operational impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous quality control ensures every detail meets professional standards.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Star className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Integration</h3>
                    <p className="text-gray-600">Every design element reinforces your brand identity and values.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/commercial-process.jpg"
                alt="Commercial design process"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your commercial design needs and create a space that enhances 
            your business performance and impresses your clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center group text-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/portfolio"
              className="border-2 border-white text-white hover:bg-white hover:text-accent px-8 py-4 rounded-lg font-medium transition-colors duration-200 inline-flex items-center justify-center text-lg"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommercialDesign;
