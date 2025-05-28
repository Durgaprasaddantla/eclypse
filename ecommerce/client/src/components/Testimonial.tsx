import React from "react";

export default function Testimonial() {
  return (
    <section className="py-12 border-t border-indigo-800">
      <blockquote className="text-2xl italic text-center max-w-2xl mx-auto text-indigo-100">
        "Understand, but unforgettable. It feels like it was made for me"
      </blockquote>
      <p className="text-center mt-4 font-semibold text-indigo-200">
        Random Woman
      </p>
      <p className="text-center text-indigo-400">NY USA</p>

      <div className="flex justify-center mt-8 space-x-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-full bg-indigo-900 border-2 border-indigo-700"
          ></div>
        ))}
      </div>
    </section>
  );
}
