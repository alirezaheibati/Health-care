import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactInfo({ title, icon, infos }) {
  return (
    <div className="p-4">
      <div className="flex justify-start items-center gap-2">
        <p className="text-slate-50 bg-[#252c62] w-8 h-8 flex justify-center items-center rounded-full">
          <FontAwesomeIcon icon={icon} />
        </p>
        <p className="text-lg">{title}:</p>
      </div>
      {infos.map((info) => (
        <p key={info} className="pl-10 mt-2">
          {info}
        </p>
      ))}
    </div>
  );
}
