import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DoctorProfile from "./DoctorProfile";
import { useSelector } from "react-redux";
import { faBoltLightning, faXmark } from "@fortawesome/free-solid-svg-icons";
export default function DoctorsList() {
  const doctorsList = useSelector((state) => state.cards.cards);
  const activeExperty = useSelector((state) => state.cards.experty);
  const expertDoctorsList =
    doctorsList.filter((doctor) => activeExperty === doctor.expertise).length >
    0;
  return (
    <ul
      className={`custom-scrollbar w-full overflow-y-auto flex items-center ${
        expertDoctorsList ? " justify-start " : " justify-center "
      } gap-[1%] py-8 min-h-[400px]`}
    >
      {expertDoctorsList ? (
        doctorsList
          .filter((doctor) => activeExperty === doctor.expertise)
          .map((card) => {
            return <DoctorProfile card={card} />;
          })
      ) : (
        <p className="text-xl">
          <FontAwesomeIcon
            icon={faBoltLightning}
            className="mr-2 text-red-500"
          />
          There is no doctor with your desierd experty right now. we are trying
          to complete our expertiese as soon as possible.
        </p>
      )}
    </ul>
  );
}
