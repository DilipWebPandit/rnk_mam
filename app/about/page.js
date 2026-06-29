// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import SectionLabel from "../components/SectionLabel";

// export const metadata = {
//   title: "About Us – RNK Legalheads LLP",
//   description: "Firm profile, philosophy, professional approach and representative experience of RNK Legalheads LLP.",
// };

// const stats = [
//   { value: "≈ 1,400", label: "Total patents filed" },
//   { value: "980",     label: "Patents filed in FY 2025–26" },
//   { value: "≈ 180",  label: "Granted patents" },
//   { value: "≈ 93%",  label: "Grant conversion rate" },
// ];

// const pillars = [
//   {
//     icon: "⚖️",
//     title: "Built on Trust",
//     desc: "Every client relationship is founded on transparency, confidentiality and honest counsel — without shortcuts or over-promises.",
//   },
//   {
//     icon: "🎯",
//     title: "Driven by Commitment",
//     desc: "We take ownership of every matter from first instruction through to final outcome, treating each file with the seriousness it deserves.",
//   },
//   {
//     icon: "🔬",
//     title: "Technically Conversant",
//     desc: "Our team engages with inventions across communication, AI, pharma, engineering and interdisciplinary domains — understanding the technology before advising on it.",
//   },
//   {
//     icon: "📋",
//     title: "Commercially Practical",
//     desc: "Legal advice that is grounded in business reality — structured, clear and oriented towards the client's commercial objectives.",
//   },
// ];

// const approaches = [
//   "Single-point interface covering IP creation, protection, prosecution and commercial support.",
//   "Proactive matter management with regular updates and clear timelines.",
//   "Technical comprehension aligned with legal strategy at every stage.",
//   "Scalable support — from a first filing to a growing institutional portfolio.",
//   "Coordination across patents, designs, trade marks and commercial documentation in one practice.",
// ];

// export default function AboutPage() {
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
//             <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
//               style={{ background: "rgba(37,99,235,0.12)" }} />
//             <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
//               style={{ background: "rgba(217,119,6,0.1)" }} />
//           </div>
//           <div className="relative max-w-7xl mx-auto px-6 text-center">
//             <SectionLabel light>About Us</SectionLabel>
//             <h1
//               className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Who We Are
//             </h1>
//             <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
//               RNK Legalheads LLP is an intellectual property and commercial legal firm
//               serving institutions, research ecosystems and enterprises across India.
//             </p>
//           </div>
//         </section>

//         {/* ── Firm Profile ── */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <SectionLabel>Firm Profile</SectionLabel>
//               <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6"
//                 style={{ fontFamily: "'Playfair Display', serif" }}>
//                 A focused IP and commercial legal practice
//               </h2>
//               <div className="space-y-4 text-slate-600 leading-relaxed">
//                 <p>
//                   RNK Legalheads LLP is a specialist intellectual property and commercial legal firm
//                   with a practice spanning patents, designs, trade marks, and allied commercial
//                   matters. The firm advises clients ranging from premier research institutions and
//                   universities to private enterprises across diverse industry sectors.
//                 </p>
//                 <p>
//                   With approximately 1,400 patents filed and a grant conversion rate of approximately
//                   93% from 193 hearing-completed prosecutions, RNK brings substantive depth to both
//                   filing and post-filing stages of IP work.
//                 </p>
//                 <p>
//                   The firm operates as a single coordinated legal interface — handling IP creation,
//                   protection, prosecution, commercial documentation and compliance support from one
//                   practice, without fragmentation across multiple service providers.
//                 </p>
//               </div>
//             </div>

//             {/* Stats grid */}
//             <div className="grid grid-cols-2 gap-4">
//               {stats.map((s) => (
//                 <div
//                   key={s.label}
//                   className="rounded-2xl p-7 text-center border border-slate-100 shadow-sm"
//                   style={{ background: "linear-gradient(135deg, #f8faff 0%, #eff6ff 100%)" }}
//                 >
//                   <p
//                     className="text-4xl font-black text-blue-800 mb-2"
//                     style={{ fontFamily: "'Playfair Display', serif" }}
//                   >
//                     {s.value}
//                   </p>
//                   <div className="w-8 h-0.5 bg-amber-400 rounded-full mx-auto mb-2" />
//                   <p className="text-slate-500 text-sm leading-snug">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Philosophy ── */}
//         <section className="py-24 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-14">
//               <SectionLabel>Our Philosophy</SectionLabel>
//               <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2"
//                 style={{ fontFamily: "'Playfair Display', serif" }}>
//                 Built on Trust, Driven by Commitment
//               </h2>
//               <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
//                 These are not just words on a wall. They define how we approach every matter,
//                 every instruction and every client relationship.
//               </p>
//             </div>
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {pillars.map((p) => (
//                 <div
//                   key={p.title}
//                   className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <span className="text-4xl mb-4 block">{p.icon}</span>
//                   <h3 className="font-bold text-slate-900 text-lg mb-2">{p.title}</h3>
//                   <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ── Professional Approach ── */}
//         <section className="py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
//             <div>
//               <SectionLabel>Professional Approach</SectionLabel>
//               <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 mb-6"
//                 style={{ fontFamily: "'Playfair Display', serif" }}>
//                 How we work with clients
//               </h2>
//               <p className="text-slate-500 leading-relaxed mb-8">
//                 RNK structures its practice around the client's need for a reliable, technically
//                 informed, and commercially aware legal partner — not just a filing agency.
//               </p>
//               <div className="space-y-3">
//                 {approaches.map((item, i) => (
//                   <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
//                     <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-700 font-bold text-xs mt-0.5">
//                       {i + 1}
//                     </div>
//                     <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Representative Experience highlight */}
//             <div
//               className="rounded-3xl overflow-hidden shadow-xl"
//               style={{ background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)" }}
//             >
//               <div className="h-1" style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }} />
//               <div className="p-8">
//                 <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">Representative Experience</p>
//                 <h3 className="text-white text-2xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
//                   Clients who trust RNK
//                 </h3>
//                 <div className="space-y-3 mb-8">
//                   {[
//                     "IIT Delhi, NIT Srinagar, VIT Vellore",
//                     "IIIT Raipur, TiHAN IIT Hyderabad",
//                     "HNB Garhwal University, KL University",
//                     "Inches Group Pvt. Ltd.",
//                     "INFINI Agrotek LLP",
//                     "Suncity Metals and Tubes Private Limited",
//                     "Aahara Pharmaceuticals",
//                   ].map((c) => (
//                     <div key={c} className="flex items-center gap-3 text-slate-300 text-sm">
//                       <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
//                       {c}
//                     </div>
//                   ))}
//                 </div>
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-6 py-3 rounded-xl transition-all text-sm"
//                 >
//                   Start a conversation →
//                 </a>
//               </div>
//             </div>
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
  title: "About Us – RNK Legalheads LLP",
  description:
    "RNK Legalheads LLP — a full-service law firm providing commercially focused, legally precise counsel to businesses, institutions and innovators.",
};

const stats = [
  { value: "≈ 1,400", label: "Total patents filed" },
  { value: "980",     label: "Patents filed in FY 2025–26" },
  { value: "≈ 180",  label: "Granted patents" },
  { value: "≈ 93%",  label: "Grant conversion rate" },
];

const pillars = [
  {
    icon: "🎯",
    title: "Understanding Before Strategy",
    desc: "Every matter begins with understanding the client's objective, facts, commercial background, documents, risks and desired outcome. Strategy follows assessment.",
  },
  {
    icon: "⚖️",
    title: "Legally Precise",
    desc: "The firm's advice is structured to be clear, practical and capable of effective implementation — reducing ambiguity and future disputes.",
  },
  {
    icon: "💼",
    title: "Commercially Focused",
    desc: "Legal advice that assists decision-making, reduces uncertainty and protects value — guided by an understanding of how legal decisions affect business operations.",
  },
  {
    icon: "🔗",
    title: "Integrated Support",
    desc: "Advisory, drafting, prosecution and litigation capabilities under one coordinated framework — enabling continuing legal support across different stages of the business.",
  },
];

const approach = [
  { num: "01", title: "Assess",  desc: "Understand the client's objective, facts, commercial background, documents, risks and desired outcome." },
  { num: "02", title: "Advise",  desc: "Develop a legal strategy that is practical, focused and capable of being implemented." },
  { num: "03", title: "Execute", desc: "Implement the strategy through drafting, filing, prosecution, negotiation or representation." },
  { num: "04", title: "Support", desc: "Provide continuing legal support across filings, contracts, disputes, compliance and recurring requirements." },
];

const whyRNK = [
  "Integrated legal support across advisory, documentation, prosecution and dispute resolution.",
  "Strong Intellectual Property foundation combined with commercial and litigation capabilities.",
  "Commercial perspective that helps clients understand how legal decisions affect business operations and ownership rights.",
  "Equipped to support institutions, universities, research organisations and businesses requiring recurring legal assistance.",
  "Structured reporting, long-term legal coordination and in-house legal support models.",
  "Experience across a broad range of sectors — from startups to enterprises, institutions to individual innovators.",
];

const representativeClients = [
  "IIT Delhi · NIT Srinagar · VIT Vellore",
  "IIIT Raipur · TiHAN IIT Hyderabad",
  "HNB Garhwal University · KL University",
  "SR University · Berhampur University",
  "Inches Group Pvt. Ltd.",
  "INFINI Agrotek LLP",
  "Suncity Metals and Tubes Private Limited",
  "Aahara Pharmaceuticals",
  "Logus Exports",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 45%, #0e2a6a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(37,99,235,0.12)" }}
            />
            <div
              className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
              style={{ background: "rgba(217,119,6,0.1)" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <SectionLabel light>About the Firm</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Commercially Focused.<br />Legally Precise.
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Strategic legal counsel for businesses, institutions and innovators —
              combining legal precision with commercial understanding.
            </p>
          </div>
        </section>

        {/* Firm Overview */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Who We Are</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                A full-service law firm built for complex environments
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  RNK Legalheads LLP is a full-service law firm advising businesses, entrepreneurs,
                  institutions, innovators and individuals across a broad range of legal and commercial
                  matters. The firm combines legal precision with commercial understanding to assist
                  clients in protecting their rights, managing risk and making informed decisions in an
                  evolving legal and regulatory environment.
                </p>
                <p>
                  Intellectual Property forms the core of the firm&apos;s practice. This is supported
                  by strong capabilities in corporate and commercial advisory, technology law, dispute
                  resolution, commercial litigation, regulatory advisory, real estate, employment,
                  consumer protection and allied legal services.
                </p>
                <p>
                  The firm was established with the objective of providing dependable, commercially
                  sound and result-oriented legal support to clients operating in complex business and
                  regulatory environments. RNK Legalheads LLP brings together advisory, drafting,
                  prosecution and litigation capabilities under one coordinated legal framework —
                  enabling clients to receive continuing legal support from creation and protection of
                  rights through to commercial exploitation, enforcement and dispute resolution.
                </p>
                <p>
                  The firm works closely with clients to understand the factual, commercial and legal
                  background of each matter before recommending a course of action. Its advice is
                  structured to be clear, practical and capable of effective implementation.
                </p>
              </div>
            </div>

            {/* Stats + philosophy */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl p-6 text-center border border-slate-100 shadow-sm"
                    style={{ background: "linear-gradient(135deg, #f8faff 0%, #eff6ff 100%)" }}
                  >
                    <p
                      className="text-3xl font-black text-blue-800 mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.value}
                    </p>
                    <div className="w-8 h-0.5 bg-amber-400 rounded-full mx-auto mb-2" />
                    <p className="text-slate-500 text-xs leading-snug">{s.label}</p>
                  </div>
                ))}
              </div>
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">Our Philosophy</p>
                <p
                  className="text-white text-xl font-black italic"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  &ldquo;Built on Trust, Driven by Commitment.&rdquo;
                </p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  The firm&apos;s approach is based on understanding the client&apos;s objectives,
                  assessing the legal and commercial risks involved, and providing solutions that
                  are practical, enforceable and aligned with long-term business interests.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach — four pillars */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Our Approach</SectionLabel>
              <h2
                className="text-3xl font-black text-slate-900 mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Understanding Before Strategy
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto text-sm leading-relaxed">
                The firm believes legal advice should assist decision-making, reduce uncertainty and
                protect value. Its approach is guided by clarity, precision, responsiveness,
                commercial awareness and accountability.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{p.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(37,99,235,0.1)" }}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <SectionLabel light>How We Work</SectionLabel>
              <h2
                className="text-3xl font-black text-white mt-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                From instruction to outcome
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {approach.map((s) => (
                <div
                  key={s.num}
                  className="rounded-2xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <p
                    className="text-5xl font-black text-gradient mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.num}
                  </p>
                  <p className="font-bold text-white text-lg mb-2">{s.title}</p>
                  <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why RNK */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionLabel>Why RNK Legalheads LLP</SectionLabel>
              <h2
                className="text-3xl font-black text-slate-900 mt-2 mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Integrated support across the full legal lifecycle
              </h2>
              <div className="space-y-3">
                {whyRNK.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                    <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
                    <p className="text-slate-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/practices"
                  className="btn-shimmer text-white font-semibold px-6 py-3 rounded-xl text-sm"
                >
                  Our Practice Areas
                </a>
                <a
                  href="/contact"
                  className="border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Representative clients */}
            <div
              className="rounded-3xl overflow-hidden shadow-xl"
              style={{ background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)" }}
            >
              <div
                className="h-1"
                style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }}
              />
              <div className="p-8">
                <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-4">
                  Representative Clients
                </p>
                <h3
                  className="text-white text-xl font-black mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Trusted by institutions &amp; enterprises
                </h3>
                <div className="space-y-2.5">
                  {representativeClients.map((c) => (
                    <div key={c} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-slate-500 text-xs italic">
                    The firm&apos;s client base reflects work across premier educational
                    institutions, research-led ecosystems and private enterprises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
