import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products"
    );
    setUsers(await response.json());
  };
  useEffect(() => {
    getUsers();
  });

  return (
    <div className="home1">
      <div className="home__container">
        <img
          className="homeImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {/* Product ID, title,price,rating,image */}
        <div className="homeRow">
          {users.map((props) => {
            // console.log(product)
            return <Product data={props} key={props.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
