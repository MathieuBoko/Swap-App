import { SwapDataItem } from "types";
import SwapDisplay from "./SwapsDisplay/SwapsDisplay";
import "styles/ViewBoxes.scss";

const ViewBox = ({
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
