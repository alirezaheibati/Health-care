export default function ErrorModal() {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center z-[100]">
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
      <div className=" bg-slate-50 rounded-xl px-4 w-[400px] max-w-full relative">
        <p className="font-bold text-center my-4">{errorInfo.title}</p>
        <p>{errorInfo.message}</p>
        <button className="block mx-auto bg-slate-900 text-slate-50 rounded-lg py-1 px-8 my-4">
          Ok
        </button>
      </div>
    </div>
  );
}
