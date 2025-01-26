import VideoCall from "./../../assets/video-call.png";
/**
 * LiveEvent Component
 *
 * Displays a promotional card for a live event with an image, title, date, and label.
 *
 */
export default function LiveEvent() {
  return (
    <div className="w-full h-full relative bg-[#252c62] text-slate-50 flex flex-col justify-between items-start rounded-xl p-3 sm:p-8">
      <img
        src={VideoCall}
        alt="Video Call"
        className="absolute h-4/5 right-2 top-2 opacity-30"
      />
      <p className="bg-slate-50 px-2 w-28 mb-2 sm:mb-4 rounded-md text-[#252c62]">
        <span className="bg-red-400 w-2 h-2 inline-block rounded-full"></span>{" "}
        Live event
      </p>
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold z-10 relative">
          Healty Habits for a<br /> Happy Heart
        </h2>
        <p className="text-sm">April 9, 2025 08:00 PM</p>
      </div>
    </div>
  );
}
