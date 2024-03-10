// import "./MenuListItem.css";

export default function OrderHistoryListItem({  }) {

  return (
    <div className="OrderHistoryListItem">
      <h3>OrderHistoryListItem</h3>
      <div className="emoji flex-ctr-ctr"></div>
      <div className="name"></div>
      <div className="buy">
        <span></span>
        <button className="btn-sm" onClick={() => "clicked"} >
          test
        </button>
      </div>
    </div>
  );
}