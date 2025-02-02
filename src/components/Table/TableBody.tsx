import { matchesSearch } from "utils/matchesSearch";
import { SwapDataItem, TableProps } from "types";

export const TableBody = ({ swapData, search, schema }: TableProps) => {
  const filteredSwapData = swapData.filter((dataItem) =>
    matchesSearch({ dataItem, search })
  );

  const message = "No shift yet. Add yours 🤓";

  if (filteredSwapData.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={schema.length}>{message}</td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {filteredSwapData.map((dataItem, index) => (
        <tr key={index}>
          {schema.map(({ name, className, option }) => {
            let cellContent;

            switch (option?.type) {
              case "link":
                cellContent = (
                  <a
                    {...option.props}
                    href={`mailto:${dataItem[name as keyof SwapDataItem]}`}
                  >
                    {dataItem[name as keyof SwapDataItem]}
                  </a>
                );
                break;

              case "checkbox":
                cellContent = (
                  <input
                    {...option.props}
                    defaultChecked={
                      dataItem[name as keyof SwapDataItem] as boolean
                    }
                  />
                );
                break;

              default:
                cellContent = dataItem[name as keyof SwapDataItem];
            }

            return (
              <td key={name} className={className}>
                {cellContent}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
