function Thanks() {
  const name = "Stephen";

  return (
    <>
      <p>
        Thanks for your order today<span className="cusName"> {name} </span>
        <img className="imgThanks" src="face.jpg" />
      </p>
    </>
  );
}

export default Thanks;
