import { toast } from "react-toastify";
import { SwapDataItem } from "types";

export const postSwapData = ({
  BASEURL,
  shifts,
  event,
}: {
  BASEURL: string;
  shifts: SwapDataItem[];
  event:
    | React.BaseSyntheticEvent<HTMLInputElement>
    | React.FormEvent<HTMLFormElement>;
}) => {
  shifts.forEach((shift) => {
    const formData = {
      Email: event.target.elements.Email.value,
      Date: shift.Date,
      Outbound: shift.Outbound,
      Inbound: shift.isOvernight ? shift.Inbound + "+1d" : shift.Inbound,
      Position: shift.Position,
      Early: shift.Early,
      Late: shift.Late,
      LTA: shift.LTA,
      DO: shift.DO,
      Note: shift.Note,
    };

    fetch(`${BASEURL}/formData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form submission failed");
        }
        return response.json();
      })
      .then((data) => {
        if (["AV", "Platform"].includes(shift.Position as string)) {
          toast.success(
            `${shift.Position} on ${shift.Date} submitted successfully!`
          );
        } else {
          toast.success(
            `${shift.Outbound} - ${shift.Inbound} on ${shift.Date} submitted successfully!`
          );
        }

        setTimeout(function () {
          window.location.reload();
        }, 5000);
      })
      .catch((error) => {
        if (["AV", "Platform"].includes(shift.Position as string)) {
          toast.error(`${shift.Position} on ${shift.Date} submission failed`);
        } else {
          toast.error(
            `${shift.Outbound} - ${shift.Inbound} on ${shift.Date} submission failed`
          );
        }
      });
  });
};
