import { memo } from "react";
import QHeader from "../components/questions/QHeader";
import Question from "../components/questions/Question";
function FAndQ() {
  const patientsQuestions = [
    {
      question: "Do I have to pay money when booking appointmen?",
      answer:
        "Dear user, when taking your turn, you pay 15,000 Tomans for infrastructure costs, fees and 10% value added tax so that this turn is assigned to you. You have to pay the doctor's visit fee in full at his office.",
      id: "qp1",
    },
    {
      question: "Is it possible to cancel the appointment?",
      answer:
        "Yes, if for any reason you cannot attend the doctor's office on the scheduled day and at the time of your appointment.",
      id: "qp2",
    },
    {
      question: "Are all doctors members of your site?",
      answer:
        "No, but our system is always trying to invite reputable and expert doctors to cooperate.",
      id: "qp3",
    },
    {
      question: "Do you advertise doctors in your system?",
      answer:
        "No, Doctorto is just a space for effective communication between doctor and citizen, facilitating the process of searching and making appointments with doctors for domestic and foreign patients, and easy access to medical information for the general public.",
      id: "qp4",
    },
    {
      question: "Can I find the nearest clinic or clinic to my home?",
      answer:
        "Yes, you can find the nearest doctor's office, clinic or clinic that is a member of this system by searching in the doctors or clinics section and specifying your desired area.",
      id: "qp5",
    },
    {
      question: "Why should I use your site?",
      answer:
        "Doktorto helps you to easily search and make an appointment with the doctor you want.",
      id: "qp6",
    },
  ];
  const doctorsQuestions = [
    {
      question: "How can I be a member of your system?",
      answer:
        "Dear doctor, you can call ui and share your request with our colleagues to make the necessary arrangements.",
      id: "qd1",
    },
    {
      question: "How my appointments are going to be arranged?",
      answer:
        "It is possible that you can open, edit or cancel your appointments based on your office's process and your annual schedule in coordination with the support team.",
      id: "qd2",
    },
    {
      question:
        "If I have a technical problem during work, how will it be solved?",
      answer:
        "The support section of our team is available from 9:00 to 22:00 to answer your technical problems.",
      id: "qd3",
    },
    {
      question: "What are the benefits of your system for doctors?",
      answer:
        "Our system makes you visible and introduces your specialties and activities to them. It allows you to manage appointments online.",
      id: "qd4",
    },
  ];
  return (
    <div className=" bg-gray-100 mt-2 rounded-lg py-4 px-2 w-full">
      <QHeader title={"Users related questions"} />
      {patientsQuestions.map((item) => (
        <Question key={item.id} question={item.question} answer={item.answer} />
      ))}
      <QHeader title={"Doctors related questions"} />
      {doctorsQuestions.map((item) => (
        <Question key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
export default memo(FAndQ);
