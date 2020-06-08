import React from "react";

// Components
import DeleteButton from "./buttons/DeleteButton";

// Styling
import { DetailWrapper } from "../styles";

const CookieDetail = (props) => {
  const cookie = props.cookie;

  return (
    <DetailWrapper>
      <p onClick={props.selectCookie}>Back to Cookies</p>
      <h1>{cookie.name}</h1>
      <img src={cookie.image} alt={cookie.name} />
      <p>{cookie.description}</p>
      <p>{cookie.price} KD</p>
      <DeleteButton cookieId={cookie.id} deleteCookie={props.deleteCookie} />
    </DetailWrapper>
  );
};

export default CookieDetail;