/* eslint-disable react/prop-types */
 const UserCard = ({name, designation, company}) => {
    // console.log(props)
    return <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Designation: {designation}</h3>
        <h3>Company: {company}</h3>
    </div>
 }
 export default UserCard;