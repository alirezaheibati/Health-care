export default function QHeader({ title }) {
  return (
    <>
      <div className=" bg-gray-100 mb-3 mt-6 rounded-lg w-full">
        <div className=" max-w-[600px] bg-white overflow-hidden shadow-qbox-shadow rounded-lg mx-auto">
          <div
            className={`flex justify-center items-center py-2 px-4 bg-[#252c62] text-slate-50`}
          >
            <p className="text-lg font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
