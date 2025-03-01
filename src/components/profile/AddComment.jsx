import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { uiActions } from "../../store/ui-slice";

const validationSchema = Yup.object({
  patient: Yup.string().required("Name is required"),
  reason: Yup.string().required("Reason is required"),
  comment: Yup.string().required("Comment is required"),
});

export default function AddComment({ doctorId }) {
  const dispatch = useDispatch();
  const initialValues = {
    patient: "",
    reason: "",
    comment: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const responese = await fetch(
        `https://parseapi.back4app.com/classes/DocReview`,
        {
          method: "POST",
          headers: {
            "X-Parse-Application-Id":
              "Iz7O9D835Yq51vOgGfffJceqQ2Fm9hri2JwVyDGu",
            "X-Parse-REST-API-Key": "49U8AGgLP9GzHHz3vGnj2bRVJv256evN5OG9WgeN",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.patient,
            reason: values.reason,
            comment: values.comment,
            doctorId,
          }),
        }
      );
      if (!responese.ok) {
        throw new Error("Fetching comments failed");
      }
    } catch (err) {
      console.log(err);
    }
    resetForm();
    setSubmitting(false);
    dispatch(
      uiActions.showErrorModal({
        message:
          "Thankfully We have received your comment. we will show it after validation.",
        title: "Thank you",
      })
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="mt-4 rounded-xl bg-gray-100 p-4">
          <p className="text-center text-lg font-semibold">Add comment</p>

          <div className="py-2">
            <label htmlFor="patient" className="block mb-1">
              Name:
            </label>
            <Field
              type="text"
              id="patient"
              name="patient"
              className="w-full rounded-lg h-9 px-2 outline-none"
            />
            <ErrorMessage
              name="patient"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="py-2">
            <label htmlFor="reason" className="block mb-1">
              Reason for visiting doctor:
            </label>
            <Field
              type="text"
              id="reason"
              name="reason"
              className="w-full rounded-lg h-9 px-2 outline-none"
            />
            <ErrorMessage
              name="reason"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="py-2">
            <label htmlFor="comment" className="block mb-1">
              Your comment:
            </label>
            <Field
              as="textarea"
              name="comment"
              id="comment"
              className="w-full resize-none rounded-lg h-16 px-2 outline-none"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-[#252c62] text-slate-50 rounded-lg w-full py-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Add Comment"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
