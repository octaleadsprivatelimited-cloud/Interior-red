import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function SustainableInteriorDesignPractices() {
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
                Sustainability
              </span>
              <span className="text-white/80 text-sm">December 28, 2023</span>
              <span className="text-white/80 text-sm">8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Sustainable Interior Design Practices
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Create beautiful spaces while protecting the environment through eco-friendly design choices and sustainable materials.
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
                <h3 className="font-semibold text-gray-900">David Green</h3>
                <p className="text-gray-600 text-sm">Sustainable Design Specialist</p>
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
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop"
                alt="Sustainable Interior Design Practices"
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Sustainable interior design is no longer a trend—it's a necessity. As we become more aware of our environmental impact, creating beautiful, functional spaces that respect the planet has become a priority for designers and homeowners alike.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What is Sustainable Interior Design?</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sustainable interior design focuses on creating spaces that minimize environmental impact while maximizing functionality and aesthetics. This includes using eco-friendly materials, energy-efficient systems, and design strategies that promote long-term sustainability.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "Sustainable design isn't about sacrificing style for environmental responsibility. It's about making informed choices that benefit both the planet and your quality of life."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Eco-Friendly Materials</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Reclaimed and Recycled Materials</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Using reclaimed wood, recycled metal, and repurposed materials not only reduces waste but also adds unique character to your space. These materials often have a story to tell and create one-of-a-kind design elements.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Natural and Renewable Materials</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choose materials like bamboo, cork, hemp, and organic cotton. These materials are renewable, biodegradable, and often have lower environmental impact than synthetic alternatives.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Low-VOC and Non-Toxic Materials</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Volatile Organic Compounds (VOCs) in paints, adhesives, and furniture can harm indoor air quality. Choose low-VOC or zero-VOC products to create healthier living environments.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Energy Efficiency</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">LED Lighting</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                LED lights use significantly less energy than traditional incandescent bulbs and last much longer. They also produce less heat, reducing cooling costs in warmer climates.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Smart Home Technology</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Smart thermostats, automated lighting systems, and energy monitoring devices help optimize energy use and reduce waste. These systems can significantly lower your carbon footprint and utility bills.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Natural Light Optimization</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Maximize natural light through strategic window placement, skylights, and light-colored surfaces. This reduces the need for artificial lighting during the day and creates a more pleasant living environment.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Water Conservation</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Install low-flow faucets, showerheads, and toilets to reduce water consumption. Consider greywater systems that recycle water from sinks and showers for irrigation purposes.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Indoor Air Quality</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Air-Purifying Plants</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Incorporate plants that naturally filter air pollutants. Spider plants, peace lilies, and snake plants are excellent choices that also add beauty to your space.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Proper Ventilation</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ensure adequate ventilation to prevent the buildup of indoor pollutants. Consider installing energy recovery ventilators that provide fresh air while maintaining temperature control.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Sustainable Furniture Choices</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vintage and Antique Furniture</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Buying vintage or antique furniture extends the life of existing pieces and reduces the demand for new manufacturing. These pieces often have superior craftsmanship and unique character.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">FSC-Certified Wood</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Look for furniture made from Forest Stewardship Council (FSC) certified wood, which ensures the wood comes from responsibly managed forests.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Modular and Adaptable Furniture</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choose furniture that can adapt to different needs and spaces. Modular systems reduce the need to buy new furniture as your needs change.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Waste Reduction Strategies</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Repurpose and Upcycle</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Before discarding items, consider how they might be repurposed or upcycled. An old ladder can become a bookshelf, or vintage suitcases can serve as storage.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Donate and Recycle</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When replacing items, donate usable pieces to charities or sell them. For items that can't be reused, ensure they're properly recycled.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Long-Term Thinking</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sustainable design is about creating spaces that will stand the test of time. Choose timeless designs and high-quality materials that won't need frequent replacement. This approach is both environmentally and economically sustainable.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sustainable Design Checklist</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Choose eco-friendly, renewable materials
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use low-VOC paints and finishes
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Install energy-efficient lighting and appliances
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maximize natural light and ventilation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Incorporate air-purifying plants
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Choose durable, timeless designs
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Repurpose and upcycle existing items
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">The Future of Sustainable Design</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                As technology advances and awareness grows, sustainable interior design will continue to evolve. New materials, energy-efficient systems, and innovative design strategies will make it easier than ever to create beautiful, environmentally responsible spaces. The key is to start making conscious choices today, no matter how small they may seem.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium">Tags:</span>
              {['Sustainable Design', 'Eco-Friendly', 'Green Living', 'Environmental Design', 'Renewable Materials'].map((tag) => (
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
          </div>
        </div>
      </section>
    </div>
  );
}
