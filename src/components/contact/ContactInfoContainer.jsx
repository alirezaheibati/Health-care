import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactInfo from "./ContactInfo";
export default function ContactInfoContainer() {
  return (
    <>
      <ContactInfo
        title={"Email"}
        icon={faEnvelope}
        infos={["support@doctoreto.com"]}
      />
      <hr />
      <ContactInfo
        title={"Customer support"}
        icon={faPhone}
        infos={[
          "+98 - 912 043 1012",
          "+98 - 919 674 8134",
          "Working days: 8:00 to 22:00",
          "Thursdays and Fridays: 9:00 to 13:00",
        ]}
      />
    </>
  );
}
