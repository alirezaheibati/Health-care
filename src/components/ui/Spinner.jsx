/**
 * Spinner Component
 *
 * Displays a centered loading spinner.
 */
export default function Spinner() {
  return (
    <div className="fixed left-0 right-0 top-0 w-screen h-screen p-8 flex justify-center items-center z-50">
      <div className="absolute left-0 top-0 w-full h-full bg-black/50 z-[60]"></div>
      <div className="border-x-orange-500 border-[12px] border-transparent w-40 h-40 rounded-full animate-spin z-[70]"></div>
    </div>
  );
}
