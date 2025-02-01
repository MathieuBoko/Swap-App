import { useState } from "react";
import { swapDataItem } from "types";
import { tableSchema } from "constants/tableSchema";
import TableHead from "components/Table/TableHead";
import SwapDisplayBody from "./SwapDisplayBody";
import SearchBox from "./SearchBox";
import "styles/ViewBoxes.scss";

const SwapDisplay = ({ swapData }: { swapData: swapDataItem[] }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="overflow">
        <table>
          <TableHead columns={tableSchema.SwapDisplay.head} />
          <SwapDisplayBody swapData={swapData} search={search} />
        </table>
      </div>
    </>
  );
};

export default SwapDisplay;
