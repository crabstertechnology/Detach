"use client";

import React from "react";
import Image from "next/image";

const FAQ_ITEMS = [
  {
    q: "How will Detach actually change my daily habits and focus?",
    a: "Detach interrupts the compulsive reflex to reach for your phone whenever you pause, feel stressed, or experience a moment of boredom. Instead of falling into a thirty minute algorithmic scroll hole, Detach gives you an instant two minute mindful reset. You return to your day with mental clarity, lower anxiety, and hours of reclaimed attention.",
  },
  {
    q: "Why can't I just use a screen time or meditation app on my phone?",
    a: "Screen time apps live inside the very device designed by behavioral psychologists to distract you. One notification or unlock tempts you back into messages, emails, and feeds. Detach is a physical circuit breaker, a dedicated tactile object that allows you to put your phone away and still get uplifting, constructive moments throughout the day.",
  },
  {
    q: "Is Detach just another screen that will end up distracting me?",
    a: "No. Detach is purposefully engineered as a distraction free companion. There is no web browser, no infinite feeds, no ad tracking, and zero notification spam. The screen remains asleep until you pick it up, displays one positive prompt, and politely turns off when you finish.",
  },
  {
    q: "How does the shake to wake feature work?",
    a: "Detach has an integrated six axis motion sensor. Whenever you pick up the device and give it a gentle flick, it wakes instantly in under a tenth of a second, presenting an activity card matched to your current energy level.",
  },
  {
    q: "How long does the battery last and how do I recharge it?",
    a: "Detach features an internal rechargeable lithium battery designed for all day active use and multi week standby. When it is time to recharge, standard fast USB-C powers the device to full battery in under 45 minutes using any standard phone or laptop cable.",
  },
  {
    q: "What are the dimensions and how portable is it?",
    a: "Detach is engineered for true everyday carry. Measuring just 65 mm by 42 mm by 12 mm and weighing only ~38 grams, it slips cleanly and comfortably into any pocket or bag. It also includes an integrated alloy lanyard anchor with a durable braided wrist strap so it is always ready by your side.",
  },
];

export default function FAQ() {
  return (
    <section aria-labelledby="v6-faq-title" className="v6-faq" id="v6-faq">
      <h2 className="v6-section-title" data-letter-reveal="" id="v6-faq-title">
        Frequently asked questions
      </h2>

      <div className="v6-faq-list">
        {FAQ_ITEMS.map((item, idx) => (
          <details key={idx} name="faq" className="group">
            <summary className="cursor-pointer flex items-center justify-between py-4 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3875ff] rounded-lg">
              <span className="text-base sm:text-lg font-medium text-white pr-4 text-balance">
                {item.q}
              </span>
              <Image
                alt=""
                className="shrink-0 transition-transform duration-300 group-open:rotate-45"
                decoding="async"
                height={22}
                loading="lazy"
                src="/assets/current/faq-plus.svg"
                width={22}
              />
            </summary>
            <p className="text-sm leading-relaxed text-[#94a3b8] pb-4 pt-1 text-pretty">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
