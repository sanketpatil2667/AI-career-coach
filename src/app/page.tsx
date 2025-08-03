import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, Briefcase, BarChart } from 'lucide-react';
import HomepageWelcome from '@/components/ai/HomepageWelcome';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-primary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl font-headline">
            Unlock Your Full Potential
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            I help you overcome obstacles, improve your productivity, and achieve your personal and professional goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/services">Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* AI Welcome Text Generator */}
      <section id="welcome" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
           <HomepageWelcome />
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">How I Can Help You</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
              Tailored coaching programs designed to bring clarity, focus, and balance to your life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                  <BarChart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Productivity Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Master your time, conquer procrastination, and achieve peak performance in your daily tasks.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Career Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Navigate career transitions, discover your professional path, and build a fulfilling work life.</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                   <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="mt-4 font-headline">Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Create harmony between your work, personal life, and well-being for lasting happiness.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Snippet */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <MessageSquare className="mx-auto h-12 w-12 text-accent" />
            <blockquote className="mt-4 text-xl italic text-foreground">
              &ldquo;Working with CoachCraft was a game-changer. I've never been more focused, productive, and confident in my entire career. I can't recommend this enough!&rdquo;
            </blockquote>
            <cite className="mt-4 block font-semibold not-italic text-muted-foreground">- Alex Johnson, a Happy Client</cite>
            <Button asChild variant="link" className="mt-4 text-accent">
              <Link href="/testimonials">Read more testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <Image
                src="https://placehold.co/600x600.png"
                alt="Portrait of the coach"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
                data-ai-hint="professional portrait"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-headline">Your Partner in Productivity</h2>
              <p className="mt-4 text-muted-foreground">
                With over a decade of experience in personal development and productivity strategies, I am dedicated to providing you with the tools and support you need to thrive. My approach is not one-size-fits-all; it's a collaborative partnership tailored to your unique strengths and aspirations.
              </p>
              <Button asChild className="mt-6">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
