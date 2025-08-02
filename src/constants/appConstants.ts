export const appConstants = {
  Greetings: {
    message: (date: string) => `Hi there! Today is ${date}`,
  },
  InlineForm: {
    tableContent: [
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
    buttons: [
      {
        label: "Swap Form",
        url: "https://app.smartsheet.com/b/form/20d18963576e477bafcbf102df2aec3d",
        className: "swap-form-button",
      },
      {
        label: "Roster",
        url: "https://www.momentumserviceslondon.com/activite",
        className: "roster-button",
      },
      {
        label: "Tutorial",
        url: "https://youtu.be/lGQ-xiyTrCk",
        className: "tutorial-button",
      },
    ],
  },
  SwapDisplay: {
    tableContent: [
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
  NewsBox: {
    appUpdateMessage: "",
    appDeprecatedMessage:
      "Sorry, hosting and maintenance come with a cost… This app is now deprecated. Thanks for using it!",
    buttonLabel: "Last update",
  },
};
