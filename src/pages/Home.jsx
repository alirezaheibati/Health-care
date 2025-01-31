import DoctorsContainer from "../components/doctors/DoctorsContainer.jsx";
import FeaturesContainer from "../components/features/FeaturesContainer.jsx";
import Footer from "../components/footer/Footer.jsx";
import TopNav from "../components/header/TopNav.jsx";
import Hero from "../components/hero/Hero.jsx";
import Highlights from "../components/highlights/Highlights.jsx";
import ReviewContainer from "../components/user-review/ReviewContainer.jsx";
export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <FeaturesContainer />
      <DoctorsContainer />
      <Highlights />
      <ReviewContainer />
      <Footer />
    </>
  );
}
