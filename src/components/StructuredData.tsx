import React from "react";

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://detach.crabstertech.in/#organization",
        name: "Crabster Technology",
        url: "https://crabstertech.in",
        logo: "https://detach.crabstertech.in/assets/detach_logo_dark.png",
        sameAs: [
          "https://x.com",
          "https://instagram.com",
          "https://github.com/crabstertechnology/Detach"
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "hello@crabster.tech",
          contactType: "Customer Support"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://detach.crabstertech.in/#website",
        url: "https://detach.crabstertech.in",
        name: "Detach | Reconnect With What Matters",
        description:
          "A dedicated handheld companion to break compulsive phone scrolling. Features a vibrant 1.69 inch color touchscreen, all-day battery life, and shake to wake motion sensor.",
        publisher: {
          "@id": "https://detach.crabstertech.in/#organization"
        }
      },
      {
        "@type": "Product",
        "@id": "https://detach.crabstertech.in/#product",
        name: "Detach",
        image: "https://detach.crabstertech.in/assets/detach_hero_4k.webp",
        description:
          "Anti-distraction physical touch companion designed to break compulsive phone scrolling with two-minute mindful micro-resets. Dual-core ESP32-S3 processor, 1.69-inch color touch display, USB-C fast charging, and 6-axis shake-to-wake motion sensor.",
        brand: {
          "@type": "Brand",
          name: "Detach by Crabster Technology"
        },
        manufacturer: {
          "@id": "https://detach.crabstertech.in/#organization"
        },
        category: "Electronics > Handheld Digital Wellbeing Companions",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "INR",
          availability: "https://schema.org/PreOrder",
          url: "https://detach.crabstertech.in/#v6-waitlist",
          seller: {
            "@id": "https://detach.crabstertech.in/#organization"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://detach.crabstertech.in/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How will Detach actually change my daily habits and focus?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detach interrupts the compulsive reflex to reach for your phone whenever you pause, feel stressed, or experience a moment of boredom. Instead of falling into a thirty minute algorithmic scroll hole, Detach gives you an instant two minute mindful reset. You return to your day with mental clarity, lower anxiety, and hours of reclaimed attention."
            }
          },
          {
            "@type": "Question",
            name: "Why can't I just use a screen time or meditation app on my phone?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Screen time apps live inside the very device designed by behavioral psychologists to distract you. One notification or unlock tempts you back into messages, emails, and feeds. Detach is a physical circuit breaker, a dedicated tactile object that allows you to put your phone away and still get uplifting, constructive moments throughout the day."
            }
          },
          {
            "@type": "Question",
            name: "Is Detach just another screen that will end up distracting me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Detach is purposefully engineered as a distraction free companion. There is no web browser, no infinite feeds, no ad tracking, and zero notification spam. The screen remains asleep until you pick it up, displays one positive prompt, and politely turns off when you finish."
            }
          },
          {
            "@type": "Question",
            name: "How does the shake to wake feature work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detach has an integrated six axis motion sensor. Whenever you pick up the device and give it a gentle flick, it wakes instantly in under a tenth of a second, presenting an activity card matched to your current energy level."
            }
          },
          {
            "@type": "Question",
            name: "How long does the battery last and how do I recharge it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detach features an internal rechargeable lithium battery designed for all day active use and multi week standby. When it is time to recharge, standard fast USB-C powers the device to full battery in under 45 minutes using any standard phone or laptop cable."
            }
          },
          {
            "@type": "Question",
            name: "What are the dimensions and how portable is it?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Detach is engineered for true everyday carry. Measuring just 65 mm by 42 mm by 12 mm and weighing only ~38 grams, it slips cleanly and comfortably into any pocket or bag. It also includes an integrated alloy lanyard anchor with a durable braided wrist strap so it is always ready by your side."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
