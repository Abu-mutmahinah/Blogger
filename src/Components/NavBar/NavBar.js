import { Link } from "react-router-dom";
import vector from "../../Assets/Images/Vector.png";

const NavBar = ({ setHelloStatue, helloStatue }) => {
  return (
    <div className="NavBar-Hero">
      <div className="NavBar-Container">
        <div className="NavBar-Contents">
          {/* NAVBAR LINK SECTION */}
          <div className="NavBar-Links">
            {/* BLOG LOGO  */}
            <Link
              to="/"
              onClick={() => {
                setHelloStatue("hello");
              }}
            >
              <h1 className="NavBar-Logo">BLOGGA</h1>
            </Link>
            {/* BLOG ANCHOR LINKS */}
            <div className="NavBar-Anchor-Links">
              <Link
                to="weekly"
                onClick={() => {
                  setHelloStatue("weekly");
                }}
              >
                Weekly Updates
              </Link>
              <Link
                to="design"
                onClick={() => {
                  setHelloStatue("design");
                }}
              >
                Design Tools
              </Link>

              <Link
                to="tutorial"
                onClick={() => {
                  setHelloStatue("tutorial");
                }}
              >
                Tutorials
              </Link>
              <Link
                to="library"
                onClick={() => {
                  setHelloStatue("library");
                }}
              >
                Library
              </Link>
            </div>

            <button className="NavBar-subcribe-button">Subscribe</button>
          </div>

          {/* NAVBAR TITLE SECTION */}
          <div className="">
            <div className="NavBar-Title">
              <div>
                {helloStatue === "hello" && (
                  <div className="NavBar-Title-Hello">👋 HELLO</div>
                )}
              </div>
              <div>
                {helloStatue === "design" && (
                  <div className="NavBar-Title-designtool">Design Tools</div>
                )}
              </div>

              <div>
                {helloStatue === "tutorial" && (
                  <div className="flex items-center gap-5">
                    <div className="tutorial-icon">
                      <Link
                        to="design"
                        onClick={() => {
                          setHelloStatue("design");
                        }}
                      >
                        <img src={vector} alt="" />
                      </Link>
                    </div>
                    <div className="flex">
                      <div className="t-logo">Tutorial</div>
                      <div className="t-date">AUGust 13, 2021 </div>
                    </div>
                  </div>
                )}
              </div>
              <div>
                {helloStatue === "weekly" && (
                  <div className="NavBar-Title-designtool">Weekly Update</div>
                )}
              </div>

              <div>
                {helloStatue === "library" && (
                  <div className="NavBar-Title-Hello ">👋 HELLO</div>
                )}
              </div>
              <div className="NavBar-Main-Title">
                Insights about my personal and work <br /> life, and the
                in-betweens
              </div>

              <div>
                {helloStatue === "library" && (
                  <div className="library-subtitle">
                    When products are made for you, you never realise how their
                    design can be <br /> exclusionary towards people of color.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
