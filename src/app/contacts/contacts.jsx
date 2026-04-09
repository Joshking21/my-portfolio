"use client";
import ContactForm from "./contactForm";
import MotionFadeInSection from "../framerMotion/motion";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function Contacts() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "joshuaoduoma@gmail.com", link: "mailto:joshuaoduoma@gmail.com" },
    { icon: MessageCircle, label: "WhatsApp", value: "+234 913 117 107", link: "https://wa.me/234913117107" },
    { icon: Phone, label: "Call", value: "+234 913 117 107", link: "tel:+234913117107" },
  ];

  return (
    <MotionFadeInSection>
      <div id="contact" className="flex flex-col items-center py-16 bg-[var(--primary)] px-4">
        <div className="py-1 px-6 border-x-[3px] font-bold border-black mb-12 uppercase tracking-widest text-sm">
          Contact
        </div>
        
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-10 lg:gap-20">
          {/* Form */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-center">
            <p className="text-xs font-bold uppercase tracking-widest mb-8 opacity-50 underline decoration-1 underline-offset-4">Send a direct message</p>
            <ContactForm />
          </div>

          {/* Contact Details Card */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 bg-black text-white p-8 md:p-12 rounded-2xl flex flex-col justify-center">
             <div className="space-y-8">
                {contactInfo.map((info, idx) => (
                  <a href={info.link} key={idx} className="flex items-center gap-5 hover:translate-x-2 transition-transform group">
                    <div className="p-3 bg-white text-black rounded-xl group-hover:bg-red-500 group-hover:text-white transition-colors">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">{info.label}</p>
                      <p className="text-sm md:text-lg font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
             </div>
          </div>
        </div>
      </div>
    </MotionFadeInSection>
  );
}