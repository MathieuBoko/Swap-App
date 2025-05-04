import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Calendar,
  Greetings,
  Copyright,
  Loader,
  InlineForm,
  NewsBox,
} from "components";
import { useGetSwapData } from "services";
import { appConstants } from "constants/appConstants";
import "styles/App.scss";

const App = () => {
  const BASEURL = process.env.REACT_APP_SWAP_APP_URL || "http://localhost:3001";

  const todayDate = new Date();

  const {
    loading,
    swapData,
    daysWithData,
    daySwapData,
    getDaySwapData,
    isDeprecated,
  } = useGetSwapData(BASEURL);

  switch (isDeprecated) {
    case true:
      return (
        <NewsBox newsBoxMessage={appConstants.NewsBox.appDeprecatedMessage} />
      );
    case false:
      return (
        <>
          <Greetings todayDate={todayDate} />
          <InlineForm BASEURL={BASEURL} todayDate={todayDate} />
          {loading ? (
            <Loader />
          ) : (
            <Calendar
              todayDate={todayDate}
              swapData={swapData}
              daysWithData={daysWithData}
              daySwapData={daySwapData}
              getDaySwapData={getDaySwapData}
            />
          )}
          <Copyright todayDate={todayDate} />
          <ToastContainer />
        </>
      );
  }
};

export default App;
