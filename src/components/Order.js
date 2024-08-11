import React from "react";

const Order = ({orders, addOrder, removeOrder}) => {


  const calculateTotal = () => {
    return orders
      .reduce((total, order) => total + order.quantity * order.price, 0)
      .toFixed(2);
  };
  return (
    <div className="mt-4">
      <h3>Your Order</h3>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.title} x {order.quantity}</td>
                <td className="text-end">
                  <div className="btn-group" role="group">
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeOrder(order.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => addOrder(order.id)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-end">
                  SEK {(order.quantity * order.price).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <td><strong>Total</strong></td>
              <td></td>
              <td className="text-end"><strong>SEK {calculateTotal()}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
