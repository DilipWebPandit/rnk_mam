import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "Practices – RNK Legalheads LLP",
  description:
    "Full-spectrum legal services across intellectual property, corporate & commercial advisory, dispute resolution, real estate, employment and regulatory matters.",
};

const practices = [
  {
    color: "from-blue-600 to-indigo-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "IP Prosecution",
    title: "Patents",
    href: "/ip-prosecution#patents",
    icon: "🔬",
    summary:
      "End-to-end patent lifecycle — from invention identification and patentability assessment to drafting, filing, prosecution, hearing representation and portfolio management. Experience across engineering, AI, pharma, electronics, materials science and interdisciplinary domains.",
    services: [
      "Invention capture and patentability opinion",
      "Prior art search and freedom-to-operate",
      "Provisional and complete specification drafting",
      "PCT, convention and divisional applications",
      "FER / SER responses and hearing representation",
      "Ownership, inventorship and assignment advisory",
      "Annuity, renewal and portfolio management",
      "Patent due diligence for investors and acquirers",
    ],
  },
  {
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    tag: "IP Commercialisation",
    title: "Patent Commercialisation & Technology Transfer",
    href: "/ip-prosecution#commercialisation",
    icon: "💼",
    summary:
      "Structuring commercial and legal frameworks for patented technologies and technical know-how — helping inventors, companies, universities and research organisations turn innovation into commercial value while preserving ownership rights.",
    services: [
      "Technology transfer agreements",
      "Exclusive and non-exclusive patent licences",
      "Assignment documentation with warranties",
      "Joint development and sponsored research agreements",
      "Industry-academia and incubator arrangements",
      "Startup spin-out IP structuring",
      "Investor-facing IP review and summaries",
      "Royalty structuring and sub-licensing terms",
    ],
  },
  {
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    tag: "IP Prosecution",
    title: "Trade Marks",
    href: "/ip-prosecution#trademarks",
    icon: "™️",
    summary:
      "Comprehensive brand protection from adoption and clearance through registration, prosecution, portfolio management and enforcement — covering goods, services, logos, trade dress and certification marks.",
    services: [
      "Trade mark search and clearance",
      "Single and multi-class application filing",
      "Examination report responses and hearings",
      "Oppositions, counter-statements and rectifications",
      "Portfolio management, renewals and assignment",
      "Infringement and passing off enforcement",
      "Domain name advisory and brand watch",
      "House mark and trade dress strategy",
    ],
  },
  {
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    tag: "IP Prosecution",
    title: "Designs",
    href: "/ip-prosecution#designs",
    icon: "✏️",
    summary:
      "Protection of product shape, configuration, pattern and ornamentation under the Designs Act 2000 — advising manufacturers, designers, startups and product developers on design protection and enforcement.",
    services: [
      "Registrability assessment for novelty",
      "Design application preparation and filing",
      "Prosecution and examination response",
      "Design infringement analysis and advisory",
      "Renewals and multi-design portfolio management",
      "Piracy and enforcement support",
    ],
  },
  {
    color: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    tag: "IP Prosecution",
    title: "Copyright",
    href: "/ip-prosecution#copyright",
    icon: "©️",
    summary:
      "Copyright registration, ownership advisory, licensing and enforcement for authors, artists, designers, publishers, software developers, content creators, institutions and digital businesses.",
    services: [
      "Registration across all copyright categories",
      "Assignment and licensing agreements",
      "Publishing, media and digital content contracts",
      "Software copyright and work-for-hire structuring",
      "Institutional copyright ownership advisory",
      "Infringement notices and takedown procedures",
    ],
  },
  {
    color: "from-sky-600 to-blue-700",
    bg: "bg-sky-50",
    border: "border-sky-100",
    tag: "Advisory & Drafting",
    title: "Corporate & Commercial Advisory",
    href: "/contact",
    icon: "📑",
    summary:
      "Advising businesses on commercial agreements, corporate transactions and contractual risk — from contract drafting and vetting to structuring business arrangements, joint ventures and corporate documentation.",
    services: [
      "Business contracts and commercial agreements",
      "Non-disclosure and confidentiality agreements",
      "Shareholder and partnership arrangements",
      "Joint ventures and collaboration documentation",
      "Sale/purchase agreement review and negotiation",
      "Company secretarial and statutory advisory",
      "Due diligence support",
      "Agreement vetting and risk advisory",
    ],
  },
  {
    color: "from-cyan-600 to-teal-600",
    bg: "bg-cyan-50",
    border: "border-cyan-100",
    tag: "Sector Practice",
    title: "Technology, Media & Communication",
    href: "/contact",
    icon: "💻",
    summary:
      "Legal support for technology businesses, media companies, digital platforms and communication sector entities — covering contracts, IP, data protection, regulatory compliance and dispute advisory.",
    services: [
      "Software and SaaS licence agreements",
      "Technology services and outsourcing contracts",
      "Data licensing and API agreements",
      "Digital content and media rights",
      "IT vendor and procurement contracts",
      "Privacy and data protection advisory",
      "Platform terms of service and user policies",
      "Telecom and spectrum regulatory advisory",
    ],
  },
  {
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    tag: "Litigation",
    title: "Dispute Resolution & Litigation",
    href: "/ip-litigation",
    icon: "⚖️",
    summary:
      "Representation and advisory in civil, commercial and IP disputes — focused on early assessment, evidence strategy, interim relief, settlement evaluation and court proceedings.",
    services: [
      "IP infringement and passing off actions",
      "Pre-grant and post-grant patent oppositions",
      "Trade mark oppositions and rectifications",
      "Revocation and cancellation proceedings",
      "Customs and border enforcement",
      "Anti-counterfeiting and raids",
      "Commercial and contractual disputes",
      "Interim injunctions and ex parte orders",
    ],
  },
  {
    color: "from-green-600 to-emerald-700",
    bg: "bg-green-50",
    border: "border-green-100",
    tag: "Property & Family",
    title: "Real Estate, Property & Succession",
    href: "/contact",
    icon: "🏢",
    summary:
      "Advisory and documentation support for property transactions, land title matters, conveyancing, succession planning and family property arrangements.",
    services: [
      "Sale deed, gift deed and conveyancing documents",
      "Title investigation and due diligence",
      "Lease and leave & licence agreements",
      "Property development documentation",
      "Will drafting and probate advisory",
      "Succession planning and family settlement",
      "Ancestral and joint family property advisory",
      "NRI property transaction support",
    ],
  },
  {
    color: "from-indigo-500 to-blue-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    tag: "Employment",
    title: "Employment Law",
    href: "/contact",
    icon: "👔",
    summary:
      "Employment contracts, workplace policies, HR documentation and employment dispute advisory for businesses — ensuring compliant and clearly structured workforce arrangements.",
    services: [
      "Employment contracts and offer letters",
      "HR policy drafting and handbooks",
      "Non-compete and confidentiality clauses",
      "POSH compliance advisory and policy",
      "Termination and severance advisory",
      "Employment dispute assessment",
      "Contractor and consultant agreements",
      "Labour law compliance advisory",
    ],
  },
  {
    color: "from-orange-500 to-red-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    tag: "Consumer",
    title: "Consumer Protection",
    href: "/contact",
    icon: "🛡️",
    summary:
      "Advisory and representation in consumer disputes, product liability matters and complaints before Consumer Commissions — for both businesses and individual consumers.",
    services: [
      "Consumer complaint drafting and filing",
      "Representation before District and State Commissions",
      "Product liability and defective goods advisory",
      "Deficiency of service claims",
      "E-commerce and online consumer disputes",
      "Unfair trade practice advisory",
      "Consumer dispute mediation support",
      "Business-side defence advisory",
    ],
  },
  {
    color: "from-teal-600 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    tag: "Regulatory",
    title: "Regulatory Advisory & Compliance",
    href: "/contact",
    icon: "📋",
    summary:
      "Helping businesses navigate regulatory frameworks, licensing requirements and compliance obligations across sectors — from startup incorporation to ongoing regulatory coordination.",
    services: [
      "Regulatory licences and registrations",
      "FSSAI, BIS and sector-specific compliance",
      "Startup legal structuring advisory",
      "Import-export and trade compliance",
      "Data protection and privacy compliance",
      "Government contract and tendering advisory",
      "Compliance calendar and audit support",
      "Regulatory correspondence and liaison",
    ],
  },
  {
    color: "from-blue-800 to-indigo-900",
    bg: "bg-blue-50",
    border: "border-blue-200",
    tag: "Institutional",
    title: "Institutional & In-House Legal Support",
    href: "/contact",
    icon: "🏛️",
    summary:
      "Structured legal support for universities, research institutions and businesses requiring recurring legal assistance — operating as an external legal function with coordinated matter management.",
    services: [
      "IP policy and procedure drafting",
      "Technology transfer office support",
      "Faculty and student invention management",
      "Institutional contracts and MOUs",
      "In-house legal function outsourcing",
      "Docketing, status reporting and dashboards",
      "Legal training and awareness sessions",
      "Recurring retainer-based legal coordination",
    ],
  },
];

export default function PracticesPage() {
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
            <SectionLabel light>Practice Areas</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Full-Spectrum Legal Support
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Intellectual Property at the core — supported by corporate &amp; commercial,
              dispute resolution, real estate, employment, consumer, regulatory and
              institutional legal capabilities.
            </p>
          </div>
        </section>

        {/* ── Practice Cards ── */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 space-y-6">
            {practices.map((p) => (
              <div
                key={p.title}
                className={`rounded-3xl border ${p.bg} ${p.border} overflow-hidden`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    {/* Icon + tag */}
                    <div className="shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${p.color} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {p.icon}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className={`text-xs font-bold tracking-widest uppercase bg-linear-to-r ${p.color} text-transparent bg-clip-text`}>
                          {p.tag}
                        </span>
                      </div>
                      <h2 className="text-2xl font-black text-slate-900 mb-2">{p.title}</h2>
                      <p className="text-slate-500 mb-5 leading-relaxed">{p.summary}</p>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                        {p.services.map((s) => (
                          <div key={s} className="flex items-start gap-2 text-sm text-slate-600">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-linear-to-r ${p.color} shrink-0`} />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* CTA */}
                    <div className="shrink-0">
                      <a
                        href={p.href}
                        className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-linear-to-r ${p.color} shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
                      >
                        Learn more →
                      </a>
                    </div>
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
              Not sure which service you need?
            </h2>
            <p className="text-slate-500 mb-8">
              Speak with our team and we will help identify the right approach for your matter.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 btn-shimmer text-white font-bold px-8 py-4 rounded-2xl"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
