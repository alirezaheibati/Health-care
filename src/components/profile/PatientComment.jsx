import {
  faQuoteLeft,
  faQuoteRight,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PatientComment({ comment }) {
  return (
    <div className="p-2 border rounded-xl mt-2">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <p className="bg-sky-100 w-8 h-8 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-sky-500" />
          </p>
          <p className="text-lg">{comment.username}</p>
        </div>
        <p className="text-sm text-gray-400">
          ({comment.createdAt.slice(0, 10)})
        </p>
      </div>
      <p className="my-2 text-gray-600">
        <FontAwesomeIcon icon={faQuoteLeft} className="mr-1" />
        {comment.comment} <FontAwesomeIcon icon={faQuoteRight} />
      </p>
      <p className="border bg-gray-200 rounded-lg p-1 text-sm text-gray-500">
        <span className="text-gray-700">Reason for visiting doctor:</span>{" "}
        {comment.reason}
      </p>
    </div>
  );
}
