import { useDispatch, useSelector } from "react-redux";
import SortDoctors from "../components/book/SortDoctors";
import DoctorsFilterModal from "../components/book/DoctorsFilterModal";
import Spinner from "../components/ui/Spinner";
import { useEffect } from "react";
import { uiActions } from "../store/ui-slice";
import DoctorsListContainer from "../components/book/DoctorsListContainer";
import { cardsActions } from "../store/business-card-slice";
export default function Book() {
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
      <div className="bg-slate-100 mt-2 rounded-xl p-2">
        <SortDoctors />
        <div className="w-full flex justify-start items-start mt-2">
          <DoctorsFilterModal />
          <DoctorsListContainer />
        </div>
      </div>
    </>
  );
}
