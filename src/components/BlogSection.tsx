import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar } from 'lucide-react';
import SectionBlock from './SectionBlock';
import { playHover, playClick } from '@/hooks/useSoundEffects';
import blogsData from '@/data/blog.json';

interface BlogPost {
  id: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTime: string;
  content: string;
}

const BlogSection = () => {
  const navigate = useNavigate();
  const posts: BlogPost[] = blogsData.blogs;

  return (
    <SectionBlock id="blog" title="Latest Writing">
      <div className="flex flex-col gap-8">
        <p className="body-text max-w-2xl">
          I regularly share my findings, tutorials, and thoughts on cybersecurity,
          DevOps, and system administration.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article
                key={post.id}
                className="group relative border-4 border-black bg-white p-6 flex flex-col transition-all duration-300 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 rounded-none"
                onMouseEnter={playHover}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-3 h-3 text-black/50" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50">
                    {new Date(post.publishedAt).toLocaleDateString(undefined, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-black/50 ml-auto">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-black mb-3 line-clamp-2 leading-tight group-hover:underline">
                  {post.title}
                </h3>

                <p className="text-sm font-light text-black/70 mb-6 line-clamp-3 leading-relaxed">
                  {post.brief}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => {
                      playClick();
                      navigate(`/blog/${post.id}`);
                    }}
                    className="inline-flex items-center justify-center w-full py-3 border-2 border-black bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-y-0 active:translate-y-[2px] rounded-none"
                  >
                    Read Full Blog
                  </button>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center border-2 border-black border-dashed opacity-50">
              <p className="font-mono text-sm uppercase tracking-widest">
                No blog posts found. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionBlock>
  );
};

export default BlogSection;
