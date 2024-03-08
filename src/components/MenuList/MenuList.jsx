import "./MenuList.css";
import MenuListItem from "../MenuListItem/MenuListItem";

export default function MenuList({ menuItems, handleAddTOOrder, handleChangeQty }) {
  const items = menuItems.map((item) => (
    <MenuListItem key={item._id} menuItem={item} handleAddTOOrder={handleAddTOOrder} handleChangeQty={handleChangeQty}  />
  ));
  return <main className="MenuList">{items}</main>;
}
