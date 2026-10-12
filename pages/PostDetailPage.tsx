import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Tag,
  BookOpen,
  Loader2,
  CalendarCheck,
  Phone,
  Mail,
  Sparkles,
  Award,
  GraduationCap,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import api from '../api/axios.js';
import { Post } from '../types.js';
import { ARTICLES_DATA, PERSONAL_INFO } from '../data/portfolioData.js';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';
import { PostCard } from '../components/PostCard.js';
import { MarkdownRenderer } from '../components/MarkdownRenderer.js';
import { useToast } from '../context/ToastContext.js';

export const PostDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.get<{ post: Post }>(`/posts/${slug}`);
        if (res.data?.post) {
          setPost(res.data.post);
          if (res.data.post.title) {
            document.title = `${res.data.post.title} - Aishwarya Gowda`;
          }

          // Fetch related posts
          if (res.data.post.category) {
            const relRes = await api.get<{ posts: Post[] }>('/posts', {
              params: { category: res.data.post.category, limit: 4 },
            });
            setRelatedPosts(
              (relRes.data.posts || []).filter((p) => p._id !== res.data.post._id).slice(0, 3)
            );
          }
          return;
        }
      } catch (err) {
        // Fallback to local ARTICLES_DATA
        const fallback = ARTICLES_DATA.find((a) => a.slug === slug);
        if (fallback) {
          const mappedPost: Post = {
            _id: fallback._id,
            title: fallback.title,
            slug: fallback.slug,
            content: fallback.content,
            excerpt: fallback.excerpt,
            coverImage: fallback.coverImage,
            tags: fallback.tags,
            category: fallback.category,
            status: 'published',
            author: fallback.author,
            readingTime: fallback.readingTime,
            createdAt: fallback.createdAt,
            updatedAt: fallback.createdAt,
          };
          setPost(mappedPost);
          document.title = `${fallback.title} - Aishwarya Gowda`;

          // Related fallback
          const related = ARTICLES_DATA.filter(
            (a) => a.slug !== slug && a.category === fallback.category
          ).map((a) => ({
            _id: a._id,
            title: a.title,
            slug: a.slug,
            content: a.content,
            excerpt: a.excerpt,
            coverImage: a.coverImage,
            tags: a.tags,
            category: a.category,
            status: 'published' as const,
            author: a.author,
            readingTime: a.readingTime,
            createdAt: a.createdAt,
            updatedAt: a.createdAt,
          }));
          setRelatedPosts(related.slice(0, 3));
          return;
        }
        setError((err as Error).message || 'Post not found');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    showToast('Post link copied to clipboard!');
    setTimeout(() => setCopied(false), 3000);
  };

  const handleShareTwitter = () => {
    if (!post) return;
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`"${post.title}" by Aishwarya Gowda:`);
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    if (!post) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-32 space-y-3">
          <Loader2 className="w-8 h-8 text-brand-600 animate-spin" />
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Loading Article...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117]">
        <Navbar />
        <div className="flex-1 max-w-md mx-auto px-4 py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center mx-auto mb-4">
            <BookOpen size={28} />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Article Not Found</h2>
          <p className="text-xs text-gray-500 mt-2 mb-6">
            The article you are looking for may have been moved, unpublished, or does not exist.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-bold hover:opacity-90"
            >
              <ArrowLeft size={14} /> Return to Home
            </Link>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white text-xs font-bold hover:bg-brand-700"
            >
              <CalendarCheck size={14} /> Book Trial Class
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0d1117] transition-colors">
      <Navbar />

      <main className="flex-1 w-full pb-20">
        
        {/* Top Breadcrumb & Quick Trial Class Booking Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex items-center justify-between gap-4">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Portfolio
          </button>

          {/* Persistent Trial Class Booking Action */}
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-sm hover:shadow-glow transition-all cursor-pointer"
          >
            <CalendarCheck size={14} />
            <span>Book Free Trial Class</span>
          </a>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4 text-left">
          <div className="flex items-center gap-3 text-xs flex-wrap">
            <span className="px-3 py-1 rounded-md font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950 border border-brand-200 dark:border-brand-800">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Clock size={13} /> {post.readingTime} min read
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Calendar size={13} /> {formattedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.15] font-sans">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-sans leading-relaxed pt-2">
              {post.excerpt}
            </p>
          )}

          {/* Author info row with Aishwarya's bio and Codingal rating */}
          <div className="pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img
                src={PERSONAL_INFO.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-xl object-cover border-2 border-brand-500/40 shadow-xs"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{post.author.name}</p>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                    <Award size={10} /> 4.9 Rating (1,934+ Classes)
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Senior Coding Instructor · Grades 1–12</p>
              </div>
            </div>

            {/* Share & Booking Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Copy Link"
              >
                {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
              <button
                onClick={handleShareTwitter}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Share on Twitter / X"
              >
                <Twitter size={16} />
              </button>
              <button
                onClick={handleShareLinkedIn}
                className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 my-8">
            <div className="rounded-3xl overflow-hidden aspect-16/9 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Main Formatted Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10">
          {post.content.includes('<p>') || post.content.includes('<div>') ? (
            <div
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
              className="font-serif text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-[1.8] space-y-6 [&>h2]:text-2xl [&>h2]:sm:text-3xl [&>h2]:font-extrabold [&>h2]:font-sans [&>h2]:text-gray-900 dark:[&>h2]:text-white [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:sm:text-2xl [&>h3]:font-bold [&>h3]:font-sans [&>h3]:text-gray-900 dark:[&>h3]:text-white [&>h3]:mt-8 [&>h3]:mb-3 [&>blockquote]:border-l-4 [&>blockquote]:border-brand-500 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-700 dark:[&>blockquote]:text-gray-300 [&>blockquote]:my-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>pre]:bg-gray-100 dark:[&>pre]:bg-gray-800 [&>pre]:p-5 [&>pre]:rounded-2xl [&>pre]:font-mono [&>pre]:text-sm [&>pre]:overflow-x-auto [&>a]:text-brand-600 dark:[&>a]:text-brand-400 [&>a]:underline [&>img]:rounded-2xl [&>img]:my-6"
            />
          ) : (
            <div className="space-y-6">
              <MarkdownRenderer content={post.content} />
            </div>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                <Tag size={13} /> Tags:
              </span>
              {post.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium"
                >
                  #{t}
                </span>
              ))}
            </div>
          )}

          {/* EXPLICIT TRIAL CLASS BOOKING OPTION INSIDE ARTICLE */}
          <div className="my-12 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-50 via-white to-blue-50/70 dark:from-brand-950/40 dark:via-gray-900 dark:to-blue-950/30 border-2 border-brand-200/90 dark:border-brand-800/80 shadow-lg relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 dark:bg-brand-900/60 text-brand-700 dark:text-brand-300 text-xs font-bold">
                  <Sparkles size={13} />
                  <span>Interactive 1-on-1 Trial Class Available</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                  Ready to Experience This in a Live Class with Aishwarya?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Book a complimentary 45-minute virtual trial class for your child (Grades 1–12). We provide a customized coding assessment in Scratch, Python, Web Dev, or MIT App Inventor and a structured curriculum plan.
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 dark:text-gray-400 pt-1 flex-wrap">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ 100% Free Trial</span>
                  <span>•</span>
                  <span>✓ 1-on-1 Personalized Attention</span>
                  <span>•</span>
                  <span>✓ Instant Google Calendar Confirmation</span>
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <a
                  href="/#contact"
                  className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-md hover:shadow-glow transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <CalendarCheck size={16} />
                  <span>Book Free Trial Class</span>
                </a>

                <a
                  href="https://wa.me/918310589119?text=Hi%20Aishwarya%20ma%27am,%20I%20read%20your%20article%20and%20would%20like%20to%20book%20a%20trial%20coding%20class%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold text-xs hover:bg-emerald-100 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle size={14} className="text-[#25D366]" />
                  <span>Send WhatsApp Message</span>
                </a>
              </div>
            </div>
          </div>

          {/* Share Box at bottom */}
          <div className="mt-8 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-gray-900 dark:text-white">Enjoyed this article by Aishwarya?</h4>
              <p className="text-xs text-gray-500 mt-0.5">Share with fellow parents, teachers, and STEM enthusiasts.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-semibold flex items-center gap-1.5 hover:bg-white dark:hover:bg-gray-800 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copied ? 'Copied' : 'Copy Link'}</span>
              </button>
              <button
                onClick={handleShareTwitter}
                className="px-3 py-1.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold flex items-center gap-1.5 hover:opacity-90 cursor-pointer"
              >
                <Twitter size={14} />
                <span>Tweet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white font-sans">
                More Articles by Aishwarya Gowda
              </h3>
              <a
                href="/#articles"
                className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
              >
                View All Articles →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <PostCard key={rel._id} post={rel} />
              ))}
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
};

