// export default function Logo({ className = "", light = false }) {
//   return (
//     <div className={`flex items-center gap-3 ${className}`}>
//       {/* <div className="relative flex flex-col gap-[3px]">
//         <div className="w-9 h-[4px] bg-red-500 rounded-full" />
//         <div className="w-5 h-[4px] bg-red-500 rounded-full" />
//         <div className="w-7 h-[4px] bg-red-500 rounded-full opacity-50" />
//       </div> */}
//       <div>
//         <span
//           className={`text-[22px] font-black tracking-tight leading-none ${
//             light ? "text-white" : "text-slate-900"
//           }`}
//         >
//           <span>
//             <div className="w-12 h-[4px] bg-red-500 rounded-full" />
//             RNK
//           </span>{" "}
//           <span className={light ? "text-amber-400" : "text-blue-800"}>
//             Legalheads
//           </span>
//           <span
//             className={`text-[9px] tracking-[0.2em] uppercase font-semibold align-super ml-0.5 ${
//               light ? "text-slate-400" : "text-slate-400"
//             }`}
//           >
//             LLP
//           </span>
//         </span>
//       </div>
//     </div>
//   );
// }


export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* <div className="relative flex flex-col gap-[3px]">
        <div className="w-9 h-[4px] bg-red-500 rounded-full" />
        <div className="w-5 h-[4px] bg-red-500 rounded-full" />
        <div className="w-7 h-[4px] bg-red-500 rounded-full opacity-50" />
      </div> */}
      <div>
        <span
          className={`text-[22px] font-black tracking-tight leading-none ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          <span>
            <div className="w-12 h-[4px] bg-red-500 rounded-full" />
            RNK
          </span>{" "}
          <span className={light ? "text-amber-400" : "text-blue-800"}>
            Legalheads
          </span>
        </span>
        <span
          className={`text-[9px] tracking-[0.2em] uppercase font-semibold mt-0.5 ${
            light ? "text-slate-400" : "text-slate-400"
          }`}
        >
          {"  "}LLP
        </span>
      </div>
    </div>
  );
}
