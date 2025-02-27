import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSignsPost } from "@fortawesome/free-solid-svg-icons";

export default function DoctorAddress({ doctor, address }) {
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl">
      <h2 className="text-xl mb-2 ">Address of {doctor}'s office</h2>
      <address className="text-gray-600">
        <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
        {address}
      </address>
      <button className="text-sky-600 mt-4">
        <FontAwesomeIcon icon={faSignsPost} className="mr-1" />
        Show on map
      </button>
    </div>
  );
}
