
import MyContext from "../data/AppContext"

export default function Grocery() {

   

    return <div className="groceryContainer">
        <h1>Groceries</h1>
        <MyContext.Consumer  >
        {(data) => <h1>{data.loggedUserInfo}</h1>}
        </MyContext.Consumer>
        <ul>
            <li>Veggies</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Atta, Rice & Dal</li>
            <li>HouseHold Needs</li>
        </ul>
    </div>
}