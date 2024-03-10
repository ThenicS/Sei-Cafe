// import "./MenuList.css";
import OrderHistoryListItem from "../OrderHistoryListItem/OrderHistoryListItem";
import "./OrderHistoryList.css"

export default function OrderHistoryList({ orderHistoryItem }) {
  // const items = orderHistiryItem.map((item) => (
  //   item
  // ));

  const renderOrders = orderHistoryItem.map((order) => {

    return (
          <div key={order.id} className="order-card">
            <h3>Order Id: {order.orderId}</h3>
            <div className="order-details">
              <p>${order.orderTotal}</p>
              <p>{order.totalQty} items</p>
              <p>{order.createdAt}</p>
            </div>
          </div>
          // <OrderHistoryList key={order.id} order={order} />
    )
  })

  //   const renderOrdersDetail = orderHistoryItem.map((order) => {

  //   return (
  //         <OrderHistoryDetail key={order.id} order={order} />
  //   )
  // })

  console.log(orderHistoryItem);

  return (
  <main className="MenuList">

    {renderOrders}


  </main>
  )
}
// const items = menuItems.map((item) => (
//     <MenuListItem key={item._id} menuItem={item} handleAddTOOrder={handleAddTOOrder} handleChangeQty={handleChangeQty}  />
//   ));