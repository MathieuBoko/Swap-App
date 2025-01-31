import React from "react";

interface TableHeadProps {
  columns: { name: string; className?: string }[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map(({ name, className }) => (
          <th key={name} className={className || ""}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
