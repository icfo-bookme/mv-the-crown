import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Banner from "@/components/ui/Banner";
import CTAButtons from "@/components/ui/CTAButtons";


export const metadata = {
  title: "Payment | MV The Crown — Luxury River Cruises from Khulna to Sundarbans",
  description: "Complete your payment securely for MV The Crown luxury river cruises. Confirm your booking, choose your payment method, and enjoy a seamless cruise experience.",
}


export default function Page() {
 
  return (
    <div className="pt-0 bg-gray-50">
      <Banner
        imageUrl="/13.png"
        title="Payment Methods"
        subtitle=""
        heightClass=" h-[50vh] lg:h-[70vh]"
      />
        
      <PaymentMethods />
<CTAButtons/>
      
    </div>
  )
}