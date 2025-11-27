import Header from '@/components/Header';
import HeroSectionAward from '@/components/HeroSectionAward';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionSection from '@/components/SolutionSection';
import ServicesSection from '@/components/ServicesSection';
import ReasonsSection from '@/components/ReasonsSection';
import StorySection from '@/components/StorySection';
import PricingSection from '@/components/PricingSection';
import FlowSection from '@/components/FlowSection';
import FAQSection from '@/components/FAQSection';
import ProfileSection from '@/components/ProfileSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSectionAward />
      <ProblemsSection />
      <SolutionSection />
      <ServicesSection />
      <ReasonsSection />
      <StorySection />
      <PricingSection />
      <FlowSection />
      <FAQSection />
      <ProfileSection />
      <CTASection />
      <Footer />
    </main>
  );
}
