import React from "react";

const FAQSection = () => {
  return (
    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="p-2 text-sm font-medium tracking-wider text-center text-red-600 uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-xl font-bold leading-none text-center text-blue-950 sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col divide-y text-gray-900 sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              How many cabins are available on MV The Crown?
            </summary>
            <div className="px-4 pb-4">
              <p>
                MV The Crown has a total of 28 luxury AC cabins, accommodating up to 75 passengers. The cabins are divided into three categories: 2-person rooms (11 cabins), 3-person rooms (15 cabins), and 4-person rooms (2 cabins), all equipped with modern amenities for a comfortable journey.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is included in the Sundarbans 3-day, 2-night tour?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                The tour package includes luxurious accommodation, daily meals (3 main meals and 2 light snacks), BBQ nights, guided excursions, river and forest tracking, and access to all onboard facilities like swimming pool, AC dining, TV, and more.
              </p>
              <p>
                Safety is ensured with experienced guides and forest department personnel on board. Essential items such as caps, sunglasses, sunscreen, medications, and personal hygiene products are also provided.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What is the itinerary for the Sundarbans cruise?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                <strong>Day 1:</strong> Arrival at the ship via trailer, morning snacks, visit Rupsha Bridge, Khulna Shipyard, Rampal Power Plant, then proceed to Chandpai Forest Office and Harbaria for eco-tourism exploration. Night stay on the ship at Kotka.
                </p>
              <p>
                <strong>Day 2:</strong> Morning canal visit around Kotka, wildlife spotting (deer, birds, monkeys, crocodiles), visit Watch Tower, continue to Jamtoli Sea Beach and Hiron Point, evening BBQ dinner on board, and overnight cruise toward Karamjal. Optional second route to Dimersh Char and Kochikhali if conditions permit.
              </p>
              <p>
                <strong>Day 3:</strong> Visit Karamjal eco-tourism spot, observe wildlife and crocodile breeding center, return to Khulna around 6–7 PM, and onward departure by bus/train.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              Are there any age restrictions or special requirements?
            </summary>
            <div className="px-4 pb-4">
              <p>
                MV The Crown welcomes travelers of all ages. Children must be accompanied by adults. Comfortable clothing and personal essentials are recommended. Any special requirements can be communicated at the time of booking.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What payment methods are accepted for booking?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Payments can be made via bKash, Nagad, and bank transfers. All transactions are secure, and our team will assist to ensure a smooth and convenient booking experience.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What should I bring for the Sundarbans cruise?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Essentials include warm clothing, sunscreen, caps, sunglasses, camera, memory cards, power banks, and personal hygiene items. The cruise provides toiletries like soap, shampoo, toothpaste, toothbrush, and drinking water.
              </p>
              <p>
                For safety and convenience, medications and guidance from trained personnel are also provided onboard.
              </p>
            </div>
          </details>

          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline">
              What are the Terms and Conditions for booking MV The Crown?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Your booking will be considered confirmed only with an advance payment of at least 50% of the total tour price. The remaining balance must be paid before the ship departure. For group bookings, full payment is required at least 3 working days before departure.
              </p>
              <p>
                All bookings are subject to the cancellation rules and fees of the company. The accompanying guide reserves the right to make adjustments to the itinerary if needed. In case of fog, rain, or other unforeseen problems causing delays or cancellations, we will do our best to make your holidays enjoyable. If you choose not to avail the trip, the cancellation fee will apply according to company rates.
              </p>
            </div>
          </details>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
