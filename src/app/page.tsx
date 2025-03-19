import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Benefits from '@/components/sections/Benefits';
import HowItWorks from '@/components/sections/HowItWorks';
import Community from '@/components/sections/Community';
import Resources from '@/components/sections/Resources';
import WaitlistForm from '@/components/sections/WaitlistForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <HowItWorks />
        <Community />
        <Resources />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
