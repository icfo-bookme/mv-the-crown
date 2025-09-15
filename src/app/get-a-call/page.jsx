import ContactForm from "@/components/ContactForm/ContactForm";
import Banner from "@/components/ui/Banner";
 // Adjust path as needed

export default function Page() {
  return (
    <div>
      <Banner
        imageUrl="/10.jpg"
        title="Get A Call"
        subtitle=""
        heightClass=" h-[35vh] lg:h-[95vh]"
      />

      <section className="bg-white min-h-screen py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Get A Call
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Please fill out the form below, and we will get back to you as soon as possible.
          </p>

          {/* Contact Form Here */}
          <ContactForm title="not show" />
        </div>
      </section>
    </div>
  );
}
