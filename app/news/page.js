import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionLabel from "../components/SectionLabel";

export const metadata = {
  title: "News & Insights – RNK Legalheads LLP",
  description: "Legal updates, articles, newsletters and event news from RNK Legalheads LLP.",
};

const categories = [
  { label: "Articles",       icon: "📄", desc: "In-depth analysis on IP law, policy developments and landmark decisions." },
  { label: "Legal Updates",  icon: "📰", desc: "Summaries of recent amendments, rules, notifications and official circulars." },
  { label: "Newsletters",    icon: "📬", desc: "Periodic newsletters covering IP trends, portfolio insights and firm news." },
  { label: "Events",         icon: "📅", desc: "Seminars, webinars, workshops and speaking engagements by the RNK team." },
];

export default function NewsPage() {
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
            <SectionLabel light>News &amp; Insights</SectionLabel>
            <h1
              className="text-4xl md:text-6xl font-black text-white mt-2 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Stay Informed
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Articles, legal updates, newsletters and event announcements from
              the RNK Legalheads LLP team.
            </p>
          </div>
        </section>

        {/* ── Category Cards ── */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-4xl mb-4 block">{c.icon}</span>
                  <h3 className="font-bold text-slate-900 mb-2">{c.label}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* Coming soon panel */}
            <div
              className="rounded-3xl overflow-hidden shadow-xl text-center"
              style={{ background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)" }}
            >
              <div className="h-1" style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }} />
              <div className="px-6 py-20">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">Coming Soon</span>
                </div>
                <h2
                  className="text-3xl md:text-4xl font-black text-white mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  News &amp; Insights launching shortly
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
                  We are building out this section with articles, legal updates, newsletters
                  and event coverage. Check back soon, or sign up to be notified when
                  content is published.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-7 py-3.5 rounded-xl transition-all text-sm"
                >
                  Notify me when live
                </a>
              </div>
              <div className="h-0.5" style={{ background: "linear-gradient(90deg, transparent, #d97706, transparent)" }} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
