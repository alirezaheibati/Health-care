export default function ExpertiseBtn({ title, image, isActive }) {
  return (
    <li
      className={`${
        isActive ? "text-slate-100 bg-[#252c62]" : "bg-slate-100 text-[#252c62]"
      } rounded-full shrink-0`}
    >
      <button className="flex justify-center items-center gap-2 px-4 py-2">
        <p>{title}</p>
        <img src={image} alt={title} className="w-12" />
      </button>
    </li>
  );
}
