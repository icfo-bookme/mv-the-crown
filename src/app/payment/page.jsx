import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Banner from "@/components/ui/Banner";

export default function Page() {
  return (
    <div className="pt-0">
      <Banner
        imageUrl="/10.jpg"
        title="Payment Methods"
        subtitle=""
        heightClass=" h-[35vh] lg:h-[95vh]"
      />
        
      <PaymentMethods />
    </div>
  )
}