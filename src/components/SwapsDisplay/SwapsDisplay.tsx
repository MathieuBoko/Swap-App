import { useState } from "react";
import { SwapDataItem } from "types";
import { tableSchema } from "constants/tableSchema";
import { Table, SearchBox } from "components";
import "styles/ViewBoxes.scss";

export const SwapsDisplay = ({ swapData }: { swapData: SwapDataItem[] }) => {
  const [search, setSearch] = useState("");
  const schema = tableSchema.SwapDisplay.tableContent;

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <Table swapData={swapData} schema={schema} search={search} />
    </>
  );
};
