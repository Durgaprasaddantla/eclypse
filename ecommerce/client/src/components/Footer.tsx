import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-lg text-indigo-100">About Us</h3>
          <p className="text-indigo-300">
            We create premium sustainable fashion with ethical manufacturing
            practices.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg text-indigo-100">Contact</h3>
          <p className="text-indigo-300">support@eclipsefashion.com</p>
          <p className="text-indigo-300">+1 (555) 123-4567</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg text-indigo-100">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 pt-8 border-t border-indigo-800 text-indigo-400">
        © 2024 Eclipse Fashion. All rights reserved.
      </div>
    </footer>
  );
}
