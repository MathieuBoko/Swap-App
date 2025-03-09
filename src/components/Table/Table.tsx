import { TableHead, TableBody } from "components";
import { TableProps } from "types";

export const Table = ({ swapData, schema, search }: TableProps) => (
  <div className="overflow">
    <table>
      <TableHead swapData={[]} search={""} schema={schema} />
      <TableBody swapData={swapData} search={search} schema={schema} />
    </table>
  </div>
);
