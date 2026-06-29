import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "Careers – RNK Legalheads LLP",
  description: "Join the RNK Legalheads LLP team. Career opportunities in IP law, patent drafting, prosecution and commercial practice.",
};

const values = [
  { icon: "🎓", title: "Learning First",    desc: "Work on technically complex matters across communication, AI, pharma and engineering from early in your career." },
  { icon: "🤝", title: "Collaborative",     desc: "A close-knit team where every member contributes directly to client outcomes and matter strategy." },
  { icon: "📈", title: "Growth Oriented",   desc: "Clear progression paths across prosecution, litigation and commercial practice areas." },
  { icon: "⚖️", title: "Ethically Grounded", desc: "A practice built on trust, transparency and professional integrity at every level." },
];

const roles = [
  { title: "Patent Associate",           type: "Full-time",   area: "Patent Prosecution" },
  { title: "Trade Mark Associate",       type: "Full-time",   area: "Trade Marks" },
  { title: "Patent Draftsman / Agent",   type: "Full-time",   area: "Patent Drafting" },
  { title: "IP Litigation Associate",    type: "Full-time",   area: "IP Litigation" },
  { title: "Commercial Legal Associate", type: "Full-time",   area: "Commercial Matters" },
  { title: "Legal Intern",              type: "Internship",  area: "All Practice Areas" },
];

export default function CareersPage() {
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
              style={{ background: "rgba(37,99,235,0.12)" }} />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <SectionLabel light>Careers</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Join RNK Legalheads LLP
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              We are always looking for talented legal professionals and patent practitioners
              who are committed to delivering excellent, technically informed IP advice.
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Why RNK</SectionLabel>
              <h2 className="text-3xl font-black text-slate-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                What makes RNK a great place to practise
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Open Roles ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <SectionLabel>Open Positions</SectionLabel>
              <h2 className="text-3xl font-black text-slate-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Current Openings
              </h2>
              <p className="text-slate-500 mt-3">
                Positions are filled on a rolling basis. Send your CV to express interest.
              </p>
            </div>
            <div className="space-y-3">
              {roles.map((r) => (
                <div
                  key={r.title}
                  className="bg-white rounded-2xl border border-slate-100 px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-200 hover:shadow-sm transition-all"
                >
                  <div>
                    <p className="font-bold text-slate-900">{r.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{r.area}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                      {r.type}
                    </span>
                    <a
                      href={`mailto:contact@rnklegalheads.com?subject=Application – ${r.title}`}
                      className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      Apply →
                    </a>
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
            <h2 className="text-3xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Don&apos;t see a role that fits?
            </h2>
            <p className="text-slate-400 mb-8">
              Send us your CV and a brief note on the kind of work you are looking for.
              We review all applications carefully.
            </p>
            <a
              href="mailto:contact@rnklegalheads.com?subject=Speculative Application – RNK Legalheads LLP"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-2xl transition-all"
            >
              Send Your CV
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
