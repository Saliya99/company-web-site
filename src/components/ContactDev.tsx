import React from "react";

export const ContactDev: React.FC = () => {
  return (
    <div className="col-span-1 grid grid-cols-1 gap-8 bg-[#111827] pb-8 text-center sm:grid-cols-2 lg:grid-cols-1">
      <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "30.00%" }}>
        <iframe
          title="Amazoft Pvt Ltd Location"
          className="absolute left-0 top-0 h-full w-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.092886249373!2d79.8602485150709!3d6.87947473823331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bd656e03f1d%3A0xc91bb7b96b2f6f78!2sAmazoft%20Pvt%20Ltd!5e0!3m2!1sen!2slk!4v1739787923532!5m2!1sen!2slk"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
