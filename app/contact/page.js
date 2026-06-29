"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const contactDetails = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
    label: "Address",
    value: "Plot No. 94, 3rd Floor, Pocket-10, Dwarka Sector 13, New Delhi – 110078",
    href: "https://maps.google.com/?q=Dwarka+Sector+13+New+Delhi",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "contact@rnklegalheads.com",
    href: "mailto:contact@rnklegalheads.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 9779202789 / +91 6003416196",
    href: "tel:+919779202789",
  },
  
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name    = "Name is required.";
    if (!form.email.trim())   e.email   = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Please describe your matter.";
    if (!form.consent)        e.consent = "Please accept to continue.";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  }

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 45%, #0e2a6a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(37,99,235,0.12)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">Get in Touch</span>
            </div>
            <h1
              className="text-4xl md:text-6xl font-black text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Contact Us
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Reach out to discuss a matter, request a proposal, or simply
              ask a question about our services.
            </p>
          </div>
        </section>

        {/* ── Contact Content ── */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12">

            {/* ── Left: details + map ── */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact card */}
              <div
                className="rounded-3xl overflow-hidden shadow-lg"
                style={{ background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)" }}
              >
                <div className="h-1" style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }} />
                <div className="p-7 space-y-6">
                  <p className="text-amber-400 text-xs font-bold tracking-widest uppercase">RNK Legalheads LLP</p>
                  {contactDetails.map((d) => (
                    <a
                      key={d.label}
                      href={d.href}
                      target={d.label === "Address" ? "_blank" : undefined}
                      rel={d.label === "Address" ? "noreferrer" : undefined}
                      className="flex items-start gap-4 group"
                    >
                      <div className="mt-0.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform">
                        {d.icon}
                      </div>
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">{d.label}</p>
                        <p className="text-slate-200 text-sm leading-relaxed group-hover:text-amber-300 transition-colors">
                          {d.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map embed */}

              {/* NOTE  */}
              {/* This is the wrong way to use src for google map we have to open the google map and search the office location. And share it as embaded, copy the html text and past it */}
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <iframe
                  title="RNK Legalheads LLP location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0!2d77.0!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDwarka+Sector+13%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7 sm:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-emerald-600" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Message received
                    </h3>
                    <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. A member of the RNK team will be in
                      touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h2 className="text-2xl font-black text-slate-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Send us a message
                    </h2>

                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="Your name"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${errors.name ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${errors.email ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                          Subject / Area of Enquiry
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => handleChange("subject", e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        >
                          <option value="">Select a topic</option>
                          <option>Patents</option>
                          <option>Designs</option>
                          <option>Trade Marks</option>
                          <option>IP Litigation</option>
                          <option>Commercial Matters</option>
                          <option>General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1.5">
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Briefly describe your matter or question..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none ${errors.message ? "border-red-400 bg-red-50" : "border-slate-200 bg-slate-50"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    {/* Privacy consent */}
                    <div>
                      <label
                        className="flex items-start gap-3 cursor-pointer select-none"
                        onClick={() => handleChange("consent", !form.consent)}
                      >
                        <div
                          className="mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all"
                          style={{
                            background: form.consent ? "linear-gradient(135deg, #1a3570, #2563eb)" : "rgba(0,0,0,0.04)",
                            border: form.consent ? "1px solid #2563eb" : "1px solid #d1d5db",
                          }}
                        >
                          {form.consent && (
                            <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="white" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <span className="text-xs text-slate-500 leading-relaxed">
                          I acknowledge that by submitting this form, my contact details and message will be
                          shared with RNK Legalheads LLP for the purpose of responding to my enquiry.
                          Submission of this form does not create a lawyer-client relationship.{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      </label>
                      {errors.consent && <p className="text-red-500 text-xs mt-1.5 ml-8">{errors.consent}</p>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white btn-shimmer tracking-wide transition-all"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-xs text-slate-400">
                      Sending this message does not constitute legal advice or create a lawyer-client relationship.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
