import Packages from "@/components/Packages/package";
import StepProcess from "@/components/Step/step";
import TermsCancellation from "@/components/TermsCancellation/TermsCancellation";
import Banner from "@/components/ui/Banner";
import getPackages from "@/lib/getPackages";

export default async function Page() {
    const packages = await getPackages(264);
  return (
    <div className="pt-0 bg-gray-50">
        <Banner
          imageUrl="/10.jpg"
          title="Ticket Booking"
          subtitle=""
          heightClass=" h-[35vh] lg:h-[70vh]"
        /> 
         <StepProcess />
          <Packages packages={packages} />
        <TermsCancellation />
    </div>
  )
}