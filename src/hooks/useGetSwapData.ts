import { useState, useEffect } from "react";
import { format } from "date-fns";
import { SwapDataItem } from "types";

const useGetSwapData = (BASEURL: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [swapData, setSwapData] = useState<SwapDataItem[]>();
  const [daysWithData, setDaysWithData] = useState<SwapDataItem[]>();
  const [daySwapData, setDaySwapData] = useState<SwapDataItem[]>();

  useEffect(() => {
    fetch(`${BASEURL}/dbData`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Calendar Data");
        }
        return response.json();
      })
      .then(({ data }) => {
        const daysWithData = data?.map((item: SwapDataItem) => item.Date);
        setDaysWithData(daysWithData);
        setSwapData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching calendar data:", error);
      });
  }, [BASEURL]);

  const getDaySwapData = (selectedDay: Date) => {
    const formatedSelectedDay = selectedDay
      ? format(selectedDay, "dd/MM/yyyy")
      : null;
    const daySwapData = swapData?.filter(
      (item: SwapDataItem) => item.Date === formatedSelectedDay
    );
    setDaySwapData(daySwapData);
  };

  return { loading, swapData, daysWithData, daySwapData, getDaySwapData };
};

export default useGetSwapData;
