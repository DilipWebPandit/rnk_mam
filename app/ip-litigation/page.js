import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "IP Litigation & Dispute Resolution – RNK Legalheads LLP",
  description:
    "IP enforcement and dispute resolution — infringement, passing off, oppositions, rectifications, revocations, customs enforcement and commercial litigation.",
};

const litigationAreas = [
  {
    icon: "⚖️",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    title: "Patent Infringement",
    desc: "Enforcement of patent rights and defence against infringement actions — including interim injunctions, damages and account of profits before the High Courts and District Courts.",
    points: [
      "Pre-suit infringement analysis and claim mapping",
      "Cease and desist notices",
      "Interim and permanent injunction applications",
      "Damages and account of profits claims",
      "Defence against infringement suits",
    ],
  },
  {
    icon: "🏷️",
    color: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    border: "border-rose-100",
    title: "Trade Mark Infringement & Passing Off",
    desc: "Protection of registered and unregistered trade mark rights against imitation, counterfeiting and deceptive similarity — including passing off actions for unregistered marks.",
    points: [
      "Trade mark infringement suits",
      "Passing off actions for unregistered marks",
      "Interim injunctions and ex parte orders",
      "Counterfeit goods enforcement",
      "Domain name dispute support",
    ],
  },
  {
    icon: "©️",
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    title: "Copyright Disputes",
    desc: "Enforcement of copyright in literary, artistic, software, media and digital works — and defence against copyright claims.",
    points: [
      "Copyright infringement suits",
      "Interim relief and injunctions",
      "Online and digital content enforcement",
      "Takedown notices and platform enforcement",
      "Defence advisory in copyright proceedings",
    ],
  },
  {
    icon: "📋",
    color: "from-indigo-600 to-blue-800",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    title: "Pre-Grant & Post-Grant Oppositions",
    desc: "Filing and defending patent oppositions before the Indian Patent Office — both pre-grant under Section 25(1) and post-grant under Section 25(2) of the Patents Act 1970.",
    points: [
      "Pre-grant opposition filings and responses",
      "Post-grant opposition proceedings",
      "Evidence preparation and affidavits",
      "Oral hearing representation",
      "Opposition against third-party patents",
    ],
  },
  {
    icon: "🔄",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    title: "Trade Mark Oppositions & Rectifications",
    desc: "Filing and contesting trade mark oppositions before the Trade Marks Registry, and rectification/cancellation petitions before the Intellectual Property Division of the High Courts.",
    points: [
      "Trade mark opposition filings",
      "Counter-statement preparation",
      "Evidence by way of affidavit",
      "Rectification petitions under Section 57",
      "Cancellation proceedings before IP Division",
    ],
  },
  {
    icon: "🗑️",
    color: "from-slate-600 to-slate-800",
    bg: "bg-slate-50",
    border: "border-slate-200",
    title: "Revocation & Invalidation",
    desc: "Petitions for revocation of patents and invalidation of design registrations where third-party rights pose a freedom-to-operate risk or have been obtained improperly.",
    points: [
      "Revocation petitions under Section 64 of the Patents Act",
      "Freedom-to-operate analysis",
      "Design registration cancellation",
      "Prior art research and evidence compilation",
      "Revocation defence for patent holders",
    ],
  },
  {
    icon: "🛃",
    color: "from-emerald-600 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    title: "Customs & Border Enforcement",
    desc: "Recordal of IP rights with Indian Customs under the Intellectual Property Rights (Imported Goods) Enforcement Rules, 2007 to intercept infringing imports at the border.",
    points: [
      "Customs recordal of trade marks and patents",
      "Border seizure and detention support",
      "Liaison with Customs authorities",
      "Disposal of seized infringing goods",
      "Right holder notifications and sample requests",
    ],
  },
  {
    icon: "🚫",
    color: "from-red-600 to-rose-700",
    bg: "bg-red-50",
    border: "border-red-100",
    title: "Enforcement & Anti-Counterfeiting",
    desc: "Coordinated enforcement campaigns against counterfeiters — working with law enforcement, investigators and brand protection agencies.",
    points: [
      "Cease and desist strategy",
      "Coordinated raids with law enforcement",
      "Criminal complaints under IPC and IP statutes",
      "Online marketplace takedowns",
      "Anti-counterfeiting programme design",
    ],
  },
  {
    icon: "📝",
    color: "from-teal-600 to-cyan-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    title: "Commercial & Contractual Disputes",
    desc: "Representation and advisory in commercial disputes arising from contracts, technology transactions, licensing arrangements and business relationships.",
    points: [
      "Legal notices and reply strategy",
      "Contractual dispute assessment",
      "Recovery matters and injunction proceedings",
      "Settlement negotiation and documentation",
      "Commercial litigation support",
    ],
  },
];

export default function IPLitigationPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden py-24"
          style={{ background: "linear-gradient(160deg, #1a0a00 0%, #3b1010 40%, #4a1a0a 100%)" }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{ background: "rgba(220,38,38,0.12)" }} />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl"
              style={{ background: "rgba(217,119,6,0.1)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <SectionLabel light>Dispute Resolution &amp; Litigation</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Strategic Dispute Management
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Focused on early assessment, evidence strategy, legal positioning, pleadings,
              interim relief, settlement evaluation and effective representation.
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-16 bg-white border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-slate-600 text-lg leading-relaxed">
              RNK Legalheads LLP represents and advises clients in civil, commercial and intellectual
              property disputes. Registered IP rights are only as valuable as your ability to enforce
              them. The firm advises right holders on enforcement strategy and assists accused parties
              in building robust defences. Where litigation becomes necessary, the firm assists clients
              with focused strategy, preparation of pleadings, evidence coordination and court
              proceedings — while placing emphasis on commercially sensible resolution wherever possible.
            </p>
          </div>
        </section>

        {/* ── Litigation Areas ── */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {litigationAreas.map((area) => (
              <div
                key={area.title}
                className={`rounded-3xl border ${area.bg} ${area.border} p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${area.color} flex items-center justify-center text-xl shadow-md mb-4 shrink-0`}>
                  {area.icon}
                </div>
                <h2 className="text-lg font-black text-slate-900 mb-2">{area.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 flex-1">{area.desc}</p>
                <div className="space-y-1.5 pt-4 border-t border-black/5">
                  {area.points.map((pt) => (
                    <div key={pt} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-linear-to-r ${area.color} shrink-0`} />
                      {pt}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }}
        >
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Facing a dispute? Early advice matters.
            </h2>
            <p className="text-slate-400 mb-8">
              Contact RNK to discuss your enforcement or defence requirements. Early assessment
              and strategy can determine the outcome of a matter.
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
