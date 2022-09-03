import { useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import designPostlist from "../../designPost.json";

const DesignTool = () => {
  const [NoOfElements, setNoOfElements] = useState(3);
  const slice = designPostlist.slice(0, NoOfElements);
  const loadMore = () => {
    setNoOfElements(NoOfElements + NoOfElements);
  };

  return (
    <div className="Home-hero-container">
      {/* DESIGN TOOL */}
      <div className="Home-designTool-container">
        <h3 className="designTool-title">Design Tools</h3>
        {slice.map((item) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date">{item.date}</p>
                </div>
                <Link to={`/design/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">
                    <ReactMarkdown children={item.content} />
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`/design/${item.id}`}>
                  <img src={item.image} alt="" className="h-[13vw]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        {NoOfElements >= designPostlist.length && (
          <button className="mb-10 text-[#232e52] text-[1vw] p-2 rounded">
            {" "}
            No Post left
          </button>
        )}
        {NoOfElements < designPostlist.length && (
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

export default DesignTool;
