import { swapDataItem } from "types";
import Display from "./Display/Display";
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
          <Display swapData={daySwapData} />
        </div>
      ) : (
        <div className="viewBox">
          <Display swapData={swapData} />
        </div>
      )}
    </>
  );
};

export default ViewBox;
