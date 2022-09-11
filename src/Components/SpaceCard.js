import "./SpaceCard.css";

function Spacecard({ name, desc, imgUrl }) {
  return (
    <div className="card">
      <img className="cardImage" src={imgUrl} alt="no-input"></img>
      <div className="cardHead">
        <span className="cardName">{name}</span>
        <span className="cardQty">
          <input
            className="cardQtyInput"
            type="number"
            id="quantity"
            min="1"
            max="99"
          />
        </span>
      </div>
      <div className="cardDesc">
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Spacecard;
