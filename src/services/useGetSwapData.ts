import { useState, useEffect } from "react";
import { format } from "date-fns";
import { SwapDataItem } from "types";

export const useGetSwapData = (BASEURL: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [swapData, setSwapData] = useState<SwapDataItem[]>();
  const [daysWithData, setDaysWithData] = useState<SwapDataItem[]>();
  const [daySwapData, setDaySwapData] = useState<SwapDataItem[]>();

  useEffect(() => {
    fetch(`${BASEURL}/dbData`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const daysWithData = data?.map((item: SwapDataItem) => item.Date);
        setDaysWithData(daysWithData);
        setSwapData(data);
        setLoading(false);
      })
      .catch((error) => {
        throw new Error("Failed to fetch Calendar Data:", error);
      });
  }, [BASEURL]);

  const getDaySwapData = (selectedDay: Date) => {
    const formatedSelectedDay = format(selectedDay, "dd/MM/yyyy");
    const daySwapData = swapData?.filter(
      (item: SwapDataItem) => item.Date === formatedSelectedDay
    );
    setDaySwapData(daySwapData);
  };

  return { loading, swapData, daysWithData, daySwapData, getDaySwapData };
};
