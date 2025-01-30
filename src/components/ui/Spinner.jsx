/**
 * Spinner Component
 *
 * Displays a centered loading spinner.
 */
export default function Spinner() {
  return (
    <div className="relative w-full h-full p-8 flex justify-center items-center z-50">
      <div className="border-x-orange-500 border-[12px] border-transparent w-40 h-40 rounded-full animate-spin"></div>
    </div>
  );
}
