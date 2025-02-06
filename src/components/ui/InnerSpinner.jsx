/**
 * InnerSpinner Component
 *
 * Displays a loading spinner, which can be used to indicate loading or processing states within your application.
 *
 * Props: None
 */
export default function InnerSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center my-8">
      <div className="border-x-[#252c62] border-8 border-transparent w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
}
