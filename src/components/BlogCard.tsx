import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blog-data';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full">
      <CardHeader className="p-0">
        <Link href={`/blog/${post.slug}`}>
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            data-ai-hint="abstract background"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="outline" className="mb-2 bg-accent/20 text-accent-foreground border-accent">{post.category}</Badge>
        <CardTitle className="font-headline text-xl mb-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <p className="text-muted-foreground text-sm">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
         <Button asChild variant="link" className="p-0 h-auto text-primary">
            <Link href={`/blog/${post.slug}`} >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}
