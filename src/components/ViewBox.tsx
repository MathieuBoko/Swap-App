import { SwapDataItem } from "types";
import { SwapsDisplay } from "./SwapsDisplay/SwapsDisplay";
import "styles/ViewBoxes.scss";

export const ViewBox = ({
  swapData,
  selectedDay,
  daySwapData,
}: {
  swapData: SwapDataItem[];
  selectedDay: Date | null;
  daySwapData: SwapDataItem[];
}) => {
  return (
    <>
      {selectedDay !== null ? (
        <div className="viewbox daybox">
          <SwapsDisplay swapData={daySwapData} />
        </div>
      ) : (
        <div className="viewBox">
          <SwapsDisplay swapData={swapData} />
        </div>
      )}
    </>
  );
};
