import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "../readPageStyle.css";


export function NextChapter({max}) {
  const navigate = useNavigate();
  const params = useParams()

  const handleClick = () => {
    if (Number(params.chapter) < max) {
        window.scrollTo(0, 0);
    navigate(`/read/${params.comicId}/${Number(params.chapter)-1}`);
    }
  };

  return             <button className="no-style center white semibold flex1 right" onClick={handleClick}>Next Chapter <IoIosArrowForward className="icon"/></button>
  

};
;