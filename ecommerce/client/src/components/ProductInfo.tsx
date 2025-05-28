import React from "react";

export default function ProductInfo() {
  const sections = [
    { title: "Size & Fit", content: "Detailed size information..." },
    { title: "Delivery & Returns", content: "Shipping and return policy..." },
    { title: "How This Was Made", content: "Manufacturing process..." },
    { title: "OUR CUSTOMERS", content: "Customer testimonials..." },
  ];

  return (
    <section className="py-12">
      <div className="grid md:grid-cols-4 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="card p-6 space-y-4 transition-all hover:shadow-indigo-900/30 hover:shadow-lg"
          >
            <h3 className="font-semibold text-lg text-indigo-100">
              {section.title}
            </h3>
            <p className="text-indigo-300">{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
