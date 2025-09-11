import Image from "next/image";

const steps = [
    {
        title: "Step: 1",
        description: "Choose your plan",
        icon: "/icons/icons-choose.png",
    },
    {
        title: "Step: 2",
        description: "Call/Chat with agent",
        icon: "/icons/icon-call-center.png",
    },
    {
        title: "Step: 3",
        description: "Make your payment",
        icon: "/icons/payment-process.png",
    },
    {
        title: "Step: 4",
        description: "Collect your ticket",
        icon: "/icons/icon-ticket-receive.png",
    },
];

export default function StepProcess() {
    return (
        <div>
            <h4 className="text-3xl text-center text-[20px] py-8 lg:text-4xl font-bold mb-4">
                Ticket Booking Process
            </h4>

            <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-16 ">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center relative">
                        <div className="bg-gray-100 p-4 rounded-full mb-4 shadow-md w-24 h-24 flex items-center justify-center">
                            <Image
                                src={step.icon}
                                alt={step.description}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-sm font-medium text-gray-700">{step.title}</p>
                        <p className="text-md text-gray-900">{step.description}</p>

                        {/* Dotted line between steps for medium+ screens */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute right-[-72px] top-14 w-20 h-px border-t border-dashed border-gray-300"></div>
                        )}
                    </div>
                ))}
            </div></div>
    );
}
