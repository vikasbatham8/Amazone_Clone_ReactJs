import React, { useCallback, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import "./Product.css";

 //const getItems=()=>{
 //let allList=localStorage.getItem('list');
 //console.log(allList);
  // if(allList){     return JSON.parse(localStorage.getItem('list'));
//     return[];
  //  }
//}

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = (item) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.data.id,
        title: props.data.title,
        image: props.data.image,
        category: props.data.category,
        price: props.data.price,
        rating: props.data.rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="productInfo">
        <p>{props.data.title}</p>
        <p className="productPrice">
          <strong>{`price $: ${props.data.price}`}</strong>
        </p>
        <div className="productRating">
          {Array(props.data.rating)
            .fill()
            .map((i) => (
              <p key={i}>❤️</p>
            ))}
        </div>
      </div>

      <img src={props.data.image} alt="#" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}
export default Product;
//<button onClick={addToBasket}>Add to Basket</button>

