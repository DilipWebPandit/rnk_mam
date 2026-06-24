"use client";
import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const already = document.cookie.includes("rnk_disclaimer_accepted=true");
    if (!already) setVisible(true);
  }, []);

  function proceed() {
    if (!accepted) return;
    document.cookie = `rnk_disclaimer_accepted=true; max-age=${1 * 60 * 60}; path=/`;
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      style={{ background: "rgba(4, 10, 28, 0.92)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        style={{
          background: "linear-gradient(160deg, #0b1f4a 0%, #071328 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          maxHeight: "calc(100vh - 24px)",
        }}
      >
        {/* Gold top bar */}
        <div className="h-1 w-full shrink-0" style={{ background: "linear-gradient(90deg, #d97706, #fbbf24, #d97706)" }} />

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-7 sm:px-8 sm:py-10">
          {/* Logo + heading */}
          <div className="flex items-center gap-3 mb-5 sm:mb-7">
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #1a3570, #2563eb)" }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 sm:w-5 sm:h-5 text-white" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
              </svg>
            </div>
            <div>
              <h2
                className="text-white font-black text-lg sm:text-xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Disclaimer
              </h2>
              <p className="text-amber-400 text-xs font-semibold tracking-widest uppercase mt-0.5">
                RNK Legalheads LLP
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-5 sm:mb-6 h-px" style={{ background: "rgba(255,255,255,0.1)" }} />

          {/* Body */}
          <div className="space-y-3 sm:space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            <p>
              The Bar Council of India does not permit advertisement or solicitation by advocates in
              any form or manner. By accessing this website,{" "}
              <span className="text-amber-400 font-medium">rnklegalheads.com</span>, you acknowledge
              and confirm that you are seeking information relating to{" "}
              <span className="text-white font-semibold">RNK Legalheads LLP</span> of your own accord
              and that there has been no form of solicitation, advertisement, or inducement by RNK
              Legalheads LLP or its members.
            </p>
            <p>
              The content of this website is for{" "}
              <span className="text-white font-medium">informational purposes only</span> and should
              not be interpreted as soliciting or advertisement. No material or information provided
              on this website should be construed as{" "}
              <span className="text-white font-medium">legal advice</span>.
            </p>
            <p>
              RNK Legalheads LLP shall not be liable for consequences of any action taken by relying
              on the material or information provided on this website. The contents of this website
              are the intellectual property of RNK Legalheads LLP.
            </p>
            <p>
              Any proposal documents, statistics, or practice information shared through this platform
              are confidential and prepared exclusively for the named recipient. Unauthorised
              reproduction or distribution is strictly prohibited.
            </p>
          </div>

          {/* Checkbox */}
          <label
            className="flex items-start gap-3 cursor-pointer mb-5 sm:mb-7 select-none"
            onClick={() => setAccepted((v) => !v)}
          >
            <div
              className="mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-all duration-200"
              style={{
                background: accepted
                  ? "linear-gradient(135deg, #d97706, #fbbf24)"
                  : "rgba(255,255,255,0.08)",
                border: accepted
                  ? "1px solid #fbbf24"
                  : "1px solid rgba(255,255,255,0.25)",
              }}
            >
              {accepted && (
                <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3" stroke="#0b1f4a" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
            </div>
            <span
              className="text-xs sm:text-sm leading-snug transition-colors duration-200"
              style={{ color: accepted ? "#fbbf24" : "rgba(255,255,255,0.6)" }}
            >
              I have read and accept the above disclaimer. I understand that this website does not
              provide legal advice and is for informational purposes only.
            </span>
          </label>

          {/* Button */}
          <button
            onClick={proceed}
            disabled={!accepted}
            className="w-full py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-300"
            style={
              accepted
                ? {
                    background: "linear-gradient(90deg, #1a3570 0%, #2563eb 50%, #1a3570 100%)",
                    backgroundSize: "200% auto",
                    color: "#ffffff",
                    boxShadow: "0 8px 24px rgba(37,99,235,0.4)",
                    cursor: "pointer",
                  }
                : {
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.3)",
                    cursor: "not-allowed",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }
            }
          >
            PROCEED TO WEBSITE
          </button>

          {!accepted && (
            <p className="text-center text-xs text-slate-500 mt-3">
              Please accept the above disclaimer to continue.
            </p>
          )}
        </div>

        {/* Bottom gold bar */}
        <div className="h-0.5 w-full shrink-0" style={{ background: "linear-gradient(90deg, transparent, #d97706, transparent)" }} />
      </div>
    </div>
  );
}
