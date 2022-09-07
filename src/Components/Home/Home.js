import weeklyPostlist from "../../weeklyPosts.json";
import designPostlist from "../../designPost.json";
import tutorialPostlist from "../../tutorialPost.json";
import rehypeRaw from "rehype-raw";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Home = () => {
  const designTools = designPostlist.slice(-3);
  const weeklyUpdates = weeklyPostlist.slice(-3);
  const tutorials = tutorialPostlist.slice(-3);

  // display only 14 words in the discription contents
  const exceptList1 = designTools.map((post) => {
    return post.content.split(" ").splice(0, 13).join(" ");
  });

  const exceptList2 = weeklyUpdates.map((post) => {
    return post.content.split(" ").splice(0, 13).join(" ");
  });
  const exceptList3 = tutorials.map((post) => {
    return post.content.split(" ").splice(0, 13).join(" ");
  });
  return (
    <div className="Home-hero-container">
      {/* DESIGN TOOL */}
      <div className="Home-designTool-container">
        <h3 className="designTool-title">Design Tools</h3>
        {designTools.map((item, i) => {
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
                    <ReactMarkdown
                      children={exceptList1[i]}
                      rehypePlugins={[rehypeRaw]}
                    />
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`design/${item.id}`}>
                  <img src={item.image} alt="" className="desingImg" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* WEEKLY UPDATE */}

      <div className="Home-designTool-container mt-5">
        <h3 className="designTool-title">Weekly Updates</h3>
        {weeklyUpdates.map((item, i) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date"> {item.date} </p>
                </div>
                <Link to={`weekly/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">
                    <ReactMarkdown
                      children={exceptList2[i]}
                      rehypePlugins={[rehypeRaw]}
                    />
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

      {/* TUTORIAL */}
      <div className="Home-designTool-container mt-5">
        <h3 className="designTool-title">Tutorials</h3>
        {tutorials.map((item, i) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date">{item.date} </p>
                </div>
                <Link to={`tutorial/${item.id}`}>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">
                    <ReactMarkdown
                      children={exceptList3[i]}
                      rehypePlugins={[rehypeRaw]}
                    />
                  </p>
                </Link>
              </div>
              <div>
                <Link to={`tutorial/${item.id}`}>
                  <img src={item.image} alt="" className="desingImg" />
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
