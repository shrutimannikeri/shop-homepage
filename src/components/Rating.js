import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function Rating({ rating }) {
  const rate = Number(rating);
  const star = [];
  for (var i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(<FontAwesomeIcon icon={faStar} className="fill" key={i} />);
    }
    else {
      star.push(<FontAwesomeIcon icon={faStar} className="nofill" key={i} />);
    }
  }
  return (
    <div>
      {rate > 0 ? star : null}
    </div>
  );
}
