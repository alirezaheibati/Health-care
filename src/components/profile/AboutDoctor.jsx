export default function AboutDoctor({ doctor, about }) {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl">
      <h2 className="text-xl mb-2 ">About {doctor}</h2>
      <p className="text-gray-600">{about}</p>
    </div>
  );
}
