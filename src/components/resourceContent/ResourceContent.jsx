import PropBtn from "../props/PropBtn";
import PropDownload from "../props/propDownload";
import "./resourceContent.css";
import { People2, VR, Ebook } from "../../assets/img/index";

const ResourceContent = () => {
  return (
    <div className="resourceCont">
      <div className="resourceContContainer genP">
        <div className="top ">
          <div className="topLeft">
            <img src={Ebook} alt="" />
            <h3>Ebooks</h3>
            <p>
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </p>
            <PropBtn btnTile="Download Ebooks Now" />
            <PropDownload people={People2}/>
          </div>

          <div className="topRight topic">
            <span className="textTitle">
              <h4>Variety of Topics</h4>
              <p>
                Topics include AI in education (25%), renewable energy (20%),
                healthcare (15%), space exploration (25%), and biotechnology
                (15%).
              </p>
            </span>
            <img src={VR} alt="" />
            <span className="tolFor">
              <span className="total">
                <small>Total Ebooks</small>
                <h4>Over 100 ebooks</h4>
              </span>

              <span className="format">
                <span className="downF">
                  <small>Download Formats</small>
                  <h4>PDF format for access.</h4>
                </span>

                <PropBtn btnTile="Preview" />
              </span>
            </span>
            <span className="insight">
              <small>Average Author Expertise</small>
              <h4>
                Ebooks are authored by renowned experts with an average of 15
                years of experience
              </h4>
            </span>
          </div>
        </div>

        <div className="lineRes"></div>

        <div className="bottom">
          
        </div>
      </div>
    </div>
  );
};

export default ResourceContent;
