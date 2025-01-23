export default function DoctorProfile({ name, image, expertise }) {
  return (
    <li className="w-[49%] md:w-[33%] lg:w-[19%] shrink-0">
      <div className=" bg-gray-200 rounded-3xl overflow-hidden">
        <img src={image} alt={name} />
      </div>
      <h2 className="text-[#252c62] text-lg sm:text-xl font-semibold pt-2">
        {name}
      </h2>
      <p className="text-gray-500">{expertise}</p>
    </li>
  );
}
