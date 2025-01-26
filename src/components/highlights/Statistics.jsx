export default function Statistics({ title, description, bgColor, image }) {
  return (
    <div
      className={`w-full h-full rounded-xl relative text-[#252c62] ${bgColor} p-4 py-6 flex justify-end items-start flex-col`}
    >
      <img
        src={image}
        alt={description}
        className="absolute right-2 top-2 opacity-30 h-3/5"
      />

      <h2 className="text-2xl sm:text-4xl font-semibold z-10 relative">
        {title}
      </h2>
      <p>{description}</p>
    </div>
  );
}
