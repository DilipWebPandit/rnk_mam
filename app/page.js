import Logo from "./components/Logo";
import StatCard from "./components/StatCard";
import SectionLabel from "./components/SectionLabel";

/* ── inline SVG icons ── */
const Icon = {
  Patent: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.955 11.955 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  ),
  Design: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
      />
    </svg>
  ),
  Trademark: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L9.568 3Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 6h.008v.008H6V6Z"
      />
    </svg>
  ),
  Commercial: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  Comm: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  ),
  AI: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
      />
    </svg>
  ),
  Science: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-7 h-7"
      stroke="currentColor"
      strokeWidth={1.6}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M5 14.5l-1.402 1.402c-1.232 1.232-.65 3.318 1.067 3.611A48.309 48.309 0 0 0 12 21c2.773 0 5.491-.235 8.135-.687 1.718-.293 2.3-2.379 1.067-3.61L19.8 15.3M5 14.5l6.23-.693M19.8 15.3l-6.23-.693m0 0V9.75"
      />
    </svg>
  ),
  Check: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5 shrink-0"
      stroke="currentColor"
      strokeWidth={2.2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Arrow: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  Mail: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  ),
  Phone: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z"
      />
    </svg>
  ),
  Location: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  ),
};

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
function Navbar() {
  const links = [
    { label: "Summary", href: "#executive" },
    { label: "Practice", href: "#practice" },
    { label: "Technology", href: "#technology" },
    { label: "Prosecution", href: "#prosecution" },
    { label: "Clients", href: "#clients" },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-slate-600 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:contact@rnklegalheads.com"
            className="ml-3 btn-shimmer text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2"
          >
            <Icon.Mail /> Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════
   HERO
══════════════════════════════════════════ */
function Hero() {
  const stats = [
    {
      value: "980",
      label: "Patents filed in FY 2025-2026",
      delay: "delay-200",
    },
    {
      value: "≈ 1,400",
      label: "Total patents filed by RNK Legalheads LLP",
      delay: "delay-300",
    },
    {
      value: "≈ 180",
      label: "Granted patents through RNK practice",
      delay: "delay-400",
    },
    {
      value: "≈ 93%",
      label: "Grant conversion from 193 hearing-completed matters",
      delay: "delay-500",
    },
  ];

  const heroBg = {
    background:
      "radial-gradient(ellipse 80% 60% at 15% 40%, rgba(37,99,235,0.25) 0%, transparent 60%)," +
      "radial-gradient(ellipse 60% 50% at 85% 60%, rgba(217,119,6,0.18) 0%, transparent 55%)," +
      "linear-gradient(155deg, #060e24 0%, #0b1f4a 45%, #0e2a6a 100%)",
  };

  const glassNote = {
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  const ribbonStyle = {
    background: "rgba(255,255,255,0.04)",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
  };

  const badgeStyle = {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.18)",
  };

  return (
    <section
      style={heroBg}
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
    >
      {/* Decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.04)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1050px] h-[1050px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(255,255,255,0.025)" }}
      />

      {/* Glow blobs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "rgba(37,99,235,0.12)", filter: "blur(80px)" }}
      />
      <div
        className="absolute -bottom-10 -right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(217,119,6,0.1)", filter: "blur(70px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* ── LEFT ── */}
        <div>
          {/* Badge */}
          <div
            style={badgeStyle}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 animate-fade-in"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">
              Proposal for Eva Ad Ventures Pvt. Ltd.
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up mb-2">
            <span
              className="block text-5xl lg:text-6xl font-black text-white leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: "0 2px 30px rgba(37,99,235,0.3)",
              }}
            >
              Proposal &amp;
            </span>
            <span
              className="block text-5xl lg:text-6xl font-black leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Practice Profile
              </span>
            </span>
          </h1>

          {/* Sub-heading */}
          <p className="text-slate-400 text-base mt-6 mb-3 animate-fade-up delay-100 tracking-wide">
            Patent, Design, Trademark and Commercial Legal Support
          </p>

          {/* Tagline */}
          <p
            className="text-lg font-bold text-amber-400 mb-8 animate-fade-up delay-200 italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;Built on Trust, Driven by Commitment.&rdquo;
          </p>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed max-w-lg mb-10 animate-fade-up delay-300">
            RNK Legalheads LLP advises on patents, designs, trademarks, and
            allied commercial matters — offering Eva Ad Ventures a single
            coordinated legal interface for full IP lifecycle support.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
            <a
              href="#executive"
              style={{
                background:
                  "linear-gradient(90deg, #1a3570 0%, #2563eb 50%, #1a3570 100%)",
                backgroundSize: "200% auto",
                boxShadow: "0 8px 24px rgba(37,99,235,0.35)",
              }}
              className="text-white font-semibold px-7 py-3.5 rounded-xl flex items-center gap-2 transition-all duration-300 hover:shadow-lg"
            >
              Explore Proposal <Icon.Arrow />
            </a>
            <a
              href="mailto:contact@rnklegalheads.com"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
              className="text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/10"
            >
              Get in Touch
            </a>
          </div>

          {/* Meta */}
          <div
            className="mt-10 pt-8 animate-fade-up delay-500"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-slate-400 text-sm">
              <span className="text-white font-semibold">
                Financial Year 2025-2026
              </span>
              &nbsp;·&nbsp; Prepared by RNK Legalheads LLP &nbsp;·&nbsp; April
              2026
            </p>
          </div>
        </div>

        {/* ── RIGHT – stat grid ── */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <StatCard
              key={s.value}
              value={s.value}
              label={s.label}
              delay={s.delay}
            />
          ))}
          <div
            style={glassNote}
            className="col-span-2 rounded-2xl px-5 py-3 animate-fade-up delay-500"
          >
            <p className="text-slate-400 text-xs italic text-center">
              Figures are based on information shared by RNK Legalheads LLP and
              are approximate where indicated.
            </p>
          </div>
        </div>
      </div>

      {/* ── Practice ribbon ── */}
      <div style={ribbonStyle} className="relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-4 justify-center">
          {[
            "Patents",
            "Designs",
            "Trademarks",
            "Commercial Matters",
            "In-House Compliance Support",
          ].map((item, i, arr) => (
            <span key={item} className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-300 tracking-wide">
                {item}
              </span>
              {i < arr.length - 1 && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "rgba(251,191,36,0.5)" }}
                />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   EXECUTIVE SUMMARY
══════════════════════════════════════════ */
function ExecutiveSummary() {
  const pillars = [
    {
      icon: "🎯",
      title: "Single-point interface",
      desc: "One firm for IP creation, protection, prosecution, and support documentation.",
    },
    {
      icon: "⚙️",
      title: "Technically conversant",
      desc: "Experience spanning communication, AI, engineering, pharma, and interdisciplinary work.",
    },
    {
      icon: "📋",
      title: "Commercially practical",
      desc: "Support for agreements, assignments, licensing, review, and compliance-oriented advice.",
    },
  ];

  const distinctions = [
    "High-volume patent filing and prosecution capability.",
    "Strong hearing-stage execution — approx. 180 grants from 193 matters prosecuted through hearing completion.",
    "Approx. 800 patents in communication, AI, and related technology domains.",
    "Capability extending beyond IP filings into commercial documentation and compliance support.",
  ];

  return (
    <section className="bg-white py-24" id="executive">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Executive Summary</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A focused legal partner for
            <br />
            <span className="text-gradient-blue">innovation-led growth</span>
          </h2>
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto text-lg">
            RNK Legalheads LLP combines filing depth, prosecution experience,
            technical breadth, and practical commercial support in one
            coordinated interface.
          </p>
        </div>

        {/* Eva highlight card */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 p-8 md:p-10 mb-14 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.75 bg-amber-400 rounded-full" />
              <p className="text-amber-400 text-sm font-bold tracking-wider uppercase">
                For Eva Ad Ventures Private Limited
              </p>
            </div>
            <p className="text-white text-lg leading-relaxed max-w-3xl">
              RNK can support the{" "}
              <span className="text-amber-300 font-semibold">
                full legal cycle
              </span>{" "}
              around innovation and brand assets — from patent drafting, filing,
              and prosecution to design and trademark protection, commercial
              documentation, and compliance-led support.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Distinguishing points */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-600 rounded-full inline-block" />
              What distinguishes RNK
            </h3>
            <div className="space-y-2">
              {distinctions.map((item, i) => (
                <div key={i} className="distinction-row flex gap-4 p-4">
                  <div className="distinction-dot mt-2 w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0" />
                  <p className="text-slate-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar cards */}
          <div className="space-y-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="pillar-card border border-slate-100 rounded-2xl p-6 bg-white shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="pillar-emoji text-3xl">{p.icon}</span>
                  <div>
                    <p className="font-bold text-slate-900 text-lg mb-1">
                      {p.title}
                    </p>
                    <p className="text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PRACTICE AREAS
══════════════════════════════════════════ */
function PracticeAreas() {
  const areas = [
    {
      Icon: Icon.Patent,
      title: "Patents",
      tag: "Core Service",
      color: "from-blue-600 to-indigo-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
      desc: "Patentability support, drafting, filing, prosecution, FER/SER responses, hearings, grant follow-through, and portfolio management.",
    },
    {
      Icon: Icon.Design,
      title: "Designs",
      tag: "Registration",
      color: "from-violet-600 to-purple-600",
      bg: "bg-violet-50",
      border: "border-violet-100",
      desc: "Design filing, registration strategy, prosecution support, renewals, and portfolio coordination.",
    },
    {
      Icon: Icon.Trademark,
      title: "Trademarks",
      tag: "Brand Protection",
      color: "from-rose-500 to-red-600",
      bg: "bg-rose-50",
      border: "border-rose-100",
      desc: "Brand protection, search and clearance support, filings, examination responses, opposition/cancellation support, and portfolio handling.",
    },
    {
      Icon: Icon.Commercial,
      title: "Commercial & Compliance",
      tag: "Advisory",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      border: "border-amber-100",
      desc: "Commercial matters, NDA and licensing support, assignment documentation, agreement review and vetting, and in-house legal compliance assistance.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50" id="practice">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Practice Areas</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Integrated IP and commercial support
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((a) => (
            <div
              key={a.title}
              className={`practice-card rounded-3xl p-6 border ${a.bg} ${a.border} flex flex-col`}
            >
              <div
                className={`practice-icon w-14 h-14 rounded-2xl bg-linear-to-br ${a.color} flex items-center justify-center text-white mb-5 shadow-lg`}
              >
                <a.Icon />
              </div>
              <div
                className={`text-xs font-bold tracking-widest uppercase mb-2 bg-linear-to-r ${a.color} text-transparent bg-clip-text`}
              >
                {a.tag}
              </div>
              <h3 className="font-black text-slate-900 text-xl mb-3">
                {a.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                {a.desc}
              </p>
              <div
                className={`practice-bar mt-5 h-1 rounded-full bg-linear-to-r ${a.color} opacity-40`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   TECHNOLOGY COVERAGE
══════════════════════════════════════════ */
function TechnologyCoverage() {
  const techs = [
    {
      Icon: Icon.Comm,
      title: "Communication & Electronics",
      stat: "800+ Patents",
      desc: "Approx. 800 patents handled across communication, AI, and allied technology areas.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      Icon: Icon.AI,
      title: "Software, AI & Emerging Tech",
      stat: "Frontier Domain",
      desc: "Capability across software-led inventions, data-driven solutions, and interdisciplinary technical subject matter.",
      gradient: "from-violet-600 to-blue-600",
    },
    {
      Icon: Icon.Science,
      title: "Engineering, Pharma & Applied Sciences",
      stat: "All Disciplines",
      desc: "Experience spanning mechanical, pharmaceutical, material, industrial, and broader scientific innovation.",
      gradient: "from-emerald-600 to-teal-500",
    },
  ];

  return (
    <section className="py-24 bg-white" id="technology">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Technology Coverage</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work across all sciences
            <br />
            and engineering
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((t) => (
            <div
              key={t.title}
              className="tech-card relative overflow-hidden rounded-3xl border border-slate-100 shadow-sm bg-white"
            >
              <div
                className={`tech-stripe bg-linear-to-r ${t.gradient} w-full`}
              />
              <div className="p-8">
                <div
                  className={`tech-icon w-16 h-16 rounded-2xl bg-linear-to-br ${t.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  <t.Icon />
                </div>
                <div
                  className={`inline-block text-xs font-black tracking-widest uppercase mb-3 bg-linear-to-r ${t.gradient} text-transparent bg-clip-text`}
                >
                  {t.stat}
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-3 leading-snug">
                  {t.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PROSECUTION STRENGTH
══════════════════════════════════════════ */
function ProsecutionStrength() {
  const steps = [
    {
      num: "01",
      title: "Assess",
      desc: "Invention capture, initial review, and filing roadmap.",
    },
    {
      num: "02",
      title: "File",
      desc: "Drafting and structured filing for patents, designs, and marks.",
    },
    {
      num: "03",
      title: "Prosecute",
      desc: "Responses, hearings, follow-up, and grant support.",
    },
    {
      num: "04",
      title: "Support",
      desc: "Agreements, documentation, and compliance-led advisory.",
    },
  ];

  const reasons = [
    "Strong familiarity with Patent Office examination and hearing workflows.",
    "Ability to manage large and diverse portfolios for institutions, universities, and enterprises.",
    "Coverage that extends from filing strategy to post-filing support and commercial documentation.",
  ];

  return (
    <section
      id="prosecution"
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #060e24 0%, #0b1f4a 50%, #0e2a6a 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full"
          style={{ background: "rgba(37,99,235,0.1)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full"
          style={{ background: "rgba(217,119,6,0.1)", filter: "blur(70px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel light>Prosecution Strength</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-white mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Substantive execution beyond filing
          </h2>
        </div>

        {/* Big stats row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { val: "193", sub: "Prosecuted matters with hearings completed" },
            { val: "≈ 180", sub: "Grants through RNK practice" },
            { val: "93%", sub: "Grant conversion rate (approx.)" },
          ].map((s) => (
            <div
              key={s.val}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              className="pros-stat-card rounded-3xl p-8 text-center"
            >
              <p
                className="pros-num text-6xl font-black text-white mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </p>
              <div className="w-10 h-0.5 bg-amber-400 rounded-full mx-auto mb-3" />
              <p className="text-slate-300 text-sm leading-snug">{s.sub}</p>
            </div>
          ))}
        </div>

        {/* Grant rate bar */}
        <div
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
          className="rounded-2xl p-6 mb-16"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-white font-semibold">Grant Success Rate</p>
            <p className="text-amber-400 font-black">93%</p>
          </div>
          <div
            className="h-3 rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="progress-bar h-full rounded-full"
              style={{ width: "93%" }}
            />
          </div>
          <p className="text-slate-400 text-xs mt-3">
            Based on 193 hearing-completed prosecutions
          </p>
        </div>

        {/* Narrative + reasons */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            className="rounded-3xl p-8"
          >
            <p className="text-slate-300 leading-relaxed">
              RNK&apos;s portfolio strength is not limited to filing volume.
              Approximately{" "}
              <span className="text-white font-semibold">
                193 patent matters
              </span>{" "}
              have been prosecuted through hearing completion, of which
              approximately{" "}
              <span className="text-amber-300 font-semibold">
                180 have resulted in grant
              </span>
              . The balance remains under prosecution and pending before the
              Indian Patent Office.
            </p>
          </div>
          <div>
            <h3 className="text-amber-400 font-bold text-lg mb-5">
              Why clients engage RNK
            </h3>
            <div className="space-y-4">
              {reasons.map((r) => (
                <div key={r} className="flex gap-4">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                    <span className="text-amber-400">
                      <Icon.Check />
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                background: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
              className="step-card rounded-2xl p-6"
            >
              <p
                className="step-num text-5xl font-black text-gradient mb-3"
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
  );
}

/* ══════════════════════════════════════════
   REPRESENTATIVE CLIENTS
══════════════════════════════════════════ */
function RepresentativeClients() {
  const academic = [
    "Indian Institute of Technology (IIT), Delhi",
    "National Institute of Technology (NIT), Srinagar",
    "Vellore Institute of Technology (VIT), Vellore",
    "Indian Institute of Information Technology (IIIT), Raipur",
    "TiHAN, IIT Hyderabad",
    "HNB Garhwal University",
    "Berhampur University",
    "SR University",
    "KL University",
  ];
  const enterprise = [
    "Inches Group Pvt. Ltd.",
    "INFINI Agrotek LLP",
    "Logus Exports",
    "Suncity Metals and Tubes Private Limited",
    "Aahara Pharmaceuticals",
  ];

  return (
    <section className="py-24 bg-slate-50" id="clients">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Representative Clients</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Trusted by institutions, research
            <br />
            ecosystems, and enterprises
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Academic */}
          <div className="client-card academic bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-linear-to-br from-blue-900 to-indigo-900 px-6 py-5">
              <p className="text-white font-bold text-lg">
                Academic &amp; Research Institutions
              </p>
              <p className="text-blue-200 text-sm mt-1">
                {academic.length} Premier Institutions
              </p>
            </div>
            <div className="p-4 space-y-1">
              {academic.map((c) => (
                <div
                  key={c}
                  className="client-row flex items-center gap-3 text-sm text-slate-700"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                    <Icon.Star />
                  </div>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="client-card enterprise bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-linear-to-br from-amber-600 to-orange-700 px-6 py-5">
              <p className="text-white font-bold text-lg">
                Industry &amp; Enterprise Clients
              </p>
              <p className="text-amber-100 text-sm mt-1">
                {enterprise.length} Corporate Clients
              </p>
            </div>
            <div className="p-4 space-y-1">
              {enterprise.map((c) => (
                <div
                  key={c}
                  className="client-row flex items-center gap-3 text-sm text-slate-700"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 text-amber-600">
                    <Icon.Star />
                  </div>
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl px-8 py-5 text-slate-600 italic text-center">
          RNK&apos;s client base reflects work across premier educational
          institutions, research-led ecosystems, and private enterprises with
          diverse innovation and brand protection requirements.
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   PROPOSAL FOCUS
══════════════════════════════════════════ */
function ProposalFocus() {
  const supports = [
    "Patent drafting, filing, and prosecution support for protectable innovations.",
    "Design and trademark filings for product appearance, branding, and identity protection.",
    "Patentability review, examination response strategy, and hearing-stage prosecution assistance.",
    "NDA, assignment, licensing, and allied IP-commercial documentation.",
    "Agreement review, vetting, and in-house legal/compliance support as business needs evolve.",
  ];
  const expectations = [
    "Responsive matter handling",
    "Clear and commercially practical communication",
    "Technical comprehension aligned with legal strategy",
    "Scalable support from filing to post-filing and documentation",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel>Proposal Focus for Eva Ad Ventures</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-black text-slate-900 mt-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A practical support structure aligned
            <br />
            to growth, protection, and readiness
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Support areas */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="font-bold text-slate-900 text-xl mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-blue-600 rounded-full" />
              Support areas that can be activated as required
            </h3>
            <div className="space-y-2">
              {supports.map((s, i) => (
                <div key={i} className="support-row flex gap-4 p-3">
                  <div className="support-num w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-700 font-bold text-sm">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed pt-1">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expectations */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex-1">
              <div className="bg-linear-to-br from-blue-900 to-indigo-900 p-6">
                <p className="text-white font-bold text-xl">
                  What Eva Ad Ventures can expect
                </p>
                <p className="text-blue-200 text-sm mt-1">
                  Our commitment to you
                </p>
              </div>
              <div className="bg-white p-6 space-y-4">
                {expectations.map((e) => (
                  <div key={e} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
                      <Icon.Check />
                    </div>
                    <p className="text-slate-700 font-medium">{e}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA banner */}
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 p-10 text-center shadow-2xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
          <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">
            Long-term Partnership
          </p>
          <p
            className="text-white text-xl md:text-2xl font-bold leading-relaxed max-w-3xl mx-auto mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            RNK Legalheads LLP is positioned to serve as a long-term legal
            partner for Eva Ad Ventures Private Limited across present and
            future IP, documentation, and compliance requirements.
          </p>
          <a
            href="mailto:contact@rnklegalheads.com"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-400/30"
          >
            <Icon.Mail /> Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   FOOTER
══════════════════════════════════════════ */
function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #071328 0%, #0b1f4a 100%)",
      }}
      className="relative overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Logo light className="mb-5" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Built on Trust, Driven by Commitment. A leading IP and commercial
              legal firm serving institutions, research ecosystems, and
              enterprises across India.
            </p>
            <p
              className="text-amber-400 italic font-semibold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &ldquo;Built on Trust, Driven by Commitment.&rdquo;
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-bold mb-5">Practice Areas</p>
            <ul className="space-y-2.5">
              {[
                "Patents",
                "Designs",
                "Trademarks",
                "Commercial Matters",
                "In-House Compliance",
              ].map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-slate-400 text-sm hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="w-1 h-1 rounded-full bg-amber-400/50" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold mb-5">Get in Touch</p>
            <div className="space-y-4">
              <a
                href="mailto:contact@rnklegalheads.com"
                className="flex items-start gap-3 text-slate-400 text-sm hover:text-amber-400 transition-colors group"
              >
                <span className="mt-0.5 text-amber-400 group-hover:scale-110 transition-transform">
                  <Icon.Mail />
                </span>
                contact@rnklegalheads.com
              </a>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="mt-0.5 text-amber-400 shrink-0">
                  <Icon.Phone />
                </span>
                +91 9779202789 | +91 6003416196
              </div>
              <div className="flex items-start gap-3 text-slate-400 text-sm">
                <span className="mt-0.5 text-amber-400 shrink-0">
                  <Icon.Location />
                </span>
                Plot No. 94, 3rd Floor, Pocket-10, Dwarka Sector 13, New Delhi
                110078
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            Confidential | Prepared exclusively for Eva Ad Ventures Private
            Limited
          </p>
          <div className="flex items-center gap-4">
            {/* <a
              href="/terms-and-conditions"
              className="text-slate-500 text-xs hover:text-amber-400 transition-colors underline underline-offset-2"
            >
              Terms &amp; Conditions
            </a> */}
            <span className="text-slate-500 text-xs hover:text-amber-400 transition-colors underline underline-offset-2">
              Terms &amp; Conditions
            </span>
            <span className="text-slate-700 text-xs">·</span>
            <p className="text-slate-500 text-xs">
              © 2026 RNK Legalheads LLP · Financial Year 2025-2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════
   PAGE ROOT
══════════════════════════════════════════ */
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExecutiveSummary />
      <PracticeAreas />
      <TechnologyCoverage />
      <ProsecutionStrength />
      <RepresentativeClients />
      <ProposalFocus />
      <Footer />
    </main>
  );
}
