import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service - Elite Interior Design',
  description: 'Read our terms of service and understand the conditions for using Elite Interior Design services.',
  keywords: ['terms of service', 'terms and conditions', 'legal terms', 'service agreement'],
};

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.'
    },
    {
      icon: Scale,
      title: 'Service Description',
      content: 'We provide interior design services including consultation, space planning, design development, and project management.'
    },
    {
      icon: Shield,
      title: 'Payment Terms',
      content: 'Payment terms are as specified in individual project agreements. All fees are due according to the agreed schedule.'
    },
    {
      icon: AlertTriangle,
      title: 'Limitation of Liability',
      content: 'Our liability is limited to the amount paid for our services. We are not liable for indirect or consequential damages.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white shadow-sm">
        <div className="container-custom py-8">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center text-accent hover:text-accent/80 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: January 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                These Terms of Service govern your use of Elite Interior Design's website and services. By using our services, you agree to these terms.
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => {
                  const Icon = section.icon;
                  return (
                    <div key={index} className="border-l-4 border-accent pl-6">
                      <div className="flex items-center mb-4">
                        <Icon className="w-6 h-6 text-accent mr-3" />
                        <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@eliteinteriordesign.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p><strong>Address:</strong> 123 Design Street, New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
