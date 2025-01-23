import DoctorsList from "./DoctorsList";
import ExpertiesList from "./ExpertiesList";
/**
 * DoctorsContainer Component
 *
 * Displays a container for booking doctors for in-clinic consultations,
 * including a list of expertise categories and a list of doctors.
 *
 * Imports:
 * - `DoctorsList` (component): Displays a list of doctor profiles.
 * - `ExpertiesList` (component): Displays a list of expertise categories.
 *
 * Structure:
 * - Header: A heading that introduces the section.
 * - `ExpertiesList`: A list of expertise categories for users to choose from.
 * - `DoctorsList`: A list of doctor profiles available for booking.
 */
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
