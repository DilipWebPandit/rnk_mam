import Logo from "../components/Logo";

export const metadata = {
  title: "Privacy Policy – RNK Legalheads LLP",
  description:
    "Privacy Policy of RNK Legalheads LLP — how we collect, process and protect personal information shared through our website.",
};

const sections = [
  {
    id: "scope",
    title: "1. Scope and Applicability",
    body: [
      "This Privacy Policy applies to all visitors, users and individuals (\"you\" or \"your\") who access, browse or interact with the Website, submit information through contact forms, subscribe to updates or communicate with us through digital channels.",
      "This Policy does not govern data collected in the course of client engagements, legal advisory services or contractual assignments, which remain subject to professional obligations, confidentiality obligations and engagement terms.",
    ],
  },
  {
    id: "collection",
    title: "2. Information We May Collect",
    body: [
      "We may collect information voluntarily provided by you, including name, email address, phone number, designation, organisation details, query details, attachments submitted through contact forms and any other information shared by email or digital communication.",
      "We may also collect technical and usage information such as IP address, browser type, operating system, device identifiers, referral source, pages visited, session duration, cookies and analytics information, subject to applicable law and user choices.",
    ],
  },
  {
    id: "cookies",
    title: "3. Cookies and Analytics",
    body: [
      "The Website may use cookies or similar technologies to improve functionality, analyse performance, enhance user experience and maintain security. You may manage or restrict cookies through your browser settings.",
      "If non-essential analytics or tracking cookies are used, the Website will provide appropriate notice and choices to users.",
    ],
  },
  {
    id: "purpose",
    title: "4. Purpose of Processing",
    body: [
      "We may process information for the following purposes: responding to inquiries, providing information requested by you, maintaining and improving the Website, sending legal updates or newsletters where you have opted in, complying with legal or regulatory obligations, internal audit and record keeping, ensuring security of the Website, and maintaining professional, ethical and legal standards applicable to our practice.",
    ],
  },
  {
    id: "basis",
    title: "5. Lawful Basis",
    body: [
      "Where applicable, processing is carried out on the basis of consent, legitimate use, performance of a requested service or communication, compliance with applicable law, or any other lawful basis available under applicable data protection laws in India, including the Digital Personal Data Protection Act, 2023 to the extent notified and enforced.",
    ],
  },
  {
    id: "sharing",
    title: "6. Sharing and Disclosure",
    body: [
      "We do not sell, trade or rent personal information to third parties. Information may be shared with our partners, personnel, affiliates, consultants, vendors or service providers for legitimate operational purposes, subject to confidentiality obligations.",
      "We may also disclose information where required by law, court order, governmental authority, legal process or to protect our rights and interests.",
    ],
  },
  {
    id: "transfer",
    title: "7. Cross-Border Transfers",
    body: [
      "Where any service provider or digital infrastructure is located outside India, information may be transferred or stored outside India, subject to applicable legal safeguards and contractual protections.",
    ],
  },
  {
    id: "retention",
    title: "8. Retention of Information",
    body: [
      "We retain personal information only for as long as necessary for the purposes stated in this Policy, for legitimate business or legal purposes, or as required under applicable law, professional standards or internal record retention practices.",
      "After expiry of the retention period, information may be deleted, anonymised or securely archived.",
    ],
  },
  {
    id: "rights",
    title: "9. Your Rights",
    body: [
      "Subject to applicable law, you may request access to your personal information, correction or updating of information, withdrawal of consent, erasure where applicable, or grievance redressal regarding handling of your data.",
      "Requests may be sent to contact@rnklegalheads.com. We may verify your identity before acting upon such request.",
    ],
  },
  {
    id: "security",
    title: "10. Data Security",
    body: [
      "We implement reasonable administrative, technical and organisational measures designed to protect information from unauthorised access, disclosure, alteration, loss or misuse.",
      "However, no digital system is entirely secure, and RNK Legalheads LLP shall not be liable for breaches or events beyond its reasonable control.",
    ],
  },
  {
    id: "links",
    title: "11. Third-Party Links",
    body: [
      "The Website may contain links to third-party websites, platforms or social media pages. We are not responsible for the content, privacy practices, security or policies of such third-party websites. Your use of such platforms is governed by their respective terms and privacy policies.",
    ],
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    body: [
      "The Website is intended for users above the age of 18. We do not knowingly collect personal information from minors. If you are under 18, please do not provide any information through the Website.",
    ],
  },
  {
    id: "changes",
    title: "13. Changes to this Policy",
    body: [
      "We may revise this Privacy Policy from time to time to reflect legal, technological or operational updates. Continued use of the Website after such updates will constitute acceptance of the revised Policy.",
    ],
  },
  {
    id: "grievance",
    title: "14. Grievance Redressal",
    body: [
      "For any grievance, concern or request relating to this Privacy Policy or your personal information, please contact our Grievance Officer:",
    ],
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: "linear-gradient(160deg, #060e24 0%, #0b1f4a 100%)" }} className="min-h-screen">

      {/* ── Header ── */}
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">
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
            Back to Home
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 pb-10">
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
        >
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="text-xs text-slate-300 font-medium tracking-wider uppercase">Legal Document</span>
        </div>
        <h1
          className="text-4xl md:text-5xl font-black text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Privacy Policy
        </h1>

        {/* Intro paragraph */}
        <p className="text-slate-400 text-base leading-relaxed max-w-3xl mb-6">
          RNK Legalheads LLP (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is committed to safeguarding the privacy and
          security of individuals who access and interact with our website (&ldquo;Website&rdquo;). This Privacy
          Policy explains the nature of information collected, the purpose and manner of processing,
          the security measures adopted by us, and the rights available to users in relation to
          their information.
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-slate-500">
          <span>Effective date: <span className="text-slate-300 font-medium">1 April 2026</span></span>
          <span>Governed by: <span className="text-slate-300 font-medium">Laws of India</span></span>
          <span>Legislation: <span className="text-slate-300 font-medium">DPDP Act, 2023 &amp; IT Rules, 2011</span></span>
        </div>
      </div>

      {/* ── Table of Contents ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-10">
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-24 space-y-6">
        {sections.map((s) => (
          <div
            key={s.id}
            id={s.id}
            className="rounded-2xl p-6 sm:p-8 scroll-mt-8"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2
              className="text-xl font-bold text-white mb-5 flex items-center gap-3"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="w-1 h-6 rounded-full bg-amber-400 shrink-0" />
              {s.title}
            </h2>
            <div className="space-y-3">
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
                <p className="text-slate-300 text-sm font-semibold">Grievance Officer — RNK Legalheads LLP</p>
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
            This Privacy Policy was last updated on <strong>1 April 2026</strong>.
            RNK Legalheads LLP reserves the right to revise this Policy at any time.
            Continued use of the Website constitutes acceptance of the revised Policy.
          </p>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">© 2026 RNK Legalheads LLP · All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/terms-and-conditions" className="text-xs text-slate-500 hover:text-amber-400 transition-colors">
              Terms of Use
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
