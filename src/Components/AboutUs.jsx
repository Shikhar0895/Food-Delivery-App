import UserCard from "./UserCard";
import UserCardClass from "./UserCardClass";
import React from "react";
class AboutUS extends React.Component{
constructor(props){
  super(props)
  console.log("parent Constructor")
}

componentDidMount(){
  console.log("Parent did Mount")
}

render(){
  console.log("parent render")
  return <>
  <div className="pages">
    <h1>AboutUs</h1>
    </div>
  <UserCard name ={"ShikharS"} designation={"frontEnd DEV"} company={"XYZ"} />
  <UserCardClass name = {"ShikharS from Class" } location={""} company={"XYZ"}/>
  
  </>
    }


}


export default AboutUS;
