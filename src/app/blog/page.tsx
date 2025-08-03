import { blogPosts } from '@/lib/blog-data';
import BlogCard from '@/components/BlogCard';
import BlogPostIdeator from '@/components/ai/BlogPostIdeator';

export default function BlogPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline">CoachCraft Blog</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Insights, tips, and inspiration on productivity and personal growth.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <BlogPostIdeator />
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 font-headline">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
            ))}
            </div>
        </div>
      </section>
    </>
  );
}
