import { useState } from "react";
import { format } from "date-fns";
import NewsBox from "./NewsBox";

const Greetings = ({ todayDate }: { todayDate: Date }) => {
  const [showNewsBox, setShowNewsBox] = useState(false);
  const formatedTodayDate = format(todayDate, "MMMM do, y O");

  const newsBoxMessage = "";
  const hasMessage = newsBoxMessage.length > 0;

  const toggleNewsBox = () => {
    setShowNewsBox(!showNewsBox);
  };

  return (
    <div className="greetings">
      <span>Hi there! Today is {formatedTodayDate}</span>
      <img src="/favicon/favicon-16x16.png" alt="🤓" />
      <br />
      {hasMessage && (
        <button className="newsButton" onClick={toggleNewsBox}>
          {" "}
          Last update
        </button>
      )}
      {showNewsBox && <NewsBox newsBoxMessage={newsBoxMessage} />}
    </div>
  );
};

export default Greetings;
