import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

/**
 * ErrorModal Component
 *
 * This component displays an error modal with a title and message. The modal can be closed by clicking the "Ok" button.
 *
 * Usage:
 * <ErrorModal />
 */
export default function ErrorModal() {
  const error = useSelector((state) => state.ui.errorModal);
  const dispatch = useDispatch();
  function closeModalHandler() {
    dispatch(uiActions.hideErrorModal());
  }
  return (
    <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center z-[10000]">
      <div className="absolute top-0 left-0 bg-black/50 w-full h-full"></div>
      <div className=" bg-slate-50 rounded-xl px-4 w-[400px] max-w-full relative">
        <p className="font-bold text-center my-4">{error.title}</p>
        <p>{error.message}</p>
        <button
          className="block mx-auto bg-slate-900 text-slate-50 rounded-lg py-1 px-8 my-4"
          onClick={closeModalHandler}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
