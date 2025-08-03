import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | CoachCraft Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <Badge variant="outline" className="mb-4 text-lg bg-accent/20 text-accent-foreground border-accent">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">{post.title}</h1>
          <p className="text-muted-foreground">
            Published on <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
          </p>
        </header>

        <Image
          src={post.imageUrl}
          alt={post.title}
          width={1200}
          height={600}
          className="w-full h-auto rounded-lg shadow-lg mb-8"
          data-ai-hint="abstract background"
          priority
        />

        <div
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-headline prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
