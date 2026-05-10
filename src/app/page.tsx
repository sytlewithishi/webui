import Hero from "@/components/home/Hero";
import EditsTeaser from "@/components/home/EditsTeaser";
import ServicesPreview from "@/components/home/ServicesPreview";
import AboutTeaser from "@/components/home/AboutTeaser";
import YouTubeFeed from "@/components/home/YouTubeFeed";
import TikTokFeature from "@/components/home/TikTokFeature";
import SocialCTA from "@/components/home/SocialCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EditsTeaser />
      <AboutTeaser />
      <ServicesPreview />
      <YouTubeFeed />
      <TikTokFeature />
      <SocialCTA />
    </>
  );
}
