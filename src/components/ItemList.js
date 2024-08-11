import React, { useState } from "react";
import Item from "./Item";
import Order from "./Order";

const ItemList = () => {
  const [orders, setOrders] = useState([]);
  const items = [
    {
      id: 1,
      title: "Pizza Margarita",
      ingredients: "Cheese, Tomato",
      price: 120,
    },
    {
      id: 2,
      title: "Pizza Chicken",
      ingredients: "Cheese, Paprika, Onion, Grilled Chicken, Mushroom",
      price: 145,
    },
    {
      id: 3,
      title: "Pizza Vegetarian",
      ingredients: "Cheese, Tomato, Bell Peppers, Olives, Onion",
      price: 130,
    },
    {
      id: 4,
      title: "Pizza Pepperoni",
      ingredients: "Cheese, Tomato, Pepperoni",
      price: 140,
    },
    {
      id: 5,
      title: "Pizza Hawaiian",
      ingredients: "Cheese, Ham, Pineapple",
      price: 135,
    },
    {
      id: 6,
      title: "Pizza BBQ Chicken",
      ingredients: "Cheese, BBQ Sauce, Grilled Chicken, Onion",
      price: 150,
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

  return (
    <div className="container">
      <div className="row">
        {items.map((item, index) => (
          <div className="col-md-4" key={index}>
            <Item
              title={item.title}
              ingredients={item.ingredients}
              price={item.price}
              onAddToOrder={() => handleAddToOrder(item)}
            />
          </div>
        ))}
      </div>
      <Order orders={orders} addOrder={addOrder} removeOrder={removeOrder} />
    </div>
  );
};

export default ItemList;
