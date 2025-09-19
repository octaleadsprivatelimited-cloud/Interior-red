import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfect Color Palette for Your Home - Dream Space Interiors',
  description: 'Learn how to choose the perfect color palette for your home. Expert tips on color theory, room-by-room color schemes, and creating harmonious interiors.',
  keywords: ['home color palette', 'color theory', 'interior color schemes', 'room colors', 'paint colors', 'color psychology', 'home decor colors'],
};

export default function PerfectColorPaletteHome() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-accent to-brown-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container-custom h-full flex items-center">
          <div className="max-w-4xl">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                Color Theory
              </span>
              <span className="text-white/80 text-sm">January 10, 2024</span>
              <span className="text-white/80 text-sm">7 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              How to Choose the Perfect Color Palette for Your Home
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Learn the psychology of colors and how to create harmonious color schemes that reflect your personality and enhance your living space.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Michael Chen</h3>
                <p className="text-gray-600 text-sm">Color Theory Specialist</p>
              </div>
              <div className="ml-auto flex items-center gap-2">
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Share article"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-600" />
                </button>
                <button 
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=600&fit=crop"
                alt="Perfect Color Palette for Home"
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Color is one of the most powerful tools in interior design. It can transform a space, influence mood, and create the perfect atmosphere for your home. Understanding color theory and psychology will help you make informed decisions that result in beautiful, harmonious spaces.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Understanding Color Psychology</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Colors have the power to evoke emotions and influence behavior. Warm colors like red, orange, and yellow create energy and excitement, while cool colors like blue, green, and purple promote calm and relaxation. Understanding these psychological effects is crucial when choosing colors for different rooms.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-800 mb-3">Warm Colors</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Red: Energy, passion, excitement</li>
                    <li>• Orange: Creativity, enthusiasm, warmth</li>
                    <li>• Yellow: Happiness, optimism, energy</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">Cool Colors</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Blue: Calm, trust, stability</li>
                    <li>• Green: Nature, growth, balance</li>
                    <li>• Purple: Luxury, creativity, mystery</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The 60-30-10 Rule</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This timeless design principle helps create balanced color schemes. Use 60% of your dominant color (usually walls), 30% of a secondary color (furniture, curtains), and 10% of an accent color (pillows, artwork, accessories).
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "The 60-30-10 rule is a foolproof way to create balanced, professional-looking color schemes. It ensures your space has hierarchy and visual interest without overwhelming the eye."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Choosing Colors for Different Rooms</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Living Room</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The living room is where you entertain and relax. Choose colors that promote conversation and comfort. Warm neutrals, soft blues, or sage greens work well. Avoid overly bright colors that might be overwhelming during long periods of use.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Bedroom</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bedrooms should promote rest and relaxation. Cool colors like soft blues, lavenders, or warm neutrals are ideal. Avoid bright, energizing colors that might interfere with sleep.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Kitchen</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kitchens benefit from colors that stimulate appetite and energy. Warm colors like red, orange, or yellow work well, but use them sparingly. White and light colors create a clean, fresh feeling.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Bathroom</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Bathrooms should feel clean and spa-like. Light blues, soft greens, or crisp whites create a refreshing atmosphere. Avoid dark colors that might make the space feel smaller.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Creating Color Harmony</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Monochromatic Schemes</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use different shades, tints, and tones of the same color. This creates a sophisticated, cohesive look that's easy to achieve and maintain.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Analogous Schemes</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choose colors that are next to each other on the color wheel, like blue and green or red and orange. These combinations are naturally harmonious and pleasing to the eye.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Complementary Schemes</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use colors that are opposite each other on the color wheel, like blue and orange or red and green. These create dynamic, high-contrast looks that are visually striking.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Testing Your Colors</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Always test your colors before committing. Paint large swatches on your walls and observe them at different times of day. Colors can look very different under natural light versus artificial light.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Color Selection Checklist</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consider the room's purpose and desired mood
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Test colors in different lighting conditions
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Consider existing furniture and fixtures
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Think about how colors flow between rooms
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Don't forget about the 60-30-10 rule
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Common Color Mistakes to Avoid</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Avoid choosing colors in isolation, ignoring natural light, or being too matchy-matchy. Remember that colors should work together to create a cohesive, harmonious space that reflects your personal style and enhances your daily life.
              </p>

              <p className="text-gray-700 mb-8 leading-relaxed">
                The perfect color palette is one that makes you feel comfortable and happy in your space. Trust your instincts, but also consider the psychological effects and practical aspects of your color choices. With these guidelines, you'll be well on your way to creating a beautiful, harmonious home.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium">Tags:</span>
              {['Color Theory', 'Home Decor', 'Interior Design', 'Color Psychology', 'Design Tips'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop"
                alt="Modern Design Trends"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-accent text-sm font-medium">Trends</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  10 Modern Interior Design Trends for 2024
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover the latest trends transforming interior spaces.
                </p>
                <Link href="/blog/modern-interior-design-trends-2024" className="text-accent font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop"
                alt="Small Space Design"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-accent text-sm font-medium">Space Planning</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  Small Space Design: Maximizing Functionality
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Expert tips for making the most of small spaces.
                </p>
                <Link href="/blog/small-space-design-maximizing-functionality" className="text-accent font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </article>

            <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop"
                alt="Sustainable Design"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-accent text-sm font-medium">Sustainability</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  Sustainable Interior Design Practices
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Create beautiful spaces while protecting the environment.
                </p>
                <Link href="/blog/sustainable-interior-design-practices" className="text-accent font-medium hover:underline">
                  Read More →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
