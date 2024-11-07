import React from 'react';
import items from './items';
import './index.css';

function ShopKeeperApp() {
    return (
        <div>
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
              <td>{item.unit_cost * item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopKeeperApp;
