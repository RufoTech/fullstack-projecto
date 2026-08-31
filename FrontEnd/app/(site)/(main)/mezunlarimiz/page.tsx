import Hero from "@/components/mezunlar/Hero";
import Statistics from "@/components/mezunlar/Statistics";
import PartnersCarousel from "@/components/mezunlar/PartnersCarousel";
import BlogTabs from "@/components/mezunlar/BlogTabs";
import VideoGrid from "@/components/mezunlar/VideoGrid";
import Companies from "@/components/mezunlar/Companies";

export default function MezunlarimizPage() {
  return (
    <main className="code-student-main">
      <Hero />
      <Statistics />
      <PartnersCarousel />
      <BlogTabs />
      <VideoGrid />
      <Companies />
    </main>
  );
}
