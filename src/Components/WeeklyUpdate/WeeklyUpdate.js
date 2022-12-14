import weeklyPostlists from "../../weeklyPosts.json";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const WeeklyUpdate = () => {
  const [NoOfElements, setNoOfElements] = useState(3);
  const slice = weeklyPostlists.slice(0, NoOfElements);
  const loadMore = () => {
    setNoOfElements(NoOfElements + NoOfElements);
  };

  // display only 14 words in the discription contents
  const exceptList = weeklyPostlists.map((post) => {
    return post.content.split(" ").splice(0, 13).join(" ");
  });
  return (
    <div>
      <div className="Home-hero-container">
        {/* DESIGN TOOL */}
        <div className="Home-designTool-container">
          <h3 className="designTool-title">Weekly Update</h3>
          {slice.map((item, i) => {
            return (
              <div className="design-container" key={item.id}>
                <div>
                  <div className="design-date-container">
                    <p className="design-badge">{item.title}</p>
                    <p className="design-date">{item.date} </p>
                  </div>
                  <Link to={`weekly/${item.id}`}>
                    <h1 className="design-title">{item.heading}</h1>
                    <p className="design-desc">
                      <ReactMarkdown children={exceptList[i]} />
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to={`weekly/${item.id}`}>
                    <img src={item.image} alt="" className="desingImg" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="text-center">
        {NoOfElements === weeklyPostlists.length && <div></div>}
        {NoOfElements < weeklyPostlists.length && (
          <button
            className="mb-10 bg-[#232e52] text-white text-[1vw] p-2 rounded"
            onClick={() => loadMore()}
          >
            See More Posts ...
          </button>
        )}
      </div>
    </div>
  );
};

export default WeeklyUpdate;
