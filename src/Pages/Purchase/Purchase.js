import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import useAuth from "../../Hooks/useAuth";

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const {user} = useAuth();
  const initialInfo = {
    name: user.displayName,
    email: user.email,
    status: "pending",
    phone: ""
  };
  const [orderInfo, setOrderInfo] = useState(initialInfo);
  const {productId} = useParams();

  const handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrderInfo = {...orderInfo};
    newOrderInfo[field] = value;
    setOrderInfo(newOrderInfo);
  };
  const handleOrder = e => {
    // send to the server
    fetch("https://quiet-eyrie-55711.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(orderInfo)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert("Successfully Ordered!");
        }
      });
    e.preventDefault();
  };

  useEffect(() => {
    fetch(`https://quiet-eyrie-55711.herokuapp.com/products/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [product]);
  return (
    <div className="container text-start">
      <div class="row  g-4 mt-5">
        <div className="col-lg-8 col-md-12 col-sm-12">
          <h1>
            <strong>Product Name:</strong> {product?.name}
          </h1>
          <p>
            <strong>Product Description:</strong> {product?.desc}
          </p>
          <h3>Price: {product?.price}</h3>
          <img src={product?.img} alt={product?.name} />
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Name
            </label>
            <input
              type="text"
              value={user?.displayName}
              onBlur={handleOnChange}
              name="name"
              class="form-control w-75"
              id="formGroupExampleInput"
              placeholder="Your name"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Email
            </label>
            <input
              type="text"
              value={user?.email}
              onBlur={handleOnChange}
              name="email"
              class="form-control w-75"
              id="formGroupExampleInput2"
              placeholder="Your email"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control w-75"
              onBlur={handleOnChange}
              name="address"
              id="formGroupExampleInput"
              placeholder="Your address"
            />
          </div>
          <div class="mb-3">
            <label for="formGroupExampleInput2" class="form-label">
              Phone
            </label>
            <input
              type="text"
              class="form-control w-75"
              onBlur={handleOnChange}
              name="phone"
              id="formGroupExampleInput2"
              placeholder="Your phone"
            />
          </div>
          <div class="form-floating">
            <textarea
              class="form-control w-75"
              onBlur={handleOnChange}
              name="message"
              placeholder="Message"
              id="floatingTextarea2"
              style={{height: "100px"}}
            ></textarea>
            <label for="floatingTextarea2">Message</label>
          </div>
          <button
            type="button"
            class="btn btn-success btn-lg w-75 mt-3"
            onClick={handleOrder}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
