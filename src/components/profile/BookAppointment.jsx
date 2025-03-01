import {
  faCalendarCheck,
  faHospital,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BookAppointment({ doctor, address, fee }) {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl">
      <h2 className="text-xl mb-2 ">
        <FontAwesomeIcon
          icon={faHospital}
          className="mr-1 mb-[2px] text-base"
        />
        Book appointment for {doctor}
      </h2>
      <div className="border border-sky-400 rounded-lg p-4">
        <div className="border-sky-400 border-b border-dashed pb-4 mb-4 ">
          <p>
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-1 mb-[2px] text-base"
            />
            <span className="font-semibold">Office Address:</span> {address}
          </p>
          <p className="mt-2">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="mr-1 mb-[2px] text-base"
            />
            <span className="font-semibold">First Avilable Time:</span> next
            sunday
          </p>
          <p className="mt-2 text-lg text-gray-500">
            <span className="text-gray-900">${fee}</span> /Session
          </p>
        </div>
        <button className="w-full bg-sky-400 text-slate-50 rounded-lg py-2">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
