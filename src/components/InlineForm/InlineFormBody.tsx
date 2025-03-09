import { SwapDataItem } from "types";

type ChangeHandlers = {
  shifts: SwapDataItem[];
  handleChange: (
    index: number,
    fieldName: keyof SwapDataItem,
    fieldValue: string | boolean
  ) => void;
  addShift: () => void;
  deleteShift: (index: number) => void;
  ovSwitch: (index: number) => void;
};

type InlineFormBodyProps = {
  changeHandlers: ChangeHandlers;
};

export const InlineFormBody: React.FC<InlineFormBodyProps> = ({
  changeHandlers,
}) => {
  const { shifts, handleChange, addShift, deleteShift, ovSwitch } =
    changeHandlers;

  return (
    <>
      {shifts.map((shift, index) => {
        const hideInputs = ["AV", "Platform"].includes(
          shift.Position as string
        );

        return (
          <tbody key={index}>
            <tr>
              <td>
                <button
                  className="add-line"
                  type="button"
                  aria-label="Add-shift"
                  onClick={addShift}
                />
                <button
                  className="delete-line"
                  type="button"
                  aria-label="Delete-shift"
                  onClick={() => deleteShift(index)}
                />
              </td>
              <td>
                <input
                  name={`Position-${index}`}
                  type="radio"
                  value="AV"
                  aria-label="Available-checkbox"
                  onChange={(e) => handleChange(index, "Position", "AV")}
                ></input>
              </td>
              <td>
                <input
                  name={`Position-${index}`}
                  type="radio"
                  value="Platform"
                  aria-label="Platform-checkbox"
                  onChange={(e) => handleChange(index, "Position", "Platform")}
                ></input>
              </td>
              <td>
                <input
                  type="date"
                  value={shift.Date}
                  aria-label="Date-picker"
                  onChange={(e) => handleChange(index, "Date", e.target.value)}
                  required
                ></input>
              </td>
              <td>
                <input
                  className={hideInputs ? "hidden" : ""}
                  type="number"
                  placeholder="9###"
                  min="9000"
                  max="9199"
                  value={shift.Outbound}
                  aria-label="Outbound-train-input"
                  onChange={(e) =>
                    handleChange(index, "Outbound", e.target.value)
                  }
                ></input>
              </td>
              <td>
                <input
                  className={hideInputs ? "hidden" : ""}
                  type="number"
                  placeholder="9###"
                  min="9000"
                  max="9199"
                  value={shift.Inbound}
                  aria-label="Inbound-train-input"
                  onChange={(e) =>
                    handleChange(index, "Inbound", e.target.value)
                  }
                ></input>
              </td>
              <td>
                <input
                  className={hideInputs ? "hidden" : "switch"}
                  type="checkbox"
                  aria-label="Overnight-switch-checkbox"
                  onChange={() => ovSwitch(index)}
                ></input>
              </td>
              <td>
                <input
                  name={`Position-${index}`}
                  type="radio"
                  value="FIRST"
                  aria-label="First-class-position-checkbox"
                  onChange={(e) => handleChange(index, "Position", "FIRST")}
                ></input>
              </td>
              <td>
                <input
                  name={`Position-${index}`}
                  type="radio"
                  value="BAR"
                  aria-label="Bar-position-checkbox"
                  onChange={(e) => handleChange(index, "Position", "BAR")}
                ></input>
              </td>
              <td>
                <input
                  name={`Position-${index}`}
                  type="radio"
                  value="PURSER"
                  aria-label="Purser-position-checkbox"
                  onChange={(e) => handleChange(index, "Position", "PURSER")}
                ></input>
              </td>
              <td className="FOR"></td>
              <td className="FOR">
                <input
                  type="checkbox"
                  checked={shift.Early}
                  aria-label="Early-desired-checkbox"
                  onChange={(e) =>
                    handleChange(index, "Early", e.target.checked)
                  }
                ></input>
              </td>
              <td className="FOR">
                <input
                  type="checkbox"
                  checked={shift.Late}
                  aria-label="Late-desired-checkbox"
                  onChange={(e) =>
                    handleChange(index, "Late", e.target.checked)
                  }
                ></input>
              </td>
              <td className="FOR">
                <input
                  type="checkbox"
                  checked={shift.LTA}
                  aria-label="Long-turn-around-desired-checkbox"
                  onChange={(e) => handleChange(index, "LTA", e.target.checked)}
                ></input>
              </td>
              <td className="FOR">
                <input
                  type="checkbox"
                  checked={shift.DO}
                  aria-label="Day-off-desired-checkbox"
                  onChange={(e) => handleChange(index, "DO", e.target.checked)}
                ></input>
              </td>
              <td className="FOR">
                <input
                  type="text"
                  placeholder="Note"
                  aria-label="Note-input"
                  onChange={(e) => handleChange(index, "Note", e.target.value)}
                ></input>
              </td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};
