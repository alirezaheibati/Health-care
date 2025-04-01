import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doctorImg from "./../../assets/doctor.png";
import { useNavigate } from "react-router-dom";
import {
  faArrowRight,
  faCalendarCheck,
  faHourglass1,
} from "@fortawesome/free-solid-svg-icons";
import HeroFeature from "./HeroFeature";
/**
 * Hero Component
 *
 * Displays the main hero section with a title, features, and a call-to-action button.
 * Props:
 * - None
 */
export default function Hero() {
  const navigate = useNavigate();

  function bookAppointmentHandler() {
    navigate("/projects/healthcare/book-appointment");
  }
  return (
    <>
      <div className="p-4 rounded-lg bg-[#252c62] mt-3 relative h-[550px] overflow-hidden flex justify-between items-center flex-col">
        <h1 className="text-[15vw] text-sky-100 leading-[15vw] text-center font-bold mb-4">
          Healthcare
        </h1>
        <img
          src={doctorImg}
          alt="doctor image"
          className="absolute -right-6 bottom-0 w-52 md:right-1/2 md:translate-x-1/2 md:w-64 lg:w-72 lg:-bottom-20"
        />
        <div className="w-full grow flex justify-between flex-col z-10">
          <div className="flex justify-around items-center flex-wrap py-4">
            <HeroFeature
              description={"No more waste of time"}
              icon={faHourglass1}
              bgColor={"bg-pink-300"}
            />
            <HeroFeature
              description={"Easily book appointment"}
              icon={faCalendarCheck}
              bgColor={"bg-green-300"}
            />
          </div>
          <div className="text-slate-100 md:flex md:justify-between md:items-center pb-4 lg:px-16">
            <p className="w-2/3 md:w-1/3 ">
              Experience the convenience of scheduling your medical appointments
              with just a few clicks.{" "}
              <span className="hidden lg:inline">
                Connect with top doctors, and choose the time that best fits
                your schedule.
              </span>
            </p>
            <button
              className="flex justify-start items-center text-slate-900 my-4"
              onClick={bookAppointmentHandler}
            >
              <p className=" bg-pink-300 rounded-full h-12 px-4 flex items-center">
                Book Appointment
              </p>
              <p className="bg-pink-300 text-2xl w-12 h-12 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
