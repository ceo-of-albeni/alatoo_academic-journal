import React from "react";
import "./UserProfilePage.scss";

const UserProfilePage = () => {
  return (
    <div className="main_div">
      <div className="profile_card">
        <img
          src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
          alt=""
        />
        <div className="profile_main-info">
          <p>
            <strong>Name:</strong> Aliia
          </p>
          <p>
            <strong>Surname:</strong> Malaeva
          </p>
          <p>Position: Author</p>
          <p>Email: aliia.malaeva@alatoo.edu.kg</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
