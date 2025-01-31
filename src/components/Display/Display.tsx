import { useState } from "react";
import { swapDataItem } from "types";
import { tableSchema } from "constants/tableSchema";
import TableHead from "components/Table/TableHead";
import TableBody from "./DisplayBody";
import SearchBox from "./SearchBox";
import "styles/ViewBoxes.scss";

const Display = ({ swapData }: { swapData: swapDataItem[] }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="overflow">
        <table>
          <TableHead columns={tableSchema.Display.head} />
          <TableBody swapData={swapData} search={search} />
        </table>
      </div>
    </>
  );
};

export default Display;
