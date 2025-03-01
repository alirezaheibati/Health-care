import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function Question({ question, answer }) {
  const [answerVisibility, setanswerVisibility] = useState(false);
  function handleAnswerBoxVisibility() {
    setanswerVisibility((prev) => !prev);
  }
  return (
    <>
      <div className=" max-w-[600px] bg-white overflow-hidden shadow-qbox-shadow rounded-lg mx-auto mb-3">
        <div
          className={`flex justify-between items-center py-2 px-4 ${
            answerVisibility ? "border-b-2" : "border-b-0"
          } hover:bg-[#252c62] hover:text-slate-50`}
        >
          <p className="text-lg">{question}</p>
          <button
            className={`h-8 w-8 rounded-full flex justify-center items-center bg-slate-50 shrink-0 text-slate-900`}
            onClick={handleAnswerBoxVisibility}
          >
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`transition ${
                answerVisibility ? "rotate-0" : "rotate-180"
              }`}
            />
          </button>
        </div>

        <p
          className={`px-4 text-gray-500 ${
            answerVisibility ? "max-h-48 py-4" : "max-h-0 py-0"
          } transition-all`}
        >
          {answer}
        </p>
      </div>
    </>
  );
}
