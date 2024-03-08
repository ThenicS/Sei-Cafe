import { useState, useEffect, useRef } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api"
import "./NewOrderPage.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo/Logo";
import MenuList from "../../components/MenuList/MenuList";
import CategoryList from "../../components/CategoryList/CategoryList";
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import UserLogOut from "../../components/UserLogOut/UserLogOut";

export default function NewOrderPage({ user, setUser }) {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [cart, setCart] = useState(null);
  const categoriesRef = useRef([]);
  const navigate = useNavigate()

  // The empty dependency array causes the effect
  // to run ONLY after the FIRST render
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = [
        ...new Set(items.map((item) => item.category.name)),
      ];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart()
  }, []);

  async function handleAddTOOrder(itemId) {
    const cart = await ordersAPI.addItemToCart(itemId)
    setCart(cart)
    // console.log(`add item: ${itemId}`)
    // setCart(cart)
  }

  async function handleChangeQty(itemId, newQty) {
    const cart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(cart)
  }

  async function handleCheckout () {
    await ordersAPI.checkout();
    navigate('/orders')
  }

  return (
    <main className="NewOrderPage">
      <aside>
        <Logo />
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        <Link to="/orders" className="button btn-sm">
          PREVIOUS ORDERS
        </Link>
        <UserLogOut user={user} setUser={setUser} />
      </aside>
      <MenuList
        menuItems={menuItems.filter((item) => item.category.name === activeCat)}
        handleAddTOOrder={handleAddTOOrder}
      />
      <OrderDetail order={cart}
      handleChangeQty={handleChangeQty}
      handleCheckout={handleCheckout}
      />
    </main>
  );
}
