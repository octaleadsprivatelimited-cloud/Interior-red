import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Clock, Tag } from 'lucide-react';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Modern Interior Design Trends for 2024',
      excerpt: 'Discover the latest interior design trends that will transform your space this year, from sustainable materials to bold color choices.',
      image: 'https://placehold.co/800x500?text=Modern+Design+Trends',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Trends',
      slug: 'modern-interior-design-trends-2024'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Color Palette for Your Home',
      excerpt: 'Learn the psychology of colors and how to create harmonious color schemes that reflect your personality and enhance your living space.',
      image: 'https://placehold.co/800x500?text=Color+Palette+Guide',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Color Theory',
      slug: 'perfect-color-palette-home'
    },
    {
      id: 3,
      title: 'Small Space Design: Maximizing Functionality',
      excerpt: 'Expert tips and tricks for making the most of small spaces, from clever storage solutions to optical illusions that create more room.',
      image: 'https://placehold.co/800x500?text=Small+Space+Design',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Space Planning',
      slug: 'small-space-design-maximizing-functionality'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, active: true },
    { name: 'Trends', count: 8 },
    { name: 'Color Theory', count: 6 },
    { name: 'Space Planning', count: 5 },
    { name: 'Furniture', count: 3 },
    { name: 'Lighting', count: 2 }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Design Blog
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Design
            <span className="block text-accent">Insights & Tips</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest interior design trends, tips, and inspiration 
            from our expert designers.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                category.active
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-accent hover:text-white shadow-md'
              }`}
            >
              <Tag className="w-4 h-4 mr-2 inline" />
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium group-hover:translate-x-1 transition-all duration-200"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Stay Updated with Design Trends
            </h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest design tips, trends, 
              and inspiration delivered directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-accent hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* View All Posts CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center justify-center group"
          >
            View All Blog Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
