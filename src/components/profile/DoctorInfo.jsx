import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
export default function DoctorInfo({ card }) {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl relative overflow-hidden min-h-[300px] flex flex-col justify-end gap-12">
      <img
        src={card.image}
        alt={card.username}
        className="absolute bottom-0 h-[300px] -right-8 opacity-80"
      />
      <div className="flex justify-start items-start gap-4 mb-2 relative z-10">
        <img
          src={card.image}
          alt={card.username}
          className="rounded-full w-20 h-20 bg-white"
        />
        <div className="flex flex-col h-20 justify-center">
          <p className="text-xl">{card.username}</p>
          <p className=" text-gray-500 text-sm mb-1">{card.expertise}</p>
        </div>
      </div>
      <div className="border py-2 rounded-xl flex justify-between mt-6 relative z-10 bg-white">
        <div className=" border-r-2 border-dashed text-center w-1/3">
          <FontAwesomeIcon icon={faCheckCircle} className="text-sky-400 mb-1" />
          <p className="text-sm">{card.patients} patients</p>
        </div>
        <div className=" border-r-2 border-dashed text-center w-1/3">
          <FontAwesomeIcon icon={faThumbsUp} className="text-green-500 mb-1" />
          <p className="text-sm">
            %{Math.ceil((card.votes * 100) / card.patients)} Suggested
          </p>
        </div>
        <div className="text-center w-1/3">
          <FontAwesomeIcon icon={faStar} className="text-yellow-400 mb-1" />
          <p className="text-sm">
            {card.rating} ({card.votes} vote)
          </p>
        </div>
      </div>
    </div>
  );
}
