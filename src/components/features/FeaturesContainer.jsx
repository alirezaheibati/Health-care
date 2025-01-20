import feature1 from "./../../assets/feature-1.png";
import feature2 from "./../../assets/feature-2.png";
import feature3 from "./../../assets/feature-3.png";
import feature4 from "./../../assets/feature-4.png";

import SingleFeature from "./SingleFeature";
/**
 * FeaturesContainer Component
 *
 * This component displays a container with multiple feature cards, each represented by the SingleFeature component.
 * It showcases different features with images, titles, and descriptions.
 */
export default function FeaturesContainer() {
  return (
    <>
      <div className="mt-3 flex items-center justify-between flex-wrap">
        <SingleFeature
          bgColor="bg-[#f1da69]"
          image={feature1}
          title="Instant Video <br /> Consultation"
          description="Connect within 60 seconds"
        />
        <SingleFeature
          bgColor="bg-[#a4dac1]"
          image={feature2}
          title="24/7 <br /> Medicines"
          description="Essentials at your door step"
        />
        <SingleFeature
          bgColor="bg-[#e7c2d3]"
          image={feature3}
          title="Accurate Lab <br /> Tests"
          description="Sample pick up at your home"
        />
        <SingleFeature
          bgColor="bg-[#92bdf5]"
          image={feature4}
          title="Find Doctors <br /> Near You"
          description="Confirmed appointments"
        />
      </div>
    </>
  );
}
