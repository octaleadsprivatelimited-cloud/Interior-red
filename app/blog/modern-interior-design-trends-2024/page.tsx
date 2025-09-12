import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function ModernInteriorDesignTrends2024() {
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
                Trends
              </span>
              <span className="text-white/80 text-sm">January 15, 2024</span>
              <span className="text-white/80 text-sm">5 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              10 Modern Interior Design Trends for 2024
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Discover the latest interior design trends that will transform your space this year, from sustainable materials to bold color choices.
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
                <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                <p className="text-gray-600 text-sm">Interior Design Expert</p>
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
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=600&fit=crop"
                alt="Modern Interior Design Trends 2024"
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                As we step into 2024, the world of interior design continues to evolve with exciting new trends that blend sustainability, technology, and timeless aesthetics. This year's trends focus on creating spaces that are not only beautiful but also functional, eco-friendly, and deeply personal.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Sustainable and Eco-Friendly Materials</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sustainability is no longer just a buzzword—it's a fundamental design principle. Homeowners are increasingly choosing materials that have minimal environmental impact, from reclaimed wood and recycled metals to natural stone and bamboo. These materials not only look beautiful but also tell a story of environmental consciousness.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "The future of interior design lies in creating spaces that respect both our planet and our personal well-being. Sustainable materials are not just environmentally responsible—they often provide superior quality and unique character."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Bold Color Palettes</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                After years of neutral dominance, 2024 welcomes the return of bold, expressive colors. Think deep emerald greens, rich burgundies, and vibrant terracotta tones. These colors add personality and warmth to spaces while creating focal points that draw the eye.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Biophilic Design Elements</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The connection between nature and well-being continues to influence design choices. Living walls, natural light optimization, and organic shapes help create calming, restorative environments that promote mental health and productivity.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Smart Home Integration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Technology seamlessly integrates into design, with smart lighting, automated window treatments, and voice-controlled systems becoming standard features. The key is making technology invisible while maximizing functionality.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Mixed Materials and Textures</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Layering different materials creates visual interest and depth. Think marble paired with brass, concrete with wood, or velvet with metal. This trend celebrates contrast and creates sophisticated, multi-dimensional spaces.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Curved and Organic Shapes</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sharp angles are giving way to soft, curved lines that create a more welcoming and comfortable atmosphere. From rounded furniture to arched doorways, organic shapes add fluidity and movement to interior spaces.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Maximalist Approach</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The "less is more" philosophy is being challenged by a more is more approach. Bold patterns, rich textures, and eclectic collections create spaces that are deeply personal and visually stimulating.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Vintage and Antique Integration</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Mixing old with new creates spaces with character and history. Vintage furniture, antique accessories, and retro elements add warmth and authenticity to modern interiors.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Flexible and Multi-Functional Spaces</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                As remote work continues, homes need to serve multiple purposes. Convertible furniture, sliding partitions, and modular designs allow spaces to adapt to different needs throughout the day.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Wellness-Focused Design</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Health and wellness take center stage in design decisions. Air-purifying plants, circadian lighting, and meditation spaces create environments that support physical and mental well-being.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Sustainability is now a core design principle, not just an afterthought
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Bold colors and patterns are making a strong comeback
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Technology integration should be seamless and invisible
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Wellness and functionality are equally important as aesthetics
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed">
                These trends represent a shift toward more thoughtful, sustainable, and personalized interior design. Whether you're planning a complete home renovation or just looking to refresh a single room, incorporating these elements will help create spaces that are both beautiful and meaningful.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium">Tags:</span>
              {['Interior Design', 'Trends 2024', 'Sustainable Design', 'Home Decor', 'Color Theory'].map((tag) => (
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
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=250&fit=crop"
                alt="Color Palette Guide"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-accent text-sm font-medium">Color Theory</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  How to Choose the Perfect Color Palette
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn the psychology of colors and create harmonious schemes.
                </p>
                <Link href="/blog/perfect-color-palette-home" className="text-accent font-medium hover:underline">
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
