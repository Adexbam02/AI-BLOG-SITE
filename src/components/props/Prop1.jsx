import "./prop1.css"
// eslint-disable-next-line react/prop-types
const Prop1 = ({ insight, title, btnn }) => {
  return (
    <div className="futureTech">
      <div className="genP">
        <div>
          <h4>{insight}</h4>
          <h2>{title}</h2>
        </div>

        <div className="dis">
          <a href="/" className="btnn">
            {btnn}
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Icon">
                <path
                  className="arr"
                  id="Vector 431 (Stroke)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.375 3.625L16.75 3.625C16.9158 3.625 17.0747 3.69085 17.1919 3.80806C17.3092 3.92527 17.375 4.08424 17.375 4.25V13.625C17.375 13.9702 17.0952 14.25 16.75 14.25C16.4048 14.25 16.125 13.9702 16.125 13.625V5.75888L4.69194 17.1919C4.44786 17.436 4.05214 17.436 3.80806 17.1919C3.56398 16.9479 3.56398 16.5521 3.80806 16.3081L15.2411 4.875L7.375 4.875C7.02982 4.875 6.75 4.59518 6.75 4.25C6.75 3.90482 7.02982 3.625 7.375 3.625Z"
                  fill="#FFD11A"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prop1;