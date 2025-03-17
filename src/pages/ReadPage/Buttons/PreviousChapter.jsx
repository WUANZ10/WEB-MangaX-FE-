import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "../readPageStyle.css";

export function PreviousChapter() {
  const navigate = useNavigate();
  const params = useParams();

  const handleClick = () => {
    if (Number(params.chapter) > 0) {
      window.scrollTo(0, 0);
      navigate(`/read/${params.comicId}/${Number(params.chapter) - 1}`);
    }
  };

  return (
    <button
      className={`no-style center semibold flex1 left ${
        Number(params.chapter) > 0 ? "white" : ""
      }`}
      onClick={handleClick}
    >
      <IoIosArrowBack className="icon" /> Previous Chapter
    </button>
  );
}