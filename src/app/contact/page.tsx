import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline">Get In Touch</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m here to help you on your journey. Reach out with any questions or to book your first session.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-card p-8 rounded-lg border">
                <h2 className="text-2xl font-bold mb-6 font-headline">Send a Message</h2>
                <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-headline">Contact Information</h2>
                <p className="text-muted-foreground mt-2">Find me here or drop a line.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:hello@coachcraft.com" className="text-muted-foreground hover:text-primary">
                    hello@coachcraft.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="text-muted-foreground">123 Productivity Lane, Focus City, 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
