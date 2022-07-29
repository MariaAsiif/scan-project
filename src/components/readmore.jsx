import React, { useState } from 'react'

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 200) : text}
        <br/>
        <button onClick={toggleReadMore} className="read-or-hide ">
          {isReadMore ? "Read More" : "Show Less"}
        </button>
      </p>
    );
  };

export default ReadMore