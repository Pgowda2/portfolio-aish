import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Sparkles, 
  Tags, 
  GraduationCap, 
  CalendarCheck,
  ChevronRight,
  Phone,
  Mail,
  UserCheck
} from 'lucide-react';
import { ARTICLES_DATA, PortfolioArticle } from '../data/portfolioData.js';
import api from '../api/axios.js';

export const ArticlesSection: React.FC = () => {
  const [articles, setArticles] = useState<PortfolioArticle[]>(ARTICLES_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await api.get('/posts');
        if (isMounted && res.data?.posts && res.data.posts.length > 0) {
          // Merge API posts or fallback to local
          const mapped: PortfolioArticle[] = res.data.posts.map((p: any) => ({
            id: p._id || p.id,
            _id: p._id || p.id,
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt,
            category: p.category,
            tags: p.tags || [],
            coverImage: p.coverImage,
            readingTime: p.readingTime || 4,
            publishedAt: new Date(p.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            }),
            createdAt: p.createdAt,
            author: p.author || { name: 'Aishwarya Gowda S R', email: 'aishwaryagowda227@gmail.com' },
            content: p.content,
          }));
          setArticles(mapped);
        }
      } catch (err) {
        // Keep ARTICLES_DATA on network error
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchArticles();
    return () => {
      isMounted = false;
    };
  }, []);

  const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <section id="articles" className="py-24 bg-slate-50/60 dark:bg-[#0b0f19]/60 border-b border-gray-100/80 dark:border-gray-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 rounded-md text-xs font-bold tracking-widest uppercase mb-3 border border-brand-100 dark:border-brand-900/40">
              <BookOpen size={14} /> Articles &amp; Teaching Insights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Educational Articles by Aishwarya Gowda
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Pedagogical deep dives on computational thinking, easing the transition from Scratch to Python, and nurturing creative confidence for students in Grades 1 to 12.
            </p>
            <div className="w-16 h-1 bg-brand-600 dark:bg-brand-500 rounded-md mt-4" />
          </div>

          {/* Quick Trial Booking CTA Pill */}
          <div className="shrink-0">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md hover:shadow-glow transition-all cursor-pointer"
            >
              <CalendarCheck size={16} />
              <span>Book Free Trial Class</span>
            </a>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'bg-white dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 border border-gray-200/80 dark:border-gray-700 hover:border-brand-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id || article._id}
              className="group flex flex-col bg-white dark:bg-gray-900/80 rounded-3xl border border-gray-200/80 dark:border-gray-800 overflow-hidden hover:border-brand-500/50 dark:hover:border-brand-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Cover Image Container */}
              <div className="aspect-16/10 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
                <Link to={`/post/${article.slug}`}>
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-white/95 dark:bg-gray-900/95 text-brand-700 dark:text-brand-300 shadow-xs backdrop-blur-xs border border-gray-100/50 dark:border-gray-800/50">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta Bar */}
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {article.readingTime} min read
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {article.publishedAt}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-lg text-gray-900 dark:text-white tracking-tight leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                    <Link to={`/post/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {article.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 font-bold flex items-center justify-center text-[10px]">
                      AG
                    </span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {article.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/post/${article.slug}`}
                    className="font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 inline-flex items-center gap-1"
                  >
                    Read Article <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* High-Impact Trial Class Booking Banner Inside Articles Section */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 text-white shadow-xl relative overflow-hidden">
          {/* Subtle decorative background blur */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                <Sparkles size={14} className="text-amber-300" />
                <span>Live 1-on-1 Personalized Mentorship</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Want to See Your Child Code Their Own Games &amp; Apps?
              </h3>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-2xl">
                Book a complimentary 45-minute live trial class with <strong>Aishwarya Gowda</strong>. We evaluate your child’s baseline, ignite their problem-solving spark, and provide a tailored curriculum roadmap for Grades 1–12.
              </p>
              
              <div className="flex items-center gap-4 text-xs text-blue-100 pt-2 flex-wrap">
                <span className="flex items-center gap-1.5">
                  <UserCheck size={14} className="text-emerald-300" /> No Prior Experience Required
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-emerald-300" /> Grades 1 to 12 (Ages 6–18)
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-emerald-300" /> Instant Confirmation &amp; Calendar Invite
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-stretch sm:items-center lg:items-end">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-6 py-4 rounded-2xl bg-white text-brand-700 hover:bg-brand-50 font-extrabold text-sm transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck size={18} className="text-brand-600" />
                <span>Book Free Trial Class</span>
              </a>

              <a
                href="https://wa.me/918310589119?text=Hi%20Aishwarya%20ma%27am,%20I%20would%20like%20to%20inquire%20about%20a%20trial%20coding%20class%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs transition-all text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone size={14} />
                <span>Send WhatsApp Message</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
