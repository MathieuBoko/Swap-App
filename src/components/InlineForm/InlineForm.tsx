import { useState } from "react";
import { toast } from "react-toastify";
import { appConstants } from "constants/appConstants";
import { TableHead, InlineFormBody, LinkedButtons } from "components";
import { postSwapData } from "services";
import { isOutdated } from "utils";
import { SwapDataItem } from "types";
import "styles/InlineForm.scss";

export const InlineForm = ({
  BASEURL,
  todayDate,
}: {
  BASEURL: string;
  todayDate: Date;
}) => {
  const [shifts, setShifts] = useState<SwapDataItem[]>([
    {
      isOvernight: false,
      Date: "",
      Outbound: undefined,
      Inbound: undefined,
      Position: "",
      Early: false,
      Late: false,
      LTA: false,
      DO: false,
    },
  ]);

  const handleChange = (
    index: number,
    fieldName: keyof SwapDataItem,
    fieldValue: string | boolean
  ) => {
    const updatedShifts: any = [...shifts];
    updatedShifts[index][fieldName] = fieldValue;
    setShifts(updatedShifts);
  };

  const addShift = () => {
    const newShifts: any = [
      ...shifts,
      {
        isOvernight: false,
        Date: "",
        Outbound: "",
        Inbound: "",
        Position: "",
        Early: false,
        Late: false,
        LTA: false,
        DO: false,
      },
    ];
    setShifts(newShifts);
  };

  const deleteShift = (index: number) => {
    const updatedShifts = [...shifts];
    updatedShifts.splice(index, 1);
    setShifts(updatedShifts);
  };

  const ovSwitch = (index: number) => {
    const updatedShifts = [...shifts];
    updatedShifts[index].isOvernight = !updatedShifts[index].isOvernight;
    setShifts(updatedShifts);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isAnyOutdated = shifts.some(
      (shift) => shift.Date && isOutdated(todayDate, new Date(shift.Date))
    );

    isAnyOutdated
      ? toast.error("Oops... You can't submit an outdated swap 🤓")
      : postSwapData({ BASEURL, shifts, event });
  };

  return (
    <>
      <div className="inlineForm">
        <form onSubmit={handleSubmit}>
          <input
            name="Email"
            type="email"
            placeholder="Email"
            className="email-input"
            required
          />
          <div className="overflow">
            <table>
              <TableHead
                swapData={[]}
                search={""}
                schema={appConstants.InlineForm.tableContent}
              />
              <InlineFormBody
                changeHandlers={{
                  shifts,
                  handleChange,
                  addShift,
                  deleteShift,
                  ovSwitch,
                }}
              />
            </table>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
        <LinkedButtons />
      </div>
    </>
  );
};
