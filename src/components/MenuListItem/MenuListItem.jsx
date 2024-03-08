import "./MenuListItem.css";

export default function MenuListItem({ menuItem, handleAddTOOrder }) {
  return (
    <div className="MenuListItem">
      <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddTOOrder(menuItem._id)} >
          ADD
        </button>
      </div>
    </div>
  );
}
