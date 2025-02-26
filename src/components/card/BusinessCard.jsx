import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faHospitalUser,
  faLocationDot,
  faShieldHeart,
  faStar,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import { Link } from "react-router-dom";
export default function BusinessCard({ card }) {
  return (
    <>
      <li className="bg-white p-2 sm:p-4 rounded-2xl w-full lg:w-[calc(50%-8px)]">
        <div className="flex justify-start items-start gap-4 mb-2">
          <img
            src={card.image}
            alt={card.username}
            className="rounded-full w-20 h-20 bg-slate-100"
          />
          <div>
            <p className="text-xl">{card.username}</p>
            <p className=" text-gray-500 text-sm mb-1">{card.expertise}</p>
            <div className="flex justify-start gap-2 flex-wrap">
              <p className="text-sm">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-400 mr-1"
                />
                {card.rating} ({card.votes} vote)
              </p>
              <p className="text-sm">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-sky-400 mr-1"
                />
                {card.patients} patients
              </p>
            </div>
          </div>
        </div>
        <hr />
        <p className="my-2 text-gray-500">
          <span className="text-xl text-[#252c62]">${card.fee} </span>/Session
        </p>
        <div className="w-full flex flex-wrap gap-x-4 text-gray-600 [&_svg]:text-[#252c62]">
          {card.insurance && (
            <Service icon={faShieldHeart} title={"Accept Insutance"} />
          )}
          {card.consultation && (
            <Service icon={faWifi} title={"Online Consultation"} />
          )}
          {card.officeVisit && (
            <Service icon={faHospitalUser} title={"Visit In Person"} />
          )}
        </div>
        <div className="w-full my-2 text-gray-500 line-clamp-1">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="mr-1 text-[#252c62]"
          />
          {card.address}
        </div>
        <Link to={card.objectId}>
          <button className="text-[#252c62] mt-3 border border-[#252c62] w-full p-2 rounded-xl active:scale-95 hover:bg-[#e6e9ff]">
            View Profile
          </button>
        </Link>
      </li>
    </>
  );
}
