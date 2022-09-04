import flag from "../../Assets/Images/flag.png";
import TextPart from "./TextPart";
import tutorialPostlist from "../../tutorialPost.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";

const Tutorial = () => {
  const [NoOfElements, setNoOfElements] = useState(3);
  const slice = tutorialPostlist.slice(0, NoOfElements);
  const loadMore = () => {
    setNoOfElements(NoOfElements + NoOfElements);
  };

  return (
    <div className="w-[100%]">
      <div className="flex justify-center items-center">
        <img src={flag} alt="" className="flagImg" />
      </div>
      <TextPart />
      <div className="Home-hero-container">
        <div className="Home-designTool-container mt-[70px]">
          <h3 className="designTool-title">Other intreresing posts</h3>
          {slice.map((item) => {
            return (
              <div className="design-container">
                <div>
                  <div className="design-date-container">
                    <p className="design-badge">{item.title} </p>
                    <p className="design-date"> {item.date} </p>
                  </div>
                  <h1 className="design-title">{item.heading}</h1>
                  <div className="design-desc">
                    <Markdown children={item.content} escape />
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                  <div className="flex justify-center items-center">
                    <Link to={`/tutorial/${item.id}`}>
                      <img src={item.image} alt="" className="desingImg " />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        {NoOfElements >= tutorialPostlist.length && <div></div>}
        {NoOfElements < tutorialPostlist.length && (
          <button
            className="mb-10 bg-[#232e52] text-white text-[1vw] p-2 rounded"
            onClick={() => loadMore()}
          >
            See More Posts...
          </button>
        )}
      </div>
    </div>
  );
};

export default Tutorial;
