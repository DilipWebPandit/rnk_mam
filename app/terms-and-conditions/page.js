import Logo from "../components/Logo";

export const metadata = {
  title: "Terms & Conditions – RNK Legalheads LLP",
  description:
    "Terms and Conditions governing the use of RNK Legalheads LLP's website, proposal materials, and legal services.",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using this website and any materials published herein (the \"Site\"), you agree to be bound by these Terms and Conditions (\"Terms\"). If you do not agree to these Terms, please discontinue use of the Site immediately.",
      "These Terms apply to all visitors, recipients of proposal documents, and any party that engages with RNK Legalheads LLP (\"RNK\", \"we\", \"us\", or \"our\") through this platform.",
    ],
  },
  {
    id: "nature",
    title: "2. Nature of Content – Not Legal Advice",
    body: [
      "The information contained on this Site, including any proposal documents, practice profiles, case statistics, or general descriptions of services, is provided for informational and business-development purposes only.",
      "Nothing on this Site constitutes legal advice, and no attorney-client relationship is formed by accessing or reviewing this material. Legal advice is provided only through a formal engagement letter and retainer agreement executed between RNK Legalheads LLP and the client.",
      "Statistics and figures (including filing numbers, grant rates, and timelines) are approximate and based on internal records. They do not constitute a guarantee of outcome for any future matter.",
    ],
  },
  {
    id: "confidentiality",
    title: "3. Confidentiality of Proposal Materials",
    body: [
      "Proposal documents, practice profiles, fee schedules, and associated materials shared through this Site or accompanying communications are confidential and are prepared exclusively for the named recipient.",
      "Recipient agrees not to reproduce, circulate, distribute, or disclose any proposal material to any third party without the prior written consent of RNK Legalheads LLP.",
      "Unauthorised disclosure may constitute a breach of professional confidence and may attract civil liability.",
    ],
  },
  {
    id: "ip",
    title: "4. Intellectual Property",
    body: [
      "All content on this Site — including text, graphics, logos, design elements, and structural layout — is the intellectual property of RNK Legalheads LLP or its licensors and is protected under applicable Indian and international intellectual property laws.",
      "You may not copy, reproduce, modify, adapt, translate, or create derivative works from any part of this Site without express prior written permission from RNK Legalheads LLP.",
      "The RNK Legalheads LLP name, logo, and trade name are proprietary marks of the firm. Any unauthorised use is strictly prohibited.",
    ],
  },
  {
    id: "services",
    title: "5. Scope of Legal Services",
    body: [
      "RNK Legalheads LLP offers legal support in the areas of Patents, Designs, Trademarks, Commercial Documentation, and In-House Compliance Advisory under the laws of India, including the Patents Act 1970, the Trade Marks Act 1999, the Designs Act 2000, and allied statutes.",
      "The scope, fees, deliverables, and timelines for any specific engagement are governed solely by the written retainer or engagement agreement between RNK and the client. This Site does not form part of any such agreement.",
      "RNK reserves the right to decline any engagement at its sole discretion without providing reasons.",
    ],
  },
  {
    id: "disclaimer",
    title: "6. Disclaimer of Warranties",
    body: [
      "This Site and all materials are provided on an \"as is\" and \"as available\" basis without any warranty of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement.",
      "RNK Legalheads LLP does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components. You access and use the Site at your own risk.",
      "Past performance, grant rates, or case outcomes referenced on this Site are not indicative of future results in any specific matter.",
    ],
  },
  {
    id: "liability",
    title: "7. Limitation of Liability",
    body: [
      "To the fullest extent permitted by applicable law, RNK Legalheads LLP, its partners, attorneys, employees, and agents shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with your use of, or inability to use, this Site or any materials contained herein.",
      "In no event shall RNK's total liability to you for all claims arising from your use of this Site exceed INR 10,000 (Rupees Ten Thousand only).",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy and Data",
    body: [
      "Any personal information you provide to RNK through this Site or accompanying communications — including name, email, phone number, or company details — will be used solely for the purpose of responding to your enquiry or fulfilling the agreed scope of services.",
      "RNK Legalheads LLP does not sell, rent, or share your personal data with third parties except as required to deliver the services engaged, comply with applicable law, or with your prior consent.",
      "By submitting your contact details, you consent to RNK using those details to respond to your enquiry and, where relevant, to send updates regarding our services. You may withdraw consent at any time by writing to contact@rnklegalheads.com.",
    ],
  },
  {
    id: "links",
    title: "9. Third-Party Links",
    body: [
      "This Site may contain links to external websites for reference or convenience. RNK Legalheads LLP does not endorse, control, or assume responsibility for the content, privacy practices, or accuracy of any third-party websites.",
      "Accessing linked third-party websites is at your own risk and subject to their respective terms of use.",
    ],
  },
  {
    id: "changes",
    title: "10. Amendments",
    body: [
      "RNK Legalheads LLP reserves the right to revise these Terms at any time without prior notice. Revised Terms will be effective immediately upon posting to this Site.",
      "Your continued use of the Site after any amendment constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.",
    ],
  },
  {
    id: "governing",
    title: "11. Governing Law and Jurisdiction",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms or your use of this Site shall be subject to the exclusive jurisdiction of the courts at New Delhi, India.",
      "If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
    ],
  },
  {
    id: "contact",
    title: "12. Contact",
    body: [
      "If you have questions about these Terms or wish to raise a concern, please contact us:",
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
          Terms &amp; Conditions
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Please read these Terms and Conditions carefully before using this website or engaging
          with RNK Legalheads LLP for legal services.
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
            These Terms and Conditions were last updated on <strong>1 April 2026</strong>.
            RNK Legalheads LLP reserves the right to update these Terms at any time.
            Continued use of the Site constitutes acceptance of any revised Terms.
          </p>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">© 2026 RNK Legalheads LLP · All rights reserved.</p>
          <a
            href="/"
            className="text-xs text-slate-500 hover:text-amber-400 transition-colors"
          >
            Return to Proposal
          </a>
        </div>
      </div>
    </div>
  );
}
