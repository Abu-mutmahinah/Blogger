import flag from "../../Assets/Images/flag.png";
import TextPart from "./TextPart";
import tutorialPostlist from "../../tutorialPost.json";

const Tutorial = () => {
  return (
    <div className="w-[100%]">
      <div className="px-[30px]">
        <img src={flag} alt="" />
      </div>
      <TextPart />
      <div className="Home-hero-container">
        <div className="Home-designTool-container mt-[70px]">
          <h3 className="designTool-title">Other intreresing posts</h3>
          {tutorialPostlist.map((item) => {
            return (
              <div className="design-container">
                <div>
                  <div className="design-date-container">
                    <p className="design-badge">{item.title} </p>
                    <p className="design-date"> {item.date} </p>
                  </div>
                  <h1 className="design-title">{item.heading}</h1>
                  <p className="design-desc">{item.content}</p>
                </div>
                <div className="flex justify-center items-center ">
                  <div className="flex justify-center items-center">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[180px] w-[100%]"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
