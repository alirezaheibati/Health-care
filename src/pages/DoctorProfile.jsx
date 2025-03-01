import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { uiActions } from "../store/ui-slice";
import Spinner from "../components/ui/Spinner";
import DoctorInfo from "../components/profile/DoctorInfo";
import AboutDoctor from "../components/profile/AboutDoctor";
import DoctorAddress from "../components/profile/DoctorAddress";
import CommentsContainer from "../components/profile/CommentsContainer";
import BookAppointment from "../components/profile/BookAppointment";
import AddComment from "../components/profile/AddComment";
import ErrorModal from "../components/ui/ErrorModal";
export default function DoctorProfile() {
  const spinnerVisibility = useSelector((state) => state.ui.spinnerVisibility);
  const errorModal = useSelector((state) => state.ui.errorModal);

  const dispatch = useDispatch();
  const [doctorInfo, setDoctorInfo] = useState({});
  const params = useParams();
  const doctorId = params.doctorID;

  useEffect(() => {
    dispatch(uiActions.showSpinner());
    async function loadBusinessCard() {
      try {
        const responese = await fetch(
          `https://parseapi.back4app.com/classes/Doctors/${doctorId}`,
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
        setDoctorInfo(data);
      } catch (err) {
        dispatch(uiActions.hideSpinner());
        console.log(err);
      }
    }
    loadBusinessCard();
  }, []);

  return (
    <>
      {spinnerVisibility && <Spinner />}
      {errorModal.visibility && <ErrorModal />}
      <div className="flex justify-start gap-4 flex-wrap lg:flex-nowrap pb-8">
        <div className="flex flex-col justify-start w-full lg:w-1/2 xl:w-2/5">
          <DoctorInfo card={doctorInfo} />
          <AboutDoctor doctor={doctorInfo.username} about={doctorInfo.about} />
          <DoctorAddress
            doctor={doctorInfo.username}
            address={doctorInfo.address}
            coordinates={doctorInfo.coords}
          />
        </div>
        <div className="flex flex-col justify-start grow">
          <BookAppointment
            doctor={doctorInfo.username}
            address={doctorInfo.address}
            fee={doctorInfo.fee}
          />
          <CommentsContainer
            doctorId={doctorInfo.objectId}
            doctor={doctorInfo.username}
          />
          <AddComment doctorId={doctorInfo.objectId} />
        </div>
      </div>
    </>
  );
}
