import DoctorProfile from "./DoctorProfile";
import doctor1 from "./../../assets/doctors/doctor-1.png";
import doctor2 from "./../../assets/doctors/doctor-2.png";
import doctor3 from "./../../assets/doctors/doctor-3.png";
import doctor4 from "./../../assets/doctors/doctor-4.png";
import doctor5 from "./../../assets/doctors/doctor-5.png";
import doctor6 from "./../../assets/doctors/doctor-6.png";
import doctor7 from "./../../assets/doctors/doctor-7.png";
import doctor8 from "./../../assets/doctors/doctor-8.png";
export default function DoctorsList() {
  return (
    <ul className="custom-scrollbar w-full overflow-y-auto flex justify-start items-center gap-[1%] py-8">
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor1}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor2}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor3}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor4}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor5}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor6}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor7}
        expertise={"Cardiologist"}
      />
      <DoctorProfile
        name={"DR. Alireza Heibati"}
        image={doctor8}
        expertise={"Cardiologist"}
      />
    </ul>
  );
}
