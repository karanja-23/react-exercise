import React from "react";
import items from "./items";
import "./index.css";
import Screen from "./screen";

function ShopKeeperApp() {
  return (
    <div>
      <Screen />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Unit Cost</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.unit_cost}</td>
              <td>{item.qty}</td>
              <td>Ksh {(item.unit_cost * item.qty).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopKeeperApp;
