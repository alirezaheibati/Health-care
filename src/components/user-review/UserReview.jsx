import patient from "./../../assets/doctors/doctor-8.png";

export default function UserReview() {
  return (
    <div className="border-2 rounded-lg p-2 lg:p-12 w-3/4 mx-auto flex justify-between items-center flex-col lg:flex-row">
      <div className="flex gap-3 justify-start items-center py-4 lg:p-0">
        <img
          src={patient}
          alt="patient"
          className="w-16 h-16 rounded-full bg-red-300"
        />
        <div>
          <p>Alireza heibati</p>
          <p className="text-sm text-gray-500">patient</p>
        </div>
      </div>
      <div className="h-[2px] w-full lg:h-16 lg:w-[2px] bg-gray-300"></div>
      <div className="lg:w-3/5 py-4 lg:p-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt doloribus
        alias ut optio sint, nemo fuga ex tenetur officia iure sit dignissimos
        quia, nesciunt laborum, eveniet deleniti natus suscipit necessitatibus.
      </div>
    </div>
  );
}
