import DoctorsList from "./DoctorsList";
import ExpertiesList from "./ExpertiesList";
export default function DoctorsContainer() {
  return (
    <div className="text-[#252c62] my-12">
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-4">
        Book best doctors for
        <br />
        an in-clinic consultation
      </h1>
      <ExpertiesList />
      <DoctorsList />
    </div>
  );
}
