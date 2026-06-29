import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "IP Prosecution – RNK Legalheads LLP",
  description:
    "Patents, designs, trade marks and copyright filing, prosecution and portfolio management by RNK Legalheads LLP.",
};

const stats = [
  { value: "≈ 1,400", label: "Total patents filed" },
  { value: "980",     label: "Patents filed in FY 2025–26" },
  { value: "193",     label: "Matters prosecuted to hearing" },
  { value: "≈ 93%",  label: "Grant conversion rate" },
];

const services = [
  {
    id: "patents",
    icon: "🔬",
    color: "from-blue-600 to-indigo-600",
    bg: "from-blue-900 to-indigo-900",
    title: "Patents",
    subtitle: "End-to-end patent lifecycle",
    intro:
      "RNK Legalheads LLP advises clients across the patent lifecycle, beginning from invention identification and patentability assessment to drafting, filing, prosecution, hearing representation and post-filing strategy. The firm has experience in handling patent matters across diverse technical areas, including engineering, communication technologies, electronics, software, artificial intelligence, applied sciences, pharmaceuticals, biotechnology and healthcare-related innovations. In addition to filing and prosecution, the firm advises on ownership, inventorship, assignment, licensing, patent due diligence, portfolio management and enforcement strategy — allowing clients to protect technical innovation not only as a legal right, but also as a commercial asset.",
    items: [
      { heading: "Invention Identification & Patentability", desc: "Invention capture sessions, prior art searches and patentability opinions to support strategic filing decisions." },
      { heading: "Drafting & Specification", desc: "Preparation of provisional and complete specifications across all technology domains — engineering, AI, communication, pharma, materials and more." },
      { heading: "Filing", desc: "Provisional, complete, PCT (national phase and international), convention and divisional applications before the Indian Patent Office." },
      { heading: "Prosecution", desc: "FER and SER responses, hearing briefs, arguments before the Controller — focused on obtaining substantive claim scope." },
      { heading: "Ownership & Inventorship Advisory", desc: "Structuring ownership arrangements, joint inventor agreements and assignment documentation." },
      { heading: "Grant & Post-Grant", desc: "Grant follow-through, certificate coordination, annuity and renewal management." },
      { heading: "Patent Due Diligence", desc: "Portfolio review for investors, acquirers and licensing counterparties." },
      { heading: "Enforcement Strategy", desc: "Infringement analysis, freedom-to-operate review and pre-litigation advisory." },
    ],
  },
  {
    id: "commercialisation",
    icon: "💼",
    color: "from-amber-500 to-orange-500",
    bg: "from-amber-900 to-orange-900",
    title: "Patent Commercialisation & Technology Transfer",
    subtitle: "Turning innovation into commercial value",
    intro:
      "A patent creates value when it is supported by an effective commercial and legal framework. RNK Legalheads LLP assists inventors, companies, universities, research organisations and technology-driven businesses in structuring arrangements for the commercial use of patented technologies and technical know-how. The objective is to help clients preserve ownership, define commercial rights clearly and enable lawful and commercially viable use of innovation.",
    items: [
      { heading: "Technology Transfer", desc: "Structuring and documenting technology transfer arrangements between institutions, companies and licensees." },
      { heading: "Patent Licensing", desc: "Exclusive and non-exclusive licence agreements, field-of-use restrictions, royalty structures and sub-licensing terms." },
      { heading: "Assignment Agreements", desc: "Full and partial patent assignment documentation with appropriate warranties and representations." },
      { heading: "Research Collaborations", desc: "Joint development agreements, sponsored research documentation and IP ownership structuring for collaborative projects." },
      { heading: "Industry Partnerships", desc: "Documentation for industry-academia partnerships, incubator arrangements and startup spin-outs." },
      { heading: "Investor-Facing IP Review", desc: "IP summaries, ownership confirmation and portfolio structuring for fundraising and due diligence." },
    ],
  },
  {
    id: "trademarks",
    icon: "™️",
    color: "from-rose-500 to-red-600",
    bg: "from-rose-900 to-red-900",
    title: "Trade Marks",
    subtitle: "Brand protection & registration",
    intro:
      "A trademark represents the identity, reputation and goodwill of a business. RNK Legalheads LLP advises clients on brand adoption, clearance, registration, prosecution, enforcement and portfolio management. The firm also advises businesses on brand protection strategy, lawful use of marks, house marks, product marks, logos, trade dress and long-term portfolio management.",
    items: [
      { heading: "Search & Clearance", desc: "Identical and phonetically similar mark searches across the Trade Marks Registry database and common law sources." },
      { heading: "Application Filing", desc: "Filing individual and multi-class applications for goods, services, certification and collective marks." },
      { heading: "Prosecution", desc: "Examination reports, show-cause hearings and arguments before the Trade Marks Registry." },
      { heading: "Oppositions & Rectifications", desc: "Filing and defending oppositions, rectification petitions and cancellation actions." },
      { heading: "Renewals & Portfolio", desc: "Timely renewal management, assignment recordal and portfolio coordination." },
      { heading: "Infringement & Passing Off", desc: "Enforcement advisory, notices, court proceedings and passing off actions for unregistered marks." },
      { heading: "Brand Strategy", desc: "House marks, product marks, trade dress protection strategy and domain name advisory." },
    ],
  },
  {
    id: "designs",
    icon: "✏️",
    color: "from-violet-600 to-purple-600",
    bg: "from-violet-900 to-purple-900",
    title: "Designs",
    subtitle: "Industrial design registration",
    intro:
      "Product appearance can be a valuable commercial asset. RNK Legalheads LLP advises clients on protecting product shape, configuration, pattern, ornamentation and other visual features eligible for statutory design protection. The firm advises manufacturers, designers, startups, product developers and institutions on design piracy, infringement risk and protection strategies.",
    items: [
      { heading: "Registrability Assessment", desc: "Review for novelty and registrability before committing to filing." },
      { heading: "Application Preparation & Filing", desc: "Preparation of design representations and filing before the Patent Office (Design Wing)." },
      { heading: "Prosecution", desc: "Examination response and objection handling." },
      { heading: "Enforcement", desc: "Design infringement analysis, enforcement advisory and litigation support." },
      { heading: "Renewals & Portfolio", desc: "Timely renewal management and multi-design portfolio coordination." },
    ],
  },
  {
    id: "copyright",
    icon: "©️",
    color: "from-emerald-600 to-teal-500",
    bg: "from-emerald-900 to-teal-900",
    title: "Copyright",
    subtitle: "Registration, licensing & enforcement",
    intro:
      "RNK Legalheads LLP advises clients on copyright protection, ownership, licensing and enforcement. The firm assists authors, artists, designers, publishers, software developers, content creators, production houses, educational institutions and digital businesses. The practice covers copyright issues relating to software, academic content, publications, photographs, artistic works, commissioned works and digital media.",
    items: [
      { heading: "Registration", desc: "Copyright registration for original works across all categories including software and databases." },
      { heading: "Assignment & Licensing", desc: "Assignment agreements and exclusive/non-exclusive licence agreements with royalty structuring." },
      { heading: "Publishing & Media Agreements", desc: "Publishing agreements, digital content licences and media contracts." },
      { heading: "Software Copyright", desc: "Software ownership, work-for-hire structuring and software licence agreements." },
      { heading: "Infringement & Enforcement", desc: "Infringement risk review, notices, takedown procedures and litigation support." },
      { heading: "Ownership Advisory", desc: "Structuring commissioned works, employment IP clauses and copyright ownership for institutions." },
    ],
  },
  {
    id: "portfolio",
    icon: "📊",
    color: "from-slate-600 to-slate-800",
    bg: "from-slate-800 to-slate-900",
    title: "Portfolio Management",
    subtitle: "Lifecycle management at scale",
    intro:
      "Dedicated portfolio management for institutions, research bodies and enterprises managing multi-right or multi-jurisdiction IP portfolios. RNK provides structured coordination across filings, renewals, assignments and commercial transactions.",
    items: [
      { heading: "Audit & Review", desc: "Structured portfolio audits to identify gaps, overlaps and commercial opportunities." },
      { heading: "Maintenance Coordination", desc: "Annuity and renewal tracking to prevent accidental lapse of rights." },
      { heading: "Commercialisation Support", desc: "Assignment, licensing and technology transfer documentation." },
      { heading: "Institutional IP Programmes", desc: "Faculty invention management, student IP policies and incubator IP coordination." },
      { heading: "Docketing & Reporting", desc: "Status reporting, deadline tracking and matter dashboards for in-house legal teams." },
    ],
  },
];

export default function IPProsecutionPage() {
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
              style={{ background: "rgba(37,99,235,0.15)" }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
              style={{ background: "rgba(217,119,6,0.1)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <SectionLabel light>IP Prosecution</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Protecting Innovation,<br />Brands &amp; Creative Assets
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Substantive execution across patents, designs, trade marks and copyright —
              from first filing through to grant, commercialisation and enforcement.
            </p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="text-4xl font-black text-blue-800 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.value}
                </p>
                <div className="w-8 h-0.5 bg-amber-400 rounded-full mx-auto mb-2" />
                <p className="text-slate-500 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── IP Overview ── */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <SectionLabel>Intellectual Property Practice</SectionLabel>
            <h2 className="text-2xl font-black text-slate-900 mt-2 mb-5"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Not confined to filing and registration
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Intellectual Property is the flagship practice of RNK Legalheads LLP. The firm advises clients
              on the identification, protection, management, commercialisation and enforcement of intellectual
              property rights. The practice represents innovators, startups, companies, universities, research
              institutions, manufacturers, designers, software developers, content creators and commercial
              enterprises. RNK assists clients in developing protection strategies, managing prosecution,
              structuring ownership, negotiating commercial use of IP and enforcing rights where required.
            </p>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-12 pb-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 space-y-8">
            {services.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <div className={`bg-linear-to-br ${svc.bg} px-6 sm:px-8 py-6 flex items-center gap-4`}>
                  <span className="text-3xl">{svc.icon}</span>
                  <div>
                    <p className="text-white font-black text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {svc.title}
                    </p>
                    <p className="text-white/60 text-sm">{svc.subtitle}</p>
                  </div>
                </div>
                <div className="px-6 sm:px-8 py-7">
                  <p className="text-slate-500 leading-relaxed mb-7 text-sm">{svc.intro}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {svc.items.map((item) => (
                      <div key={item.heading} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                        <span className={`mt-1 w-2 h-2 rounded-full bg-linear-to-r ${svc.color} shrink-0`} />
                        <div>
                          <p className="font-semibold text-slate-800 text-sm mb-0.5">{item.heading}</p>
                          <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to file or discuss your IP?
            </h2>
            <p className="text-slate-500 mb-8">
              Contact RNK to discuss your patent, design, trade mark or copyright requirements.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 btn-shimmer text-white font-bold px-8 py-4 rounded-2xl">
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
