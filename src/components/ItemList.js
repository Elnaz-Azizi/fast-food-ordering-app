import React, { useState } from "react";
import Item from "./Item";
import Order from "./Order";
import p1 from '../images/1.jpg'; 
import { FaMoon } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa";



const ItemList = () => {
  const [orders, setOrders] = useState([]);
  const [theme, setTheme] = useState("light");
  const items = [
    {
      id: 1,
      title: "Margherita",
      ingredients: "Cheese, Tomato",
      price: 120,
      imageUrl: p1
      ,
    },  
    {
      id: 2,
      title: "Chicken",
      ingredients: "Cheese, Paprika, Onion, Grilled Chicken, Mushroom",
      price: 145,
      imageUrl: "https://via.placeholder.com/300x200?text=Pizza+Chicken",
    },
    {
      id: 3,
      title: "Vegetarian",
      ingredients: "Cheese, Tomato, Bell Peppers, Olives, Onion",
      price: 130,
      imageUrl: "https://via.placeholder.com/300x200?text=Pizza+Vegetarian",
    },
    {
      id: 4,
      title: "Pepperoni",
      ingredients: "Cheese, Tomato, Pepperoni",
      price: 140,
      imageUrl: "https://via.placeholder.com/300x200?text=Pizza+Pepperoni",
    },
    {
      id: 5,
      title: "Hawaiian",
      ingredients: "Cheese, Ham, Pineapple",
      price: 135,
      imageUrl: "https://via.placeholder.com/300x200?text=Pizza+Hawaiian",
    },
    {
      id: 6,
      title: "BBQ Chicken",
      ingredients: "Cheese, BBQ Sauce, Grilled Chicken, Onion",
      price: 150,
      imageUrl: "https://via.placeholder.com/300x200?text=Pizza+BBQ Chicken",
    },
  ];

  const handleAddToOrder = (item) => {
    console.log("ITEM ", item);
    setOrders((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.id === item.id);
      if (existingOrder) {
        return prevOrders.map((order) =>
          order.id === item.id
            ? { ...order, quantity: order.quantity + 1 }
            : order
        );
      } else {
        return [...prevOrders, { ...item, quantity: 1 }];
      }
    });
  };

  const addOrder = (itemId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === itemId ? { ...order, quantity: order.quantity + 1 } : order
      )
    );
  };

  const removeOrder = (itemId) => {
    setOrders((prevOrders) =>
      prevOrders
        .map((order) =>
          order.id === itemId
            ? { ...order, quantity: order.quantity - 1 }
            : order
        )
        .filter((order) => order.quantity > 0)
    );
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container py-4 ${theme === "light" ? "bg-light" : "bg-dark"} ${theme === "light" ? "text-dark" : "text-light"}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-center w-100">
          Pizza Menu
        </h1>
        <button className={`btn ${theme === "light" ? "btn-secondary text-white" : "btn-light text-dark"}`} onClick={toggleTheme}>
           {theme === "light" ? <FaMoon size={25} /> : <FaRegMoon size={25} />}
        </button>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((item, index) => (
          <div className="col" key={index}>
            <Item
              title={item.title}
              ingredients={item.ingredients}
              price={item.price}
              imageUrl={item.imageUrl}
              onAddToOrder={() => handleAddToOrder(item)}
              theme={theme}  
            />
          </div>
        ))}
      </div>
      <Order orders={orders} addOrder={addOrder} removeOrder={removeOrder} />
    </div>
  );
};

export default ItemList;
