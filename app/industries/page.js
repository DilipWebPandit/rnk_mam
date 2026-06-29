// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SectionLabel from "../components/SectionLabel";

// export const metadata = {
//   title: "Industries – RNK Legalheads LLP",
//   description: "IP and commercial legal support across technology, pharma, FMCG, startups, manufacturing, real estate, education and healthcare sectors.",
// };

// const industries = [
//   {
//     icon: "💻",
//     title: "Technology & Software",
//     color: "from-blue-600 to-cyan-500",
//     bg: "bg-blue-50",
//     border: "border-blue-100",
//     desc: "Patents for software-led inventions, AI/ML systems, communication protocols and platform technologies. Trade mark protection for technology brands.",
//     services: ["Software & AI patents", "Telecommunications IP", "Platform trade marks", "Technology transfer agreements"],
//   },
//   {
//     icon: "📺",
//     title: "Media & Entertainment",
//     color: "from-violet-600 to-purple-500",
//     bg: "bg-violet-50",
//     border: "border-violet-100",
//     desc: "Copyright, trade mark and design protection for media brands, content creators and entertainment companies.",
//     services: ["Copyright registration", "Brand and title protection", "Content licensing", "Anti-piracy advisory"],
//   },
//   {
//     icon: "💊",
//     title: "Pharmaceuticals & Life Sciences",
//     color: "from-emerald-600 to-teal-500",
//     bg: "bg-emerald-50",
//     border: "border-emerald-100",
//     desc: "Pharmaceutical and biotechnology patent support — formulations, processes, compounds and medical devices — including evergreening and patent linkage advisory.",
//     services: ["Drug & formulation patents", "Biotech IP", "Regulatory & patent linkage", "Licensing agreements"],
//   },
//   {
//     icon: "🛒",
//     title: "FMCG & Consumer Products",
//     color: "from-orange-500 to-amber-500",
//     bg: "bg-amber-50",
//     border: "border-amber-100",
//     desc: "Brand protection, packaging design registration and product innovation patents for fast-moving consumer goods companies.",
//     services: ["Trade mark portfolio", "Packaging design", "Product patents", "Brand watch"],
//   },
//   {
//     icon: "🚀",
//     title: "Startups & Emerging Businesses",
//     color: "from-rose-500 to-pink-500",
//     bg: "bg-rose-50",
//     border: "border-rose-100",
//     desc: "Cost-effective IP strategy for early-stage companies — building foundational patent and brand assets aligned with funding and growth milestones.",
//     services: ["IP strategy for funding rounds", "First patent filing", "Trade mark clearance", "Founder IP agreements"],
//   },
//   {
//     icon: "⚙️",
//     title: "Manufacturing & Engineering",
//     color: "from-slate-600 to-slate-800",
//     bg: "bg-slate-50",
//     border: "border-slate-200",
//     desc: "Process and product patents across mechanical, electrical and industrial engineering sectors, including trade secret and know-how protection.",
//     services: ["Process & product patents", "Industrial design", "Know-how agreements", "Supplier IP clauses"],
//   },
//   {
//     icon: "🏗️",
//     title: "Real Estate & Construction",
//     color: "from-stone-600 to-stone-800",
//     bg: "bg-stone-50",
//     border: "border-stone-200",
//     desc: "Trade mark protection for real estate brands, design registration for architectural and interior elements, and commercial agreement support.",
//     services: ["Brand trade marks", "Architectural design protection", "Licensing agreements", "NDA drafting"],
//   },
//   {
//     icon: "🏷️",
//     title: "Consumer Brands & Retail",
//     color: "from-fuchsia-600 to-violet-600",
//     bg: "bg-fuchsia-50",
//     border: "border-fuchsia-100",
//     desc: "End-to-end brand asset management — from search and clearance to multi-class filings, oppositions and enforcement across retail and e-commerce.",
//     services: ["Multi-class trade marks", "Brand clearance searches", "Opposition proceedings", "E-commerce enforcement"],
//   },
//   {
//     icon: "🎓",
//     title: "Education & Research Institutions",
//     color: "from-blue-800 to-indigo-700",
//     bg: "bg-indigo-50",
//     border: "border-indigo-100",
//     desc: "Dedicated support for universities, IITs, NITs and research bodies — technology transfer, patent commercialisation and institutional IP policies.",
//     services: ["Technology transfer", "Patent commercialisation", "Institutional IP policy", "Faculty invention management"],
//   },
//   {
//     icon: "🏥",
//     title: "Healthcare & Medical Devices",
//     color: "from-green-600 to-emerald-500",
//     bg: "bg-green-50",
//     border: "border-green-100",
//     desc: "IP protection for medical devices, diagnostics, healthcare IT and surgical instruments — navigating both patent and regulatory frameworks.",
//     services: ["Medical device patents", "Diagnostics IP", "Healthcare software patents", "Regulatory-IP advisory"],
//   },
// ];

// export default function IndustriesPage() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         {/* ── Hero ── */}
//         <section
//           className="relative overflow-hidden py-24"
//           style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 45%, #0e2a6a 100%)" }}
//         >
//           <div className="absolute inset-0 pointer-events-none">
//             <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
//               style={{ background: "rgba(217,119,6,0.1)" }} />
//           </div>
//           <div className="relative max-w-7xl mx-auto px-6 text-center">
//             <SectionLabel light>Industries</SectionLabel>
//             <h1
//               className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Sectors We Serve
//             </h1>
//             <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
//               RNK Legalheads LLP works across a broad range of industry sectors,
//               combining IP expertise with an understanding of the commercial realities
//               specific to each domain.
//             </p>
//           </div>
//         </section>

//         {/* ── Industry Cards ── */}
//         <section className="py-24 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {industries.map((ind) => (
//                 <div
//                   key={ind.title}
//                   className={`rounded-3xl border ${ind.bg} ${ind.border} p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
//                 >
//                   <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${ind.color} flex items-center justify-center text-2xl shadow-md mb-4 shrink-0`}>
//                     {ind.icon}
//                   </div>
//                   <h2 className="text-lg font-black text-slate-900 mb-2">{ind.title}</h2>
//                   <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{ind.desc}</p>
//                   <div className="space-y-1.5 pt-4 border-t border-black/5">
//                     {ind.services.map((s) => (
//                       <div key={s} className="flex items-center gap-2 text-xs text-slate-600">
//                         <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${ind.color} shrink-0`} />
//                         {s}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── CTA ── */}
//         <section
//           className="py-20 relative overflow-hidden"
//           style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }}
//         >
//           <div className="relative max-w-3xl mx-auto px-6 text-center">
//             <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Don&apos;t see your sector?</p>
//             <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
//               We work across all technology and commercial domains
//             </h2>
//             <p className="text-slate-400 mb-8">
//               Reach out to discuss your specific industry context and how RNK can support your IP and legal requirements.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-2xl transition-all"
//             >
//               Contact Us
//             </a>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </>
//   );
// }
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "Industries – RNK Legalheads LLP",
  description:
    "IP and commercial legal support across technology, pharma, FMCG, fashion, e-commerce, startups, manufacturing, agriculture, education, healthcare and more.",
};

const industries = [
  {
    icon: "💻",
    title: "Technology & Software",
    color: "from-blue-600 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    desc: "Patents for software-led inventions, AI/ML systems, communication protocols and platform technologies. Trade mark protection for technology brands.",
    services: ["Software & AI patents", "Telecommunications IP", "Platform trade marks", "Technology transfer agreements"],
  },
  {
    icon: "📺",
    title: "Media & Entertainment",
    color: "from-violet-600 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-100",
    desc: "Copyright, trade mark and design protection for media brands, content creators, production houses and entertainment companies.",
    services: ["Copyright registration", "Brand and title protection", "Content licensing", "Anti-piracy advisory"],
  },
  {
    icon: "💊",
    title: "Pharmaceuticals & Life Sciences",
    color: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    desc: "Pharmaceutical and biotechnology patent support — formulations, processes, compounds and medical devices — including patent linkage advisory.",
    services: ["Drug & formulation patents", "Biotech IP", "Regulatory & patent linkage", "Licensing agreements"],
  },
  {
    icon: "🛒",
    title: "FMCG & Consumer Products",
    color: "from-orange-500 to-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    desc: "Brand protection, packaging design registration and product innovation patents for fast-moving consumer goods companies and distributors.",
    services: ["Trade mark portfolio", "Packaging design registration", "Product patents", "Brand watch"],
  },
  {
    icon: "👗",
    title: "Fashion & Design",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    border: "border-pink-100",
    desc: "Protecting creative and commercial value in fashion — design registrations, trade mark protection, copyright in original works and anti-counterfeiting support.",
    services: ["Fashion design registration", "Brand and label trade marks", "Copyright in collections", "Counterfeiting enforcement"],
  },
  {
    icon: "🛍️",
    title: "E-Commerce & Digital Retail",
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    desc: "End-to-end brand asset management and IP enforcement for e-commerce sellers, marketplaces and digital-first retail brands.",
    services: ["Multi-class trade marks", "Marketplace enforcement", "Online takedowns", "Seller IP advisory"],
  },
  {
    icon: "🚀",
    title: "Startups & Emerging Businesses",
    color: "from-rose-500 to-pink-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    desc: "IP strategy for early-stage companies — building foundational patent and brand assets aligned with funding milestones and growth objectives.",
    services: ["IP strategy for fundraising", "First patent filing", "Trade mark clearance", "Founder IP agreements"],
  },
  {
    icon: "⚙️",
    title: "Manufacturing & Engineering",
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    desc: "Process and product patents across mechanical, electrical and industrial engineering sectors, including trade secret and know-how protection.",
    services: ["Process & product patents", "Industrial design", "Know-how agreements", "Supplier IP clauses"],
  },
  {
    icon: "🌾",
    title: "Agriculture & Agri-Tech",
    color: "from-green-600 to-lime-600",
    bg: "bg-green-50",
    border: "border-green-100",
    desc: "IP support for agricultural innovation — crop technology patents, agri-tech inventions, plant variety protection advisory and brand protection for agri-businesses.",
    services: ["Agri-tech patents", "Agri-input trade marks", "Plant variety advisory", "Technology licensing"],
  },
  {
    icon: "🍽️",
    title: "Food & Beverage",
    color: "from-amber-600 to-orange-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    desc: "Brand and IP protection for food and beverage businesses — from restaurant chains and licensed manufacturers to specialty food startups and exporters.",
    services: ["F&B trade marks", "Recipe and process patents", "Packaging design", "FSSAI compliance advisory"],
  },
  {
    icon: "🏗️",
    title: "Real Estate & Construction",
    color: "from-stone-600 to-stone-800",
    bg: "bg-stone-50",
    border: "border-stone-200",
    desc: "Trade mark protection for real estate brands, design registration for architectural elements, and property documentation support.",
    services: ["Brand trade marks", "Architectural design", "Property agreements", "NDA drafting"],
  },
  {
    icon: "🎓",
    title: "Education & Research Institutions",
    color: "from-blue-800 to-indigo-700",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    desc: "Dedicated support for universities, IITs, NITs, research bodies and incubators — technology transfer, patent commercialisation and institutional IP policy.",
    services: ["Technology transfer", "Patent commercialisation", "Institutional IP policy", "Faculty invention management"],
  },
  {
    icon: "🏥",
    title: "Healthcare & Medical Devices",
    color: "from-teal-600 to-emerald-500",
    bg: "bg-teal-50",
    border: "border-teal-100",
    desc: "IP protection for medical devices, diagnostics, healthcare IT and surgical instruments — navigating patent, design and regulatory frameworks.",
    services: ["Medical device patents", "Diagnostics IP", "Healthcare software", "Regulatory-IP advisory"],
  },
];

export default function IndustriesPage() {
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
            <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(217,119,6,0.1)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <SectionLabel light>Industries</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Sectors We Serve
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              RNK Legalheads LLP works across a broad range of industry sectors,
              combining IP expertise with an understanding of the commercial realities
              specific to each domain.
            </p>
          </div>
        </section>

        {/* ── Industry Cards ── */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => (
                <div
                  key={ind.title}
                  className={`rounded-3xl border ${ind.bg} ${ind.border} p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${ind.color} flex items-center justify-center text-2xl shadow-md mb-4 shrink-0`}>
                    {ind.icon}
                  </div>
                  <h2 className="text-lg font-black text-slate-900 mb-2">{ind.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{ind.desc}</p>
                  <div className="space-y-1.5 pt-4 border-t border-black/5">
                    {ind.services.map((s) => (
                      <div key={s} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${ind.color} shrink-0`} />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }}
        >
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Don&apos;t see your sector?</p>
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              We work across all technology and commercial domains
            </h2>
            <p className="text-slate-400 mb-8">
              Reach out to discuss your specific industry context and how RNK can support your IP and legal requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-2xl transition-all"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
