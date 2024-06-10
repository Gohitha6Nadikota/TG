import Capabilities from "@/components/Capabilities";
import Explore from "@/components/Explore";
import Explore1 from "@/components/Explore1";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import GPTcard from "@/components/GPTcard";
import Header from "@/components/Header";
import Security from "@/components/Security";
import Sliders from "@/components/Sliders";
import TopContainer from "@/components/TopContainer";
import TryNow from "@/components/TryNow";
import VideoPage from "@/components/VideoPage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-[100vw]">
      <TopContainer />
      <Header />
      <VideoPage />
      <GPTcard />
      <Sliders />
      <Capabilities />
      <Security />
      <FAQ />
      <Footer />
      {/*
     
      
       */}
    </main>
  );
}
