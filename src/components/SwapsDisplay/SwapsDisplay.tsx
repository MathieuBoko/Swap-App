import { useState } from "react";
import { SwapDataItem } from "types";
import { appConstants } from "constants/appConstants";
import { Table, SearchBox } from "components";
import "styles/ViewBoxes.scss";

export const SwapsDisplay = ({ swapData }: { swapData: SwapDataItem[] }) => {
  const [search, setSearch] = useState("");
  const schema = appConstants.SwapDisplay.tableContent;

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <Table swapData={swapData} schema={schema} search={search} />
    </>
  );
};
