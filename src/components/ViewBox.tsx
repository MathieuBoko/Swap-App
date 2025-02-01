import { swapDataItem } from "types";
import SwapDisplay from "./SwapDisplay/SwapDisplay";
import "styles/ViewBoxes.scss";

const ViewBox = ({
  swapData,
  selectedDay,
  daySwapData,
}: {
  swapData: swapDataItem[];
  selectedDay: Date | null;
  daySwapData: swapDataItem[];
}) => {
  return (
    <>
      {selectedDay !== null ? (
        <div className="viewbox daybox">
          <SwapDisplay swapData={daySwapData} />
        </div>
      ) : (
        <div className="viewBox">
          <SwapDisplay swapData={swapData} />
        </div>
      )}
    </>
  );
};

export default ViewBox;
