import "./benefit-card.css";

const BenefitCard = ({ data }) => {
  return (
    <div className="ag-courses_item shadow-md">
      <div href="#" className="ag-courses-item_link h-full">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">{data?.heading}</div>

        <div className="ag-courses-item_date-box">{data?.desc}</div>
      </div>
    </div>
  );
};

export default BenefitCard;
