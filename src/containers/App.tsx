import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Calendar, Greetings, Copyright, Loader, InlineForm } from "components";
import { useGetSwapData } from "services";
import "styles/App.scss";

const App = () => {
  const BASEURL = process.env.REACT_APP_SWAP_APP_URL || "";

  const todayDate = new Date();

  const { loading, swapData, daysWithData, daySwapData, getDaySwapData } =
    useGetSwapData(BASEURL);

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
};

export default App;
