import { useState } from "react";
import { SwapDataItem } from "types";
import { tableSchema } from "constants/tableSchema";
import { Table } from "components/Table/Table";
import SearchBox from "./SearchBox";
import "styles/ViewBoxes.scss";

const SwapsDisplay = ({ swapData }: { swapData: SwapDataItem[] }) => {
  const [search, setSearch] = useState("");
  const schema = tableSchema.SwapDisplay.tableContent;

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <Table swapData={swapData} schema={schema} search={search} />
    </>
  );
};

export default SwapsDisplay;
