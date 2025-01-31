export const tableSchema = {
  InlineForm: {
    head: [
      { name: "SHIFT" },
      { name: "AV" },
      { name: "Platform" },
      { name: "Date" },
      { name: "Outbound" },
      { name: "Inbound" },
      { name: "Overnight" },
      { name: "FIRST" },
      { name: "BAR" },
      { name: "PURSER" },
      { name: "FOR:", className: "FOR" },
      { name: "Early", className: "FOR" },
      { name: "Late", className: "FOR" },
      { name: "LTA", className: "FOR" },
      { name: "DO", className: "FOR" },
      { name: "Note", className: "FOR" },
    ],
  },
  Display: {
    head: [
      { name: "Date" },
      { name: "Outbound" },
      { name: "Inbound" },
      { name: "Position" },
      { name: "Email" },
      { name: "FOR:", className: "FOR" },
      { name: "Early", className: "FOR" },
      { name: "Late", className: "FOR" },
      { name: "LTA", className: "FOR" },
      { name: "DO", className: "FOR" },
      { name: "Note", className: "FOR" },
      { name: "Sent" },
    ],
  },
};

// <th>Date</th>
//         <th>Outbound</th>
//         <th>Inbound</th>
//         <th>Position</th>
//         <th>Email</th>
//         <th className="FOR">FOR:</th>
//         <th className="FOR">Early</th>
//         <th className="FOR">Late</th>
//         <th className="FOR">LTA</th>
//         <th className="FOR">DO</th>
//         <th className="FOR">Note</th>
//         <th>Sent</th>
