import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ReviewsAverage() {
  return (
    <>
      <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold py-4 text-center">
        Our doctors and clinics have earned
        <br className="hidden sm:block" />
        over +5000 reviwes on Google!
      </h1>
      <div className="[&_svg]:text-[#07b964] [&_svg]:text-xl text-center my-8">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} className="text-transparent" />
        <FontAwesomeIcon icon={faStarHalf} />
        <p className="text-center">Average google rating is 4.6</p>
      </div>
    </>
  );
}
