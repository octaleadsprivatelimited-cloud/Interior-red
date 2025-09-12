import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Target, CheckCircle, Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Elite Interior Design',
  description: 'Learn about Elite Interior Design, our mission, values, and the expert team behind our award-winning interior design services.',
  keywords: ['about us', 'interior design team', 'design company', 'our story', 'mission', 'values'],
};

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Interior Designer',
      experience: '12 years',
      image: '/images/team-1.jpg',
      bio: 'Sarah specializes in residential design and has won multiple awards for her innovative approach to space planning.',
      specialties: ['Residential Design', 'Space Planning', 'Color Theory']
    },
    {
      name: 'Michael Chen',
      role: 'Commercial Design Director',
      experience: '10 years',
      image: '/images/team-2.jpg',
      bio: 'Michael leads our commercial design projects and has worked with Fortune 500 companies across the country.',
      specialties: ['Commercial Design', 'Office Planning', 'Brand Integration']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Senior Designer',
      experience: '8 years',
      image: '/images/team-3.jpg',
      bio: 'Emily brings a fresh perspective to luxury interior design with her background in fine arts and architecture.',
      specialties: ['Luxury Design', 'Art Integration', 'Custom Solutions']
    },
    {
      name: 'David Kim',
      role: 'Project Manager',
      experience: '6 years',
      image: '/images/team-4.jpg',
      bio: 'David ensures every project runs smoothly from start to finish, coordinating with contractors and vendors.',
      specialties: ['Project Management', 'Timeline Control', 'Quality Assurance']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, paying attention to the smallest details to deliver exceptional results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients, listening to their needs and incorporating their vision into our designs.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We stay ahead of design trends and use cutting-edge techniques to create unique, modern spaces.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices and client relationships.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Awards Won' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop"
            alt="Our design team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            About
            <span className="block text-accent">Elite Interior Design</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            We are passionate designers dedicated to creating beautiful, 
            functional spaces that inspire and delight.
          </p>
          <Link
            href="/contact"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center group"
          >
            Work With Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Founded on a Vision
                <span className="block text-accent">of Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Elite Interior Design was founded in 2013 with a simple yet powerful vision: 
                to transform ordinary spaces into extraordinary experiences. What started as 
                a small team of passionate designers has grown into one of the most respected 
                interior design firms in the industry.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our journey began when our founder, Sarah Johnson, recognized the need for 
                interior design services that truly understood the client's vision while 
                bringing professional expertise to every project. Today, we continue to 
                uphold those founding principles while embracing innovation and creativity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop"
                alt="Our design process"
                width={600}
                height={700}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us
              <span className="block text-accent">Every Day</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values guide everything we do, from initial consultation 
              to final project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Meet Our Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Designers
              <span className="block text-accent">Behind Every Project</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our talented team of designers brings together years of experience, 
              creativity, and passion for interior design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-accent font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.experience} experience</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="space-y-2">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mr-2 mb-2"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-gradient-to-br from-accent to-brown-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-80" />
            <blockquote className="text-2xl lg:text-3xl font-medium mb-8 leading-relaxed">
              "Working with Elite Interior Design was an absolute pleasure. Their attention 
              to detail and creative vision transformed our home beyond our expectations. 
              The team's professionalism and expertise made the entire process seamless."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Image
                src="/images/testimonial-client.jpg"
                alt="Client testimonial"
                width={60}
                height={60}
                className="w-15 h-15 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-bold text-lg">Jennifer Martinez</div>
                <div className="text-white/80">Homeowner, Beverly Hills</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our team can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link
              href="/portfolio"
              className="btn-secondary inline-flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
