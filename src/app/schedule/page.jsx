import Schedules from "@/components/Schedules/schedules";
import Banner from "@/components/ui/Banner";
import getSchedules from "@/lib/getSchedules";


export default async function Page() {
     const schedules = await getSchedules(264);

  return (
    <div className="pt-0">
       <Banner
          imageUrl="/10.jpg"
          title="Schedules"
          subtitle=""
          heightClass=" h-[35vh] lg:h-[95vh]"
        /> 
        <Schedules schedules={schedules} />
    </div>
  )
}