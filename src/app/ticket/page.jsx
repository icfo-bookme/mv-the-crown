import Packages from "@/components/Packages/package";
import StepProcess from "@/components/Step/step";
import TermsCancellation from "@/components/TermsCancellation/TermsCancellation";
import Banner from "@/components/ui/Banner";
import getFoodAndDescription from "@/lib/getFoodAndDescription";
import getPackages from "@/lib/getPackages";

export const metadata = {
  title: "Tickets | MV The Crown — Luxury River Cruises from Khulna to Sundarbans",
  description: "Book your tickets for MV The Crown luxury river cruises from Khulna to the Sundarbans. Secure your cabin, choose your dates, and enjoy a premium cruise experience.",
}


export default async function Page() {
  const packages = await getPackages(264);
  const foodAndDescription = await getFoodAndDescription(264)
  return (
    <div className="pt-0 bg-gray-50">
      <Banner
        imageUrl="/13.png"
        title="Ticket Booking"
        subtitle=""
        heightClass=" h-[50vh] lg:h-[70vh]"
      />
      <StepProcess />
      <Packages packages={packages} foodAndDescription={foodAndDescription} />
      <TermsCancellation />
    </div>
  )
}