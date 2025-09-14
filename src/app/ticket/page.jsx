import Packages from "@/components/Packages/package";
import StepProcess from "@/components/Step/step";
import TermsCancellation from "@/components/TermsCancellation/TermsCancellation";
import getPackages from "@/lib/getPackages";

export default async function Page() {
    const packages = await getPackages(264);
  return (
    <div className="pt-24">
         <StepProcess />
          <Packages packages={packages} />
        <TermsCancellation />
    </div>
  )
}