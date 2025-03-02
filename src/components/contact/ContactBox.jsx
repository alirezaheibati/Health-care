export default function ContactBox({ children, title }) {
  return (
    <div className="overflow-hidden bg-white rounded-lg flex-1 w-full md:w-auto">
      <p className="bg-[#252c62] text-slate-50 text-2xl p-4 text-center">
        {title}
      </p>
      {children}
    </div>
  );
}
