export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'mastering-the-pomodoro-technique',
    title: 'Mastering the Pomodoro Technique: A Guide to Ultimate Focus',
    date: '2024-07-15',
    excerpt: 'Discover how a simple tomato timer can revolutionize your productivity and help you conquer your to-do list every day.',
    content: `
      <p>The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. These intervals are known as pomodoros, the Italian word for tomatoes, after the tomato-shaped kitchen timer that Cirillo used as a university student.</p>
      <h2 class="text-2xl font-bold my-4">How It Works</h2>
      <p>The method is based on the idea that frequent breaks can improve mental agility. The steps are simple:</p>
      <ol class="list-decimal list-inside my-4 space-y-2">
        <li>Decide on the task to be done.</li>
        <li>Set the pomodoro timer (traditionally to 25 minutes).</li>
        <li>Work on the task.</li>
        <li>End work when the timer rings and put a checkmark on a piece of paper.</li>
        <li>If you have fewer than four checkmarks, take a short break (3–5 minutes).</li>
        <li>After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1.</li>
      </ol>
      <h2 class="text-2xl font-bold my-4">Why It's Effective</h2>
      <p>The Pomodoro Technique helps you resist all of those self-interruptions and re-train your brains to focus. Each pomodoro is a dedicated, indivisible unit of work that allows you to focus on one task at a time, which reduces the "cognitive load" on your brain.</p>
    `,
    category: 'Productivity',
    imageUrl: 'https://images.unsplash.com/photo-1508921340878-ba53e1f416ec?q=80&w=800&h=400&auto=format&fit=crop',
  },
  {
    slug: 'the-two-minute-rule-to-stop-procrastinating',
    title: 'The Two-Minute Rule: How to Stop Procrastinating and Start Doing',
    date: '2024-06-28',
    excerpt: 'Learn the simple yet powerful "Two-Minute Rule" from James Clear\'s Atomic Habits to overcome procrastination and build better habits.',
    content: `
      <p>Procrastination often stems from the friction associated with starting a new task. The Two-Minute Rule is designed to combat this by making it incredibly easy to get started.</p>
      <h2 class="text-2xl font-bold my-4">The Rule Explained</h2>
      <p>The rule has two parts:</p>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Part 1: If it takes less than two minutes, then do it now.</strong> This applies to all the small tasks that clutter our minds and to-do lists.</li>
        <li><strong>Part 2: When you start a new habit, it should take less than two minutes to do.</strong> This is about scaling down your goals to make them non-intimidating.</li>
      </ul>
      <h2 class="text-2xl font-bold my-4">Practical Application</h2>
      <p>"Read before bed each night" becomes "Read one page." "Do 30 minutes of yoga" becomes "Take out my yoga mat." The idea is to make your habits as easy as possible to start. The motivation and momentum will follow.</p>
    `,
    category: 'Habits',
    imageUrl: 'https://images.unsplash.com/photo-1554224324-44b49429e313?q=80&w=800&h=400&auto=format&fit=crop',
  },
  {
    slug: 'digital-declutter-for-mental-clarity',
    title: 'A Guide to Digital Decluttering for Mental Clarity',
    date: '2024-05-19',
    excerpt: 'In a world of constant notifications and digital noise, a digital declutter can be the key to reclaiming your focus and peace of mind.',
    content: `
      <p>Our digital lives can be as cluttered as our physical spaces, leading to anxiety and a scattered mind. A digital declutter is the process of tidying up your digital world to create a more intentional and productive environment.</p>
      <h2 class="text-2xl font-bold my-4">Steps for a Digital Declutter</h2>
      <ul class="list-disc list-inside my-4 space-y-2">
        <li><strong>Clean your desktop:</strong> Organize files into folders and delete what you no longer need.</li>
        <li><strong>Tame your inbox:</strong> Unsubscribe from newsletters you don't read and archive old emails. Aim for "Inbox Zero".</li>
        <li><strong>Organize your apps:</strong> Delete unused apps from your phone and computer. Group remaining apps into folders.</li>
        <li><strong>Manage notifications:</strong> Turn off all non-essential notifications to minimize distractions.</li>
      </ul>
      <p>By taking control of your digital environment, you create space for deeper focus and a calmer mind.</p>
    `,
    category: 'Digital Wellness',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&h=400&auto=format&fit=crop',
  },
];
