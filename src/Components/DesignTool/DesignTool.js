import designPostlist from "../../designPost.json";
const DesignTool = () => {
  return (
    <div className="Home-hero-container">
      {/* DESIGN TOOL */}
      <div className="Home-designTool-container">
        <h3 className="designTool-title">Design Tools</h3>
        {designPostlist.map((item) => {
          return (
            <div className="design-container" key={item.id}>
              <div>
                <div className="design-date-container">
                  <p className="design-badge">{item.title}</p>
                  <p className="design-date">{item.date}</p>
                </div>
                <h1 className="design-title">{item.heading}</h1>
                <p className="design-desc">{item.content}</p>
              </div>
              <div>
                <img src={item.image} alt="" className="h-[180px]" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesignTool;
