import { memo, useEffect, useState } from "react";
import PatientComment from "./PatientComment";
import InnerSpinner from "../ui/InnerSpinner";

function CommentsContainer({ doctorId, doctor }) {
  const [comments, setComments] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    async function loadComments() {
      try {
        const responese = await fetch(
          `https://parseapi.back4app.com/classes/DocReview?where={"doctorId":"${doctorId}","isVerified":true}`,
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
        setComments(data.results);
        setSpinner(false);
      } catch (err) {
        console.log(err);
        setSpinner(false);
      }
    }
    if (doctorId) {
      loadComments();
    }
  }, [doctorId]);
  let content = <p>There is no comment for this doctor.</p>;
  if (comments.length > 0) {
    content = comments.map((comment) => (
      <PatientComment key={comment.objectId} comment={comment} />
    ));
  }
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl">
      <h2 className="text-center text-lg font-semibold">
        Comments about {doctor}
      </h2>
      {spinner ? <InnerSpinner /> : content}
    </div>
  );
}
export default memo(CommentsContainer);
