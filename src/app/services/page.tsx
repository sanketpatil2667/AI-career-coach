import { Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServiceDescriptionGenerator from '@/components/ai/ServiceDescriptionGenerator';

const services = [
  {
    name: 'Productivity Power-Up',
    price: '$499',
    period: 'per month',
    features: [
      'Four 1-on-1 coaching sessions',
      'Personalized productivity plan',
      'Weekly progress tracking',
      'Email support',
    ],
    cta: 'Get Started',
    isFeatured: false,
    aiDefaults: {
      serviceName: 'Productivity Power-Up',
      targetAudience: 'Professionals feeling overwhelmed and unproductive.',
      keyBenefits: 'Master time management, overcome procrastination, achieve work-life balance.'
    }
  },
  {
    name: 'Career Accelerator',
    price: '$899',
    period: 'per month',
    features: [
      'Eight 1-on-1 coaching sessions',
      'In-depth career strategy mapping',
      'Resume and LinkedIn profile review',
      'Interview preparation',
      'Priority email & chat support',
    ],
    cta: 'Accelerate Your Career',
    isFeatured: true,
    aiDefaults: {
      serviceName: 'Career Accelerator',
      targetAudience: 'Ambitious professionals seeking to advance their careers or make a change.',
      keyBenefits: 'Gain career clarity, build a strong personal brand, and land your dream job.'
    }
  },
  {
    name: 'Life Harmony',
    price: '$399',
    period: 'per month',
    features: [
      'Four 1-on-1 coaching sessions',
      'Values and priorities assessment',
      'Habit building for wellness',
      'Mindfulness techniques',
    ],
    cta: 'Find Your Balance',
    isFeatured: false,
    aiDefaults: {
      serviceName: 'Life Harmony',
      targetAudience: 'Individuals struggling to balance work, personal life, and self-care.',
      keyBenefits: 'Reduce stress, improve well-being, and create a more fulfilling and balanced life.'
    }
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-headline">Coaching Services</h1>
          <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
            Invest in yourself. Choose a plan that aligns with your goals and start your transformation today.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl border bg-card text-card-foreground shadow-sm ${
                  service.isFeatured ? 'border-primary shadow-lg scale-105' : 'border-border'
                }`}
              >
                <div className="p-6">
                  {service.isFeatured && (
                    <div className="text-center mb-4">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-center font-headline">{service.name}</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold text-foreground">{service.price}</span>
                    <span className="text-base"> {service.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full mt-6" variant={service.isFeatured ? 'default' : 'outline'}>
                    <Link href="/contact">{service.cta}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto px-4 space-y-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold font-headline">Generate Service Descriptions</h2>
                <p className="mt-2 text-muted-foreground">Use our AI tool to craft the perfect description for any service.</p>
            </div>
            {services.map((service, index) => (
                <ServiceDescriptionGenerator key={index} defaultValues={service.aiDefaults} />
            ))}
        </div>
      </section>
    </>
  );
}
