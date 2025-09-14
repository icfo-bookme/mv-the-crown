import PaymentMethods from "@/components/PaymentMethods/PaymentMethods";
import Banner from "@/components/ui/Banner";

export default function Page() {
  return (
    <div className="pt-16">
          <Banner
          imageUrl="/default_banner.jpg"
          title="Payment Methods for MV The Crown"
          subtitle="Khulna - Sundarbans - Khulna"
        /> 
      <PaymentMethods />
    </div>
  )
}