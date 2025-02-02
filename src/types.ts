export interface SwapDataItem {
  Date?: string;
  Outbound?: number;
  Inbound?: number;
  Position?: string;
  Email?: string;
  Early?: boolean;
  Late?: boolean;
  LTA?: boolean;
  DO?: boolean;
  Note?: string;
  Sent?: string;
  isOvernight?: boolean;
}

export interface TableProps {
  swapData: SwapDataItem[] | [];
  search: string | "";
  schema: {
    name: string;
    className?: string;
    option?: {
      type: string;
      props?: {
        type?: string;
        className?: string;
        target?: string;
        rel?: string;
      };
    };
  }[];
}
