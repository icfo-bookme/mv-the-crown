import BlogSection from "@/components/BlogSection/BlogSection";
import CruisePromo from "@/components/CruisePromo/CruisePromo";
import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import Packages from "@/components/Packages/package";
import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Schedules from "@/components/Schedules/schedules";
import StepProcess from "@/components/Step/step";
import Banner from "@/components/ui/Banner";
import getPackages from "@/lib/getPackages";
import { getPropertyImages } from "@/lib/getPropertyImages";
import getSchedules from "@/lib/getSchedules";
import Image from "next/image";

export default async function Home() {

  const packages = await getPackages(264);
  const schedules = await getSchedules(264);
  const images = await getPropertyImages(264);
  return (
    <main className="bg-gray-50">
      <div>
        <Banner
          imageUrl="/10.jpg"
          title="Luxury River Cruises from Khulna"
          subtitle="Khulna - Sundarbans - Khulna"
          heightClass=" h-[40vh] lg:h-[95vh]"
        /> 
        <StepProcess />
        <Packages packages={packages} />
        <Schedules schedules ={schedules} />
        <PaymentMethods />
        <CruisePromo />
        <ImageCarousel propertyImages={images} />
        <BlogSection />
      </div>
    </main>
  );
}
