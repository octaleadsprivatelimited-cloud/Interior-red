import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Star, CheckCircle, Home, Building, Users, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Interior Designers in Hyderabad | Dream Space Interiors | Telangana',
  description: 'Top interior designers in Hyderabad, Telangana. Professional residential and commercial interior design services. Award-winning designs for homes and offices in Hyderabad.',
  keywords: [
    'interior designers Hyderabad',
    'interior design Hyderabad',
    'home interior design Hyderabad',
    'residential interior design Hyderabad',
    'commercial interior design Hyderabad',
    'interior design company Hyderabad',
    'best interior designers Hyderabad',
    'interior design services Hyderabad',
    'Hyderabad interior designers',
    'Telangana interior design',
    'interior design Banjara Hills',
    'interior design Jubilee Hills',
    'interior design Gachibowli',
    'interior design HITEC City'
  ],
};

const InteriorDesignHyderabad = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Interior Design',
      description: 'Transform your home in Hyderabad with our expert residential interior design services. From apartments to villas, we create beautiful living spaces.',
      features: [
        'Apartment interior design',
        'Villa interior design',
        'Home renovation',
        'Kitchen design',
        'Bedroom design',
        'Living room design'
      ]
    },
    {
      icon: Building,
      title: 'Commercial Interior Design',
      description: 'Professional office and commercial space design in Hyderabad. Create productive work environments that reflect your brand.',
      features: [
        'Office interior design',
        'Retail space design',
        'Restaurant interior design',
        'Showroom design',
        'Corporate office design',
        'Co-working space design'
      ]
    }
  ];

  const areas = [
    'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'HITEC City', 'Gachibowli', 'Kondapur',
    'Madhapur', 'Begumpet', 'Secunderabad', 'Ameerpet', 'Kukatpally', 'Miyapur'
  ];

  const stats = [
    { number: '60+', label: 'Projects in Hyderabad', icon: Home },
    { number: '100%', label: 'Client Satisfaction', icon: Star },
    { number: '6+', label: 'Years in Hyderabad', icon: Award },
    { number: '10+', label: 'Awards Won', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Interior Designers in <span className="text-accent-400">Hyderabad</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transform your space with Hyderabad's premier interior design company. 
              Expert designers creating stunning residential and commercial interiors across Telangana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg inline-flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-primary-900 transition-all duration-300 text-lg inline-flex items-center justify-center group"
              >
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-accent-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Interior Design Services in Hyderabad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional interior design services tailored for Hyderabad's diverse architecture and lifestyle needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <service.icon className="w-12 h-12 text-accent-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve in Hyderabad
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing interior design services across all major areas of Hyderabad and Telangana.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <MapPin className="w-6 h-6 text-accent-600 mx-auto mb-2" />
                <span className="text-gray-900 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dream Space Interiors in Hyderabad?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hyderabad's trusted interior design company with a proven track record of excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Award-Winning Designs</h3>
              <p className="text-gray-600">Recognized for excellence in interior design across Hyderabad and Telangana.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">Experienced designers with deep understanding of Hyderabad's architecture and culture.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">100% Satisfaction</h3>
              <p className="text-gray-600">Every project is completed to perfection with guaranteed client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-900 to-accent-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Space in Hyderabad?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get a free consultation with Hyderabad's top interior designers. 
            Let us bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-8 py-4 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-lg inline-flex items-center justify-center group"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <a
              href="tel:+918985456887"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-primary-900 transition-all duration-300 text-lg inline-flex items-center justify-center group"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +91 8985456887
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignHyderabad;
