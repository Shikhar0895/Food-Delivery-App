/* eslint-disable react/prop-types */
import React from "react";

class UserCardClass extends React.Component{
    constructor(props){
        console.log("child contructor")
        super(props);
        this.state = {
            Count: 0,
            userInfo : {
                name: "Dummy",
                location: "default",
                Designation : "XYZ"
            }
        }

    }

    async componentDidMount(){
        console.log("Child Component did Mount")
        
            const data = await fetch("https://api.github.com/users/zachgoll")
            const json = await data.json();
            
            this.setState({
                userInfo : json
            })
        
    }

    componentDidUpdate(){
        console.log("component did update")
    }
    render(){
        console.log("Child render")
        // const {name, designation, company} = this.props;
        const {Count, userInfo} = this.state;
        
        return <div className="user-card">
            <h1>Count = {Count}</h1>
            <button onClick={()=>{
                this.setState({
                    Count : Count + 1
                })
            }}>Count+</button>
        <h2>Name : {userInfo.name}</h2>
        <h3>Location:{userInfo.location}</h3>
        <h3>Company: {userInfo.company}</h3>
    </div>
    }
}

export default UserCardClass;