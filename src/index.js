import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/100";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />
    <img
      className="food-img"
      alt="burger"
      src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    />
    <img
      className="food-img"
      alt="cheese"
      src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"
    />
    <img
      className="food-img"
      alt="dips"
      src="https://hips.hearstapps.com/hmg-prod/images/blooming-quesadilla-ring-1674080631.jpeg"
    />
  </div>,
  document.getElementById("root")
);
