import { TableProps } from "types";

export const TableHead = ({ schema }: TableProps) => (
  <thead>
    <tr>
      {schema.map(({ name, className }) => (
        <th key={name} className={className || ""}>
          {name}
        </th>
      ))}
    </tr>
  </thead>
);
