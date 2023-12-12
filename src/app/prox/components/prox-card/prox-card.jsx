import "./prox-card.css";

const ProxCard = ({ data }) => {
  return (
    <div className="card prox-card">
      <div className="box">
        <div className="content">
          <h3>{data?.title}</h3>
          <p>{data?.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ProxCard;
