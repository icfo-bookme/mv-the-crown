import Schedules from "@/components/Schedules/schedules";
import Banner from "@/components/ui/Banner";
import getSchedules from "@/lib/getSchedules";

export const metadata = {
  title: "Schedules | MV The Crown — Luxury River Cruises from Khulna to Sundarbans",
  description: "Check the latest cruise schedules for MV The Crown from Khulna to the Sundarbans. View departure times, cabin availability, and plan your luxury river journey.",
}


export default async function Page() {
     const schedules = await getSchedules(264);

  return (
    <div className="pt-0 bg-gray-50">
       <Banner
          imageUrl="/13.png"
          title="Schedules"
          subtitle=""
          heightClass=" h-[50vh] lg:h-[60vh]"
        /> 
        <Schedules schedules={schedules} />
    </div>
  )
}