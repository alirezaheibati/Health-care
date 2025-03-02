import { Formik, Field, Form, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { uiActions } from "../../store/ui-slice";

const validationSchema = Yup.object({
  patient: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  comment: Yup.string().required("Comment is required"),
});
export default function WriteFotUs() {
  const dispatch = useDispatch();
  const initialValues = {
    patient: "",
    email: "",
    subject: "",
    comment: "",
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    resetForm();
    setSubmitting(false);
    dispatch(
      uiActions.showErrorModal({
        message: "Thank you for your message. We will contact you if needed.",
        title: "Message Received",
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
        <Form className="rounded-xl p-4">
          <p>
            In case of any issues with the appointment booking process or your
            appointment, please call us. These messages are only sent to the
            management section, and we do not respond to your medical questions.
          </p>
          <div className="py-2">
            <label htmlFor="patient" className="block mb-1">
              Name:
            </label>
            <Field
              type="text"
              id="patient"
              name="patient"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="patient"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="py-2">
            <label htmlFor="email" className="block mb-1">
              E-mail:
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="py-2">
            <label htmlFor="subject" className="block mb-1">
              Subject of your message:
            </label>
            <Field
              type="text"
              id="subject"
              name="subject"
              className="w-full rounded-lg h-9 px-2 outline-none bg-gray-100"
            />
            <ErrorMessage
              name="subject"
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
              className="w-full resize-none rounded-lg h-20 px-2 outline-none bg-gray-100"
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
            {isSubmitting ? "Sending..." : "Send message"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
