import { useSelector } from "react-redux";
import ContactBox from "../components/contact/ContactBox";
import ContactInfoContainer from "../components/contact/ContactInfoContainer";
import WriteFotUs from "../components/contact/WriteFotUs";
import ErrorModal from "../components/ui/ErrorModal";

export default function ContactUs() {
  const errorModal = useSelector((state) => state.ui.errorModal);

  return (
    <div className=" bg-gray-100 mt-2 rounded-lg py-4 px-2 w-full flex justify-start items-start gap-4 flex-col md:flex-row">
      {errorModal.visibility && <ErrorModal />}

      <ContactBox title={"Write for us"}>
        <WriteFotUs />
      </ContactBox>
      <ContactBox title={"Contact us"}>
        <ContactInfoContainer />
      </ContactBox>
    </div>
  );
}
