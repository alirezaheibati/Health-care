import Cardiologist from "./../../assets/disease/Cardiologist.png";
import Dermatalogist from "./../../assets/disease/Dermatalogist.png";
import Internist from "./../../assets/disease/Internist.png";
import Neurologist from "./../../assets/disease/Neurologist.png";
import nutritionist from "./../../assets/disease/nutritionist.png";
import Ophthalmologist from "./../../assets/disease/Ophthalmologist.png";
import Physiotherapist from "./../../assets/disease/Physiotherapist.png";
import Psychiatrist from "./../../assets/disease/Psychiatrist.png";
import ExpertiseBtn from "./ExpertiseBtn";
/**
 * ExpertiesList Component
 *
 * Displays a list of expertise categories with buttons for selection.
 *
 * This component imports images representing different medical specialties and
 * uses the `ExpertiseBtn` component to display each category as a button.
 */
export default function ExpertiesList() {
  return (
    <ul className=" no-arrows w-[calc(100%-17px)] py-4 flex justify-start items-end gap-2 overflow-x-auto">
      <ExpertiseBtn title={"Cardiologist"} image={Cardiologist} />
      <ExpertiseBtn title={"Dermatalogist"} image={Dermatalogist} />
      <ExpertiseBtn title={"Internist"} image={Internist} />
      <ExpertiseBtn title={"Ophthalmologist"} image={Ophthalmologist} />
      <ExpertiseBtn title={"Nutritionist"} image={nutritionist} />
      <ExpertiseBtn title={"Physiotherapist"} image={Physiotherapist} />
      <ExpertiseBtn title={"Psychiatrist"} image={Psychiatrist} />
      <ExpertiseBtn title={"Neurologist"} image={Neurologist} />
    </ul>
  );
}
