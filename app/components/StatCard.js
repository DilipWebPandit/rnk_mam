export default function StatCard({ value, label, delay = "" }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.07)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.14)",
      }}
      className={`stat-card rounded-2xl p-5 animate-fade-up ${delay}`}
    >
      <p
        style={{ fontFamily: "'Playfair Display', serif" }}
        className="stat-value text-3xl font-black text-white mb-1 leading-none"
      >
        {value}
      </p>
      <div className="stat-bar w-8 h-0.5 bg-amber-400 mb-2 rounded-full" />
      <p className="text-slate-300 text-xs leading-snug">{label}</p>
    </div>
  );
}
