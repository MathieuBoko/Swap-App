export const tableSchema = {
  InlineForm: {
    content: [
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
  SwapDisplay: {
    content: [
      { name: "Date" },
      { name: "Outbound" },
      { name: "Inbound" },
      { name: "Position" },
      {
        name: "Email",
        option: {
          type: "link",
          props: {
            target: "_blank",
            rel: "noreferrer",
            className: "Email",
          },
        },
      },
      { name: "FOR:", className: "FOR" },
      {
        name: "Early",
        className: "FOR",
        option: {
          type: "checkbox",
          props: {
            type: "checkbox",
            className: "nohover",
          },
        },
      },
      {
        name: "Late",
        className: "FOR",
        option: {
          type: "checkbox",
          props: {
            type: "checkbox",
            className: "nohover",
          },
        },
      },
      {
        name: "LTA",
        className: "FOR",
        option: {
          type: "checkbox",
          props: {
            type: "checkbox",
            className: "nohover",
          },
        },
      },
      {
        name: "DO",
        className: "FOR",
        option: {
          type: "checkbox",
          props: {
            type: "checkbox",
            className: "nohover",
          },
        },
      },
      { name: "Note", className: "FOR" },
      { name: "Sent" },
    ],
  },
};
