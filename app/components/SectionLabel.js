export default function SectionLabel({ children, light = false }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <div className="w-4 h-0.75 bg-amber-400 rounded-full" />
      <p
        className={`text-xs font-bold tracking-[0.2em] uppercase ${
          light ? "text-amber-400" : "text-blue-600"
        }`}
      >
        {children}
      </p>
      <div className="w-4 h-0.75 bg-amber-400 rounded-full" />
    </div>
  );
}
