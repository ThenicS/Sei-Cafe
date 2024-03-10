import { useState, useEffect, useRef } from "react";
import * as ordersHistoryAPI from "../../utilities/orderHistory-api"
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../components/Logo/Logo";

import UserLogOut from "../../components/UserLogOut/UserLogOut";

import OrderHistoryList from "../../components/OrderHistory/OrderHistoryList";

import OrderHistoryDetail from "../../components/OrderHistoryDetail/OrderHistoryDetail";


export default function OrderHistoryPage({ user, setUser }) {
  
  const [orderHistoryItem, setOrderHistoryItem] = useState([])
  const orderHistoryRef = useRef([])

  useEffect(function () {
    async function getItem() {
      const items = await ordersHistoryAPI.getOrderHistory();
      setOrderHistoryItem([...orderHistoryItem, ...items]);
    }
    getItem();
  }, []);

  return (
    <main className="OrderHistoryPage">
      <aside>
        <Logo />
        <Link to="/orders/new" className="button btn-sm">NEW ORDERS</Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>

      <div>
        <OrderHistoryList orderHistoryItem={orderHistoryItem} />
        <OrderHistoryDetail orderHistoryItem={orderHistoryItem} />
      </div>

      



    </main>
  );
}
