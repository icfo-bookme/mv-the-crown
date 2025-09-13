import Schedules from "@/components/Schedules/schedules";
import getSchedules from "@/lib/getSchedules";

export default async function Page() {
     const schedules = await getSchedules(264);

  return (
    <div className="pt-24">
        <Schedules schedules={schedules} />
    </div>
  )
}