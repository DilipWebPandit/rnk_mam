import Logo from "../components/Logo";

export const metadata = {
  title: "Terms of Use – RNK Legalheads LLP",
  description:
    "Terms of Use governing access to and use of the RNK Legalheads LLP website.",
};

const sections = [
  {
    id: "informational",
    title: "1. Informational Purpose Only",
    body: [
      "The contents of this Website are provided for general informational purposes only. Nothing on this Website constitutes legal advice, professional advice, solicitation, advertisement, invitation, inducement or a guarantee of any outcome.",
    ],
  },
  {
    id: "no-relationship",
    title: "2. No Lawyer-Client Relationship",
    body: [
      "Accessing or using this Website, sending an inquiry, downloading material or communicating with us through the Website does not create a lawyer-client relationship. A lawyer-client relationship arises only after appropriate conflict checks, formal acceptance of engagement and execution/confirmation of engagement terms.",
    ],
  },
  {
    id: "no-reliance",
    title: "3. No Reliance",
    body: [
      "You should not act or refrain from acting solely on the basis of any information available on this Website. You should obtain specific legal advice for your facts and circumstances. RNK Legalheads LLP disclaims liability for any action taken on the basis of website content.",
    ],
  },
  {
    id: "ip",
    title: "4. Intellectual Property in Website Content",
    body: [
      "All text, graphics, logos, design elements, documents, articles and other content available on the Website are owned by or licensed to RNK Legalheads LLP, unless otherwise stated. You may view the content for personal informational purposes only. You may not copy, reproduce, modify, distribute, publish or commercially exploit any content without prior written permission.",
    ],
  },
  {
    id: "permitted-use",
    title: "5. Permitted Use",
    body: [
      "You agree to use the Website only for lawful purposes and in a manner that does not violate applicable law, professional rules, third-party rights or the security and functioning of the Website. You must not attempt to interfere with the Website, introduce malicious code, scrape content or misuse contact forms.",
    ],
  },
  {
    id: "links",
    title: "6. Third-Party Links",
    body: [
      "The Website may contain links to third-party websites or platforms. Such links are provided only for convenience. RNK Legalheads LLP does not endorse and is not responsible for third-party content, policies, availability or security.",
    ],
  },
  {
    id: "accuracy",
    title: "7. Accuracy and Updates",
    body: [
      "While efforts may be made to keep the Website accurate and updated, RNK Legalheads LLP does not warrant that the Website content is complete, current, error-free or suitable for any specific purpose. Content may be modified, removed or updated without notice.",
    ],
  },
  {
    id: "liability",
    title: "8. Limitation of Liability",
    body: [
      "To the maximum extent permitted under law, RNK Legalheads LLP and its partners, associates, consultants, employees and representatives shall not be liable for any loss, damage, claim or consequence arising from use of or reliance upon the Website or any linked third-party platform.",
    ],
  },
  {
    id: "privacy",
    title: "9. Privacy",
    body: [
      "Your use of the Website may involve processing of certain information as described in the Privacy Policy. By using the Website, you acknowledge the Privacy Policy.",
    ],
  },
  {
    id: "governing",
    title: "10. Governing Law and Jurisdiction",
    body: [
      "These Terms of Use shall be governed by the laws of India. Subject to applicable law, courts at New Delhi shall have jurisdiction over disputes arising from use of the Website.",
    ],
  },
  {
    id: "contact",
    title: "11. Contact",
    body: [
      "For any query regarding these Terms of Use, please contact RNK Legalheads LLP:",
    ],
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <div style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }} className="min-h-screen">
      {/* ── Header ── */}
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" aria-label="Back to home">
            <Logo light />
          </a>
          <a
            href="/"
            className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1.5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Proposal
          </a>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}>
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">Legal Document</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Terms of Use
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          These Terms of Use govern your access to and use of the website of RNK Legalheads LLP.
          By accessing this Website, you agree to be bound by these Terms of Use, the Website
          Disclaimer and the Privacy Policy. If you do not agree, please do not use the Website.
        </p>
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-500">
          <span>Effective date: <span className="text-slate-300 font-medium">1 April 2026</span></span>
          <span>Governed by: <span className="text-slate-300 font-medium">Laws of India</span></span>
          <span>Jurisdiction: <span className="text-slate-300 font-medium">New Delhi Courts</span></span>
        </div>
      </div>

      {/* ── Table of Contents ── */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div
          className="rounded-2xl p-6"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-4">Contents</p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-slate-400 text-sm hover:text-amber-400 transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── Sections ── */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-10">
        {sections.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="rounded-2xl p-8 scroll-mt-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2
              className="text-xl font-bold text-white mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="w-1 h-6 rounded-full bg-amber-400 shrink-0" />
              {s.title}
            </h2>
            <div className="space-y-4">
              {s.body.map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed text-sm">
                  {para}
                </p>
              ))}
            </div>

            {s.contact && (
              <div
                className="mt-6 rounded-xl p-5 space-y-2"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <p className="text-slate-300 text-sm font-semibold">RNK Legalheads LLP</p>
                <p className="text-slate-400 text-sm">
                  Plot No. 94, 3rd Floor, Pocket-10, Dwarka Sector 13, New Delhi – 110078
                </p>
                <a
                  href="mailto:contact@rnklegalheads.com"
                  className="text-amber-400 text-sm hover:underline block"
                >
                  contact@rnklegalheads.com
                </a>
                <p className="text-slate-400 text-sm">+91 9779202789 | +91 6003416196</p>
              </div>
            )}
          </div>
        ))}

        {/* Closing note */}
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)" }}
        >
          <p className="text-amber-300 text-sm leading-relaxed">
            These Terms of Use were last updated on <strong>1 April 2026</strong>.
            RNK Legalheads LLP reserves the right to update these Terms at any time without prior notice.
            Continued use of the Website constitutes acceptance of any revised Terms.
          </p>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">© 2026 RNK Legalheads LLP · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy-policy" className="text-xs text-slate-500 hover:text-amber-400 transition-colors underline underline-offset-2">
              Privacy Policy
            </a>
            <span className="text-slate-700 text-xs">·</span>
            <a href="/" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
