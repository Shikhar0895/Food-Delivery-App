import "./assets/App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import SearchSection from "./Components/SearchSection";
import { useEffect, useState, lazy, Suspense, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUS from "./Components/AboutUs";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import RestaurantMenuPage from "./Components/RestaurantMenuPAge";
import useRestaurantListing from "./utils/useRestaurantListing";
import useOnlineStatus from "./utils/useOnlineStatus";
import SearchPage from "./Components/SearchPage";
import MyContext from "./data/AppContext";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(()=>import("./Components/Grocery"))

function App() {

  const [sharedState, setSharedState] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const data = useContext(MyContext);
  const [userName, setUserName] = useState(data.loggedUserInfo);


  const RestaurantListing =  useRestaurantListing();
  console.log(RestaurantListing);
  const onlineState = useOnlineStatus();
  // updates the shared state on filter action
  const updateSharedState = (newValue) => {
    setFilteredList(newValue);
  };

  useEffect(() =>{
    
    setSharedState(RestaurantListing?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
},[RestaurantListing])

 

 
  // returned JSX
  return (
    <>
      <MyContext.Provider value={{loggedUserInfo : userName, setUserName} }>
      <div className="appContainer">
        <Header />
        

        {onlineState === false ?<div className = "offlineStatus"><h1>{`Look's like your Internet has been disrupted`} </h1> </div> :
         <Routes>
          <Route
            path="/"
            element={
              <>
              
                <SearchSection
                  currentList={sharedState}
                  updateSharedState={updateSharedState}
                />
                
                <Body refList={sharedState} filteredList={filteredList} />
              </>
            }
          />
          
          <Route path="/AboutUS" element={<AboutUS />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenuPage />} />
          <Route path="/Grocery" element={<Suspense fallback = {<h1>Loading....</h1>}><Grocery/></Suspense>}/>
          <Route path="/SearchPage" element = {<SearchPage/>}/>
        </Routes>}
        <Footer />
      </div>
          </MyContext.Provider>
    </>
  );
}

export default App;
