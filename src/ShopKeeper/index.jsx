import items from "./items"

//Create a Table row component

import "./index.css"

function ShopKeeperApp(){
    return <div>
        <table>
            <thead>
                <th>no</th>
                <th>Name</th>
                <th>unit_cost</th>
                <th>qty</th>
                <th>Total</th>
            </thead>
            <tbody>
                {items.map((item)=>{
                    return (
                    <tr>
                        <td>{rowNumber}</td>
                        <td>{item.name}</td>
                        <td>{item.unit_cost}</td>
                        <td>{item.qty}</td>
                        <td>{item.unit_cost * item.qty}</td>


                    </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
}


export default ShopKeeperApp