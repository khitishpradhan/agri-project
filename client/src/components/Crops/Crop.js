import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";

const Crop = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/crops/${props.title}`);
  };

  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" alt={props.alt} />
        <h2 className="card__title">{props.title}</h2>
      </div>
      <button className="card__btn" onClick={handleClick}>
        View Info
      </button>
    </div>
  );
};

export default Crop;
