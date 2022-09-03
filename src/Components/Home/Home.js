import weeklyPostlist from "../../weeklyPosts.json";
import designPostlist from "../../designPost.json";
import tutorialPostlist from "../../tutorialPost.json";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
const Home = () => {
  const designTools = designPostlist.slice(-3);
  const weeklyUpdates = weeklyPostlist.slice(-3);
  const tutorials = tutorialPostlist.slice(-3);

  return (
    <div className="Home-hero-container">
      {/* DESIGN TOOL */}
      <div className="Home-designTool-container">
        <h3 className="designTool-title">Design Tools</h3>
        {designTools.map((item) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date">{item.date} </p>
                </div>
                <Link to={`design/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">
                    <ReactMarkdown children={item.content} />
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`design/${item.id}`}>
                  <img src={item.image} alt="" className="h-[13vw]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* WEEKLY UPDATE */}

      <div className="Home-designTool-container mt-5">
        <h3 className="designTool-title">Weekly Updates</h3>
        {weeklyUpdates.map((item) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date"> {item.date} </p>
                </div>
                <Link to={`weekly/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">{item.content}</p>
                </Link>
              </div>
              <div>
                <Link to={`weekly/${item.id}`}>
                  <img src={item.image} alt="" className="h-[13vw]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* TUTORIAL */}
      <div className="Home-designTool-container mt-5">
        <h3 className="designTool-title">Tutorials</h3>
        {tutorials.map((item) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date">{item.date} </p>
                </div>
                <Link to={`tutorial/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">{item.content}</p>
                </Link>
              </div>
              <div>
                <Link to={`tutorial/${item.id}`}>
                  <img src={item.image} alt="" className="h-[13vw]" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
