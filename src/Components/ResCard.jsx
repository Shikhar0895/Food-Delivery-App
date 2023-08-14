/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

ResCard.propTypes = {
  name: PropTypes.string,
  cuisine: PropTypes.string,
  rating: PropTypes.string,
  ETA: PropTypes.string,
};

function ResCard({ resData }) {
  
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData.info;
  
  return (
    <div className="w-56 rounded-md p-2 transition ease-in-out delay-70 hover:scale-95  ">
      <img
        className="inline rounded-md"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="reslogo"
      />
      <div >
      <h3 className="text-base font-bold">{name}</h3>
      <h4 className="truncate" id="details">{cuisines.join(",")}</h4>
      <h4 id="details">{avgRating}</h4>
      <h4 id="details">{costForTwo}</h4>
      </div>
    </div>
  );
}

export default ResCard;
