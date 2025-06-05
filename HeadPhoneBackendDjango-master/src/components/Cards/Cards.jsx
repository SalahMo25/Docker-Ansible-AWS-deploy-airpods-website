import React, { useEffect, useState } from "react";
// import data from "./cardsData";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../AppContexts/StoreContext";
import { toast, Bounce } from "react-toastify";
import Axios from "axios";

const Cards = () => {
  const apiBase = "http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000";
  const [discountProducts, setDiscountProducts] = useState([]);
  
  async function getDiscountProducts() {
    // let { data } = await Axios.get(`http://127.0.0.1:8000/discount_product`);
    let { data } = await Axios.get(`http://internal-priv-lb-1390608194.us-east-1.elb.amazonaws.com:8000/discount_product`);
    console.log(data);
    setDiscountProducts(data);
  }

  useEffect(() => {
    getDiscountProducts();
  }, []);

  const { add } = useGlobalContext();
  return (
    <section className="cards m-3 p-2">
      <h2 className="text-white text-2xl lg:text-5xl text-center mb-4 uppercase">
        Seasonal Discount
      </h2>
      <div
        className="grid gap-5 lg:grid-cols-3 xl:grid-cols-3"
        data-aos="fade-up"
        data-aos-once="true"
      >
        {discountProducts.map((p, i) => {
          // const {id, name, image, prePrice, price} = card;
          return (
            <div key={i} className="card gap-5 p-3">
              <img className="card-img" src={p.image} alt="product" />
              <div className="card-content lg:p-4">
                <h2 className="card-name">{p.name}</h2>
                <div className="price">
                  <div>
                    <div className="price-dash"></div>
                    <span className="old-price">${p.prePrice}</span>
                  </div>
                  <span className="new-price">${p.price}</span>
                </div>
                <div className="flex py-3 flex-col gap-10 md:flex-col xl:flex-row ">
                  <button className="capitalize">
                    <Link to={`/products/${p.id}`} className="card-btn-1">
                      more details
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      add(p)
                      toast.success("Product added to the cart", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        transition: Bounce,
                      });
                    }}
                  >
                    <Link className="card-btn-2 capitalize">add to cart</Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cards;
