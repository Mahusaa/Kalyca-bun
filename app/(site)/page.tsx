import Hero from "@/components/Hero";
import Keunggulan from "@/components/Keunggulan";
import Programs from "@/components/Programs";
import Facilities from "@/components/Facilities";
import Review from "@/components/Review";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Keunggulan />
      <Programs />
      <Facilities />
      <Review />
    </main>
  );
}
