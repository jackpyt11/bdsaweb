import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Badges from '@/components/sections/Badges';
import Stats from '@/components/sections/Stats';
import NoticeBoard from '@/components/sections/NoticeBoard';
import Services from '@/components/sections/Services';
import MissionVision from '@/components/sections/MissionVision';
import Leadership from '@/components/sections/Leadership';
import VerificationPortal from '@/components/sections/VerificationPortal';
import FAQ from '@/components/sections/FAQ';
import News from '@/components/sections/News';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ChatSupport from '@/components/sections/ChatSupport';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <div className="w-full max-w-[1280px] mx-auto px-5">
        <Hero />
        <Badges />
        <Stats />
        <VerificationPortal />
        <Services />
        <NoticeBoard />
        <MissionVision />
        <Leadership />
        <News />
        <FAQ />
        <Contact />
      </div>
      <Footer />
      <ChatSupport />
    </main>
  );
}
