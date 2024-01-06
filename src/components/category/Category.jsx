import { category, post, action } from "../../data";
import "./category.css";
// import { Link, NavLink } from "react-router-dom";
import PropBtn from "../props/PropBtn";

const Category = () => {
  return (
    <div className="category">
      <div className="categoryContainer genP">
        <div className="categoryNav">
          {category.map(({ text, path }) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <li>
                <a href={path}>{text}</a>
                {/* <NavLink >{link}</NavLink> */}
              </li>
            );
          })}
        </div>
        <div className="categoryContent">
          <div>
            {post.map(
              ({ id, img, name, category, date, title, desc, path }) => {
                return (
                  <div key={id} className="cat">
                    <div className="left">
                      {/* this will be a Link when click dirext thr user to author's profile */}
                      <img src={img} alt="profile" />
                      <span>
                        <h5>{name}</h5>
                        <small>{category}</small>
                      </span>
                    </div>

                    <div className="right">
                      <span className="titledate">
                        <h5 className="date">{date}</h5>
                        <span>
                          <h4 className="title">{title}</h4>
                          <p className="desc">{desc}</p>
                        </span>
                        {/* <span>
                            {
                                action.map(({id, like, likeImg, commImg, comment, share, shareImg}) => {
                                    <span>
                                        <img src={likeImg} alt="like" />
                                        <small>{like}</small>
                                    </span>
                                    
                                })
                            }
                        </span> */}
                      </span>

                      <PropBtn btnTile="View Blog" />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
