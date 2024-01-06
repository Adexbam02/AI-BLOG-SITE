import "./header.css";
import { People } from "../../assets/img/index";
import { point } from "../../data";
import PropBtn from "../props/PropBtn"

const Header = () => {
  return (
    <header className="sectioP ontainer">
      <div className="headerContainer">
        <div className="headerTop genP">
          <div className="headerTop-left">
            <div className="main">
              <h5>Your Journey to Tomorrow Begins Here</h5>
              <h3>Explore the Frontiers of Artificial Intelligence</h3>
              <p>
                Welcome to the epicenter of AI innovation. FutureTech AI News is
                your passport to a world where machines think, learn, and
                reshape the future. Join us on this visionary expedition into
                the heart of AI.
              </p>
            </div>
            <div className="stat">
              <div className="three">
                <h4>
                  300<span>+</span>
                </h4>
                <small>Resources available</small>
              </div>
              <div className="twelve">
                <h4>
                  12k<span>+</span>
                </h4>
                <small>Total Downloads</small>
              </div>
              <div>
                <h4>
                  10k<span>+</span>
                </h4>
                <small>Active Users</small>
              </div>
            </div>
          </div>

          <div className="headerTop-right">
            <img src={People} alt="People" className="ppl" />
            <span>
              <h3>Explore 1000+ resources</h3>
              <p>
                Over 1,000 articles on emerging tech trends and breakthroughs.
              </p>
            </span>
            
            <PropBtn btnTile="Explore Resources"/>
          </div>
        </div>
        <div className="headerBottom genP">
          <div className="headerCards">
            {point.map(({ id, img, title, small, info, Btn }) => {
              return (
                <div
                  key={id}
                  className={`headerCard ${id === 1 ? "first" : ""} ${
                    id === 2 ? "second" : ""
                  }`}
                >
                  <div className="left">
                    <img src={img} alt="" />

                    <span>
                      <h5>{title}</h5>
                      <small>{small}</small>
                    </span>

                    <p>{info}</p>
                  </div>

                  <div className="path">
                    <a href="/">
                      <img src={Btn} alt="" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
