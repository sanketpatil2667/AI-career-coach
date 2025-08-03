import TestimonialGenerator from '@/components/ai/TestimonialGenerator';

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-accent/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline">Client Testimonials</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            See what my clients are saying about their transformation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <TestimonialGenerator />
        </div>
      </section>
    </>
  );
}
