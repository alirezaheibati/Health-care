import DoctorsContainer from "../components/doctors/DoctorsContainer.jsx";
import FeaturesContainer from "../components/features/FeaturesContainer.jsx";
import Footer from "../components/footer/Footer.jsx";
import Hero from "../components/hero/Hero.jsx";
import Highlights from "../components/highlights/Highlights.jsx";
import ReviewContainer from "../components/user-review/ReviewContainer.jsx";

import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import { cardsActions } from "../store/business-card-slice";
export default function Home() {
  const spinnerVisibility = useSelector((state) => state.ui.spinnerVisibility);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(uiActions.showSpinner());
    async function loadBusinessCards() {
      try {
        const responese = await fetch(
          "https://parseapi.back4app.com/classes/Doctors?order=-rating",
          {
            headers: {
              "X-Parse-Application-Id":
                "Iz7O9D835Yq51vOgGfffJceqQ2Fm9hri2JwVyDGu",
              "X-Parse-REST-API-Key":
                "49U8AGgLP9GzHHz3vGnj2bRVJv256evN5OG9WgeN",
            },
          }
        );
        if (!responese.ok) {
          throw new Error("Fetching items failed");
        }
        const data = await responese.json();
        dispatch(uiActions.hideSpinner());
        dispatch(cardsActions.setCards(data.results));
        console.log(data.results);
      } catch (err) {
        dispatch(uiActions.hideSpinner());
        console.log(err);
      }
    }
    loadBusinessCards();
  }, []);
  return (
    <>
      {spinnerVisibility && <Spinner />}
      <Hero />
      <FeaturesContainer />
      <DoctorsContainer />
      <Highlights />
      <ReviewContainer />
      <Footer />
    </>
  );
}
