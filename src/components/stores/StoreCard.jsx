import React from "react";
import { Link } from "react-router-dom";
import { store1, userDefault } from "../../assets";

const StoreCard = ({ store }) => {
  const { storeId, storeName, country, city, user } = store;
  const profilePicture = user.imageUrl;

  const strName = user.name.replace(/\s+/g, "-").toLowerCase();
  const strStoreName = storeName.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className=" overflow-hidden rounded-md shadow-xl shadow-color1">
      <img
        src={store1}
        alt="store"
        className="w-full object-cover max-h-[400px] md:max-h-[300px] lg:max-h-[200px]"
      />
      <div className="flex px-3 py-3 text-secondary">
        <Link to={`/profile/${strName}/${user.userId}`}>
          <img
            src={profilePicture ? profilePicture : userDefault}
            alt="profile_picture"
            className="rounded-full
            w-[46px] h-[46px] mr-5"
          />
        </Link>
        <div>
          <p className="font-bold text-primary">{storeName}</p>
          <p>{country}</p>
          <p>{city}</p>
        </div>
      </div>
      <Link
        to={`/stores/${strStoreName}/${storeId}`}
        className="block py-3 border bg-color1 font-semibold text-center mt-3 text-color2 hover:bg-orange-700"
      >
        Show Detail
      </Link>
    </div>
  );
};

export default StoreCard;
