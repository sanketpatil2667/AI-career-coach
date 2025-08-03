import Image from 'next/image';
import { Award, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AboutBio from '@/components/ai/AboutBio';

export default function AboutPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline">About CoachCraft</h1>
          <p className="mt-2 text-lg text-muted-foreground">My Mission, My Values, and My Promise to You</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2">
              <Image
                src="https://placehold.co/600x800.png"
                alt="Portrait of the coach"
                width={600}
                height={800}
                className="rounded-lg shadow-2xl object-cover w-full h-full"
                data-ai-hint="professional portrait woman"
              />
            </div>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold font-headline">Your Partner in Achieving Excellence</h2>
              <p className="mt-4 text-muted-foreground">
                Hello! I&apos;m the founder of CoachCraft, a passionate and dedicated productivity coach with a singular focus: helping you unlock your true potential. For over a decade, I&apos;ve guided professionals, creatives, and entrepreneurs through the complexities of modern work-life demands. I believe that productivity isn&apos;t about doing more; it&apos;s about doing what matters.
              </p>
              <p className="mt-4 text-muted-foreground">
                My journey began in the fast-paced tech industry, where I saw brilliant people struggle with burnout and a lack of focus. This inspired me to develop a coaching methodology that is both strategic and empathetic. I combine proven productivity frameworks with personalized strategies to help you build sustainable habits, gain clarity on your goals, and create a life that is both successful and fulfilling.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AboutBio />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline">My Coaching Philosophy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card>
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-3 w-fit">
                   <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="mt-4 font-headline">Clarity First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We start by defining what success looks like for you. Clear goals are the foundation of effective action.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-3 w-fit">
                   <Award className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="mt-4 font-headline">Action-Oriented</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">I provide practical, actionable steps to help you build momentum and see tangible results quickly.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="mx-auto bg-accent/10 rounded-full p-3 w-fit">
                   <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="mt-4 font-headline">Empathetic Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">I offer a supportive, non-judgmental space for you to explore challenges and celebrate your wins.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
