import "./forge-card.css";

const ForgeCard = ({ data }) => {
  return (
    <div className="forge-card h-full border">
      <h4 className="text-xl font-semibold">{data?.Heading}</h4>
      <p>{data?.Content}</p>
    </div>
  );
};

export default ForgeCard;
