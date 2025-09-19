import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Small Space Design: Maximizing Functionality - Dream Space Interiors',
  description: 'Learn expert tips for designing small spaces to maximize functionality and style. Smart storage solutions, space-saving furniture, and design tricks for compact homes.',
  keywords: ['small space design', 'compact home design', 'space saving furniture', 'small apartment design', 'storage solutions', 'functional design'],
};

export default function SmallSpaceDesignMaximizingFunctionality() {
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
                Space Planning
              </span>
              <span className="text-white/80 text-sm">January 5, 2024</span>
              <span className="text-white/80 text-sm">6 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Small Space Design: Maximizing Functionality
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Expert tips and tricks for making the most of small spaces, from clever storage solutions to optical illusions that create more room.
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
                <h3 className="font-semibold text-gray-900">Emma Rodriguez</h3>
                <p className="text-gray-600 text-sm">Space Planning Expert</p>
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
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop"
                alt="Small Space Design Maximizing Functionality"
                width={1200}
                height={600}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Small spaces don't have to feel cramped or cluttered. With the right design strategies, you can create a functional, beautiful home that maximizes every square foot. The key is to think vertically, choose multi-functional furniture, and use clever storage solutions.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Think Vertical: Maximize Wall Space</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                When floor space is limited, look up! Install floating shelves, wall-mounted storage units, and tall bookcases that reach the ceiling. This not only provides storage but also draws the eye upward, making the room feel taller and more spacious.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent p-6 mb-8 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "The biggest mistake people make in small spaces is only thinking horizontally. Vertical space is often underutilized but can double your storage capacity."
                </p>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Multi-Functional Furniture is Your Best Friend</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Invest in furniture that serves multiple purposes. A sofa bed for guests, a coffee table with storage, or a dining table that converts to a desk. These pieces eliminate the need for separate items, saving precious space.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Storage Ottomans</h3>
                  <p className="text-gray-700">Perfect for storing blankets, books, or toys while providing extra seating.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Murphy Beds</h3>
                  <p className="text-gray-700">Transform your bedroom into a home office or living room during the day.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Nesting Tables</h3>
                  <p className="text-gray-700">Stackable tables that expand when needed and tuck away when not in use.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Convertible Desks</h3>
                  <p className="text-gray-700">Fold-down desks that disappear into the wall when not needed.</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Create the Illusion of Space</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use Light Colors</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Light colors reflect light and make spaces feel larger. Paint walls in whites, creams, or light pastels. Use the same color family throughout to create visual continuity.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Maximize Natural Light</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Keep windows unobstructed and use sheer curtains or blinds that allow light to filter through. Mirrors strategically placed opposite windows can double the light in a room.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Choose the Right Scale</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Avoid oversized furniture that overwhelms the space. Choose pieces that are proportional to the room size. Leggy furniture that shows the floor underneath creates a sense of openness.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Smart Storage Solutions</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Under-Bed Storage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use the space under your bed for storage. Invest in under-bed storage boxes or choose a bed frame with built-in drawers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Hidden Storage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Look for opportunities to create hidden storage. Stair drawers, window seat storage, or built-in benches with storage compartments can significantly increase your storage capacity.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vertical Storage</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Install hooks, pegboards, and hanging organizers to keep items off surfaces and floors. This keeps your space tidy and makes everything easily accessible.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Room-by-Room Strategies</h2>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Small Living Room</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Choose a sofa with a low back to create the illusion of height. Use a large mirror to reflect light and make the space feel bigger. Keep the floor clear with floating furniture.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Small Bedroom</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use a platform bed with built-in storage or choose a bed that can be raised to create storage space underneath. Install a wall-mounted nightstand to save floor space.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Small Kitchen</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use magnetic strips for knives and spices, install a pot rack, and use the inside of cabinet doors for additional storage. Consider a rolling cart for extra counter space.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Small Bathroom</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Use over-the-toilet storage, install a medicine cabinet with multiple shelves, and use shower caddies to keep toiletries organized. A pedestal sink can make the room feel less cluttered.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Declutter and Organize</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                The most important step in small space design is to declutter. Get rid of items you don't use or love. Use the "one in, one out" rule to prevent accumulation. Organize remaining items in clear containers so you can easily see what you have.
              </p>

              <div className="bg-gray-50 p-8 rounded-2xl my-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Small Space Design Checklist</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Declutter and only keep what you truly need
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Invest in multi-functional furniture pieces
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Use vertical space with shelves and wall storage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Choose light colors to make spaces feel larger
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Maximize natural light and use mirrors strategically
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Keep floors clear and use floating furniture
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Final Thoughts</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Small spaces can be just as functional and beautiful as larger ones. The key is to be intentional with every design decision, prioritize functionality, and embrace the coziness that small spaces can provide. With these strategies, you can create a home that feels spacious, organized, and perfectly suited to your needs.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-gray-200">
              <span className="text-gray-600 font-medium">Tags:</span>
              {['Small Space Design', 'Space Planning', 'Storage Solutions', 'Interior Design', 'Home Organization'].map((tag) => (
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
