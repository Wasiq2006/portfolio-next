import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useEffect } from 'react';
import blogsData from '@/data/blog.json';
import { playClick } from '@/hooks/useSoundEffects';
import CustomCursor from '@/components/CustomCursor';

interface BlogPost {
  id: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTime: string;
  content: string;
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const blog = (blogsData.blogs as BlogPost[]).find((b) => b.id === id);

  // Scroll to top when blog detail page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle navigation back to blog section
  const handleBackToBlog = () => {
    playClick();
    navigate('/');
    // Scroll to blog section after navigation
    setTimeout(() => {
      const blogElement = document.getElementById('blog');
      if (blogElement) {
        blogElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <CustomCursor />
        <div className="text-center">
          <h1 className="text-4xl font-black mb-4">404 - Blog Not Found</h1>
          <p className="text-lg mb-6">Sorry, we couldn't find the blog you're looking for.</p>
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white rounded-none"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Parse markdown content
  const renderContent = (content: string) => {
    const lines = content.split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';
    let listItems: string[] = [];

    lines.forEach((line, idx) => {
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre
              key={`code-${idx}`}
              className="bg-black text-green-400 p-6 rounded-none border-4 border-black my-8 overflow-x-auto font-mono text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <code>{codeContent}</code>
            </pre>
          );
          inCodeBlock = false;
          codeContent = '';
          codeLanguage = '';
        } else {
          inCodeBlock = true;
          codeLanguage = line.replace('```', '').trim();
        }
      } else if (inCodeBlock) {
        codeContent += line + '\n';
      } else if (line.startsWith('# ')) {
        elements.push(
          <h1 key={idx} className="text-4xl md:text-5xl font-black mt-16 mb-6 border-b-4 border-black pb-4">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={idx} className="text-3xl font-black mt-12 mb-4 border-b-2 border-black pb-3">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={idx} className="text-2xl font-bold mt-8 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('* ')) {
        if (!listItems.includes(line)) {
          listItems.push(line);
        }
        if (idx === lines.length - 1 || !lines[idx + 1].startsWith('* ')) {
          elements.push(
            <ul
              key={`list-${idx}`}
              className="list-disc list-inside mb-6 space-y-3 bg-gray-50 border-l-4 border-black p-6 rounded-none"
            >
              {listItems.map((item, i) => (
                <li key={i} className="text-black/80 font-medium">
                  {item.replace('* ', '')}
                </li>
              ))}
            </ul>
          );
          listItems = [];
        }
      } else if (line.startsWith('---')) {
        elements.push(
          <div key={idx} className="my-10 border-t-4 border-black" />
        );
      } else if (line.trim()) {
        elements.push(
          <p key={idx} className="text-black/80 mb-6 leading-relaxed text-lg">
            {line}
          </p>
        );
      } else if (elements.length > 0 && idx < lines.length - 1) {
        // Add spacing between sections
        elements.push(
          <div key={idx} className="mb-2" />
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      
      {/* Hero Section */}
      <div className="border-b-4 border-black bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-24">
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:gap-4 transition-all mb-8 hover:translate-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm border-t-2 border-black pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">
                {new Date(blog.publishedAt).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <span className="font-mono font-bold uppercase tracking-widest bg-black text-white px-3 py-1">
              {blog.readTime}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="prose prose-lg max-w-none">
          {renderContent(blog.content)}
        </div>

        {/* Back Button */}
        <div className="mt-20 pt-8 border-t-4 border-black flex justify-center md:justify-start">
          <button
            onClick={handleBackToBlog}
            className="inline-flex items-center gap-2 px-8 py-4 border-3 border-black bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white rounded-none"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to All Blogs
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
