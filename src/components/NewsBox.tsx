import "styles/ViewBoxes.scss";

export const NewsBox = ({ newsBoxMessage }: { newsBoxMessage: string }) => (
  <div className="viewBox newsBox">{newsBoxMessage}</div>
);
