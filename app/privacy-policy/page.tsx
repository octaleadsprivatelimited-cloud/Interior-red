import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Elite Interior Design',
  description: 'Learn how Elite Interior Design protects your privacy and handles your personal information.',
  keywords: ['privacy policy', 'data protection', 'privacy', 'personal information'],
};

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: 'We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.'
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.'
    },
    {
      icon: Lock,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.'
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600">
                Last updated: January 15, 2024
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                At Elite Interior Design, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
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
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> privacy@eliteinteriordesign.com</p>
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

export default PrivacyPolicy;
