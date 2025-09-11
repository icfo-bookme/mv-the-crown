import Packages from "@/components/Packages/package";
import StepProcess from "@/components/Step/step";
import Banner from "@/components/ui/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div>
        <Banner
          imageUrl="/default_banner.jpg"
          title="Luxury River Cruises from Khulna"
          subtitle="Discover amazing features and services"
        />
        <StepProcess />
        <Packages />
      </div>
    </main>
  );
}
