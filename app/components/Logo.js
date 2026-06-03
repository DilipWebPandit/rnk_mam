export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex flex-col gap-[3px]">
        <div className="w-9 h-[4px] bg-red-500 rounded-full" />
        <div className="w-5 h-[4px] bg-red-500 rounded-full" />
        <div className="w-7 h-[4px] bg-red-500 rounded-full opacity-50" />
      </div>
      <div>
        <span
          className={`text-[22px] font-black tracking-tight leading-none ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          RNK{" "}
          <span className={light ? "text-amber-400" : "text-blue-800"}>
            Legalheads
          </span>
        </span>
        <p
          className={`text-[9px] tracking-[0.2em] uppercase font-semibold mt-0.5 ${
            light ? "text-slate-400" : "text-slate-400"
          }`}
        >
          LLP
        </p>
      </div>
    </div>
  );
}
