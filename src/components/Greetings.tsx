import { useState } from "react";
import { format } from "date-fns";
import { NewsBox } from "components";
import { appConstants } from "constants/appConstants";

export const Greetings = ({ todayDate }: { todayDate: Date }) => {
  const [showNewsBox, setShowNewsBox] = useState(false);
  const formatedTodayDate = format(todayDate, "MMMM do, y O");

  const newsBoxMessage = appConstants.NewsBox.appUpdateMessage;
  const hasMessage = newsBoxMessage.length > 0;

  const toggleNewsBox = () => {
    setShowNewsBox(!showNewsBox);
  };

  return (
    <div className="greetings">
      <span>{appConstants.Greetings.message(formatedTodayDate)}</span>
      <img src="/favicon/favicon-16x16.png" alt="🤓" />
      <br />
      {hasMessage && (
        <button className="newsButton" onClick={toggleNewsBox}>
          {appConstants.NewsBox.buttonLabel}
        </button>
      )}
      {showNewsBox && <NewsBox newsBoxMessage={newsBoxMessage} />}
    </div>
  );
};
