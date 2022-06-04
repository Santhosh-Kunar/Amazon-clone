import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useStateValue } from "../../apis/StateProvider";
import classes from "./header.module.css";
import { auth } from "../../apis/firebase/firebase";
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <section className={classes.headermainsection}>
      <div className={classes.headermaindiv1}>
        <div className={classes.headermaindiv2}>
          <Link to="/">
            <img
              style={{
                height: "50px",
                width: "150px",
                backgroundColor: "black",
                color: "black",
                marginTop: "30px",
              }}
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="no img"
            />
          </Link>
        </div>
        <div className={classes.headermaindiv3}>
          <p style={{ paddingLeft: "40px" }}>hello </p>

          <div style={{ fill: "white" }}>
            <h4>
              <button
                style={{
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                }}
              >
                {" "}
                <GrLocation
                  style={{
                    height: "25px",
                    width: "25px",
                  }}
                />
              </button>{" "}
              Select your Address
            </h4>
          </div>
        </div>
        <div
          className={classes.headermaindiv4}
          style={{ border: "1px solid gray", borderRadius: "5px" }}
        >
          <select
            style={{
              height: "50px",
              border: "1px solid lightgray",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              fontSize: "14px",
            }}
          >
            <option value="1">All</option>
            <option value="2">Alexa skills</option>
            <option value="3">Amazon fashion</option>
            <option value="4">Amazon Devises</option>
            <option value="5">Application</option>
          </select>
          <input
            style={{
              height: "50px",
              width: "600px",
              border: "1px solid lightgray",
            }}
            type="text"
          />
          <button
            style={{
              height: "50px",
              width: "70px",
              border: "1px solid lightgray",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
            }}
          >
            <BsSearch
              style={{
                fontSize: "20px",
                marginTop: "-10px",
                marginRight: "10px",
              }}
            />
          </button>
        </div>
        <div className={classes.headermaindiv5}>
          {" "}
          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton}>
              <span style={{ color: "white", textDecoration: "none" }}>
                Hello {!user ? "Guest" : user.email}
              </span>
              <span style={{ color: "white", textDecoration: "none" }}>
                {user ? " Sign Out" : " Sign In"}
              </span>
              <br />
              <h3 style={{ color: "white", textDecoration: "none" }}>
                Account & List{" "}
              </h3>
            </div>
          </Link>
        </div>
        <Link to="/order">
          <div className={classes.headermaindiv6}>
            <span style={{ color: "white", textDecoration: "none" }}>
              Returns
            </span>
            <br />
            <h3 style={{ color: "white", textDecoration: "none" }}>&Order</h3>
          </div>
        </Link>
        <Link to="/checkout">
          <div className={classes.headermaindiv7}>
            <h3>
              <BsCart
                style={{
                  height: "25px",
                  width: "25px",
                  color: "white",
                }}
              />
              {basket?.length}
            </h3>
            {/* <span className="header__optionLineTwo header__basketCount"></span> */}
            <h3 style={{ color: "white", textDecoration: "none" }}>Cart</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Header;
