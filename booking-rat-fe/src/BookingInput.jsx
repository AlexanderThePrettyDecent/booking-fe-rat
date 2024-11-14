import { useState } from "react";

const BookingInput = () => {
  const [bookingInfo, setBookingInfo] = useState({});

  const sendBooking = () => {
    console.log(bookingInfo);
  };

  const changeValue = (e) =>{
    const newInfo = {...bookingInfo}
    newInfo[e.target.id] = e.target.value
    setBookingInfo(newInfo)
  }

  return (
    <>
      <form>
        <label>
          Name
          <input id="name" onChange={changeValue}></input>
        </label>
        <label>
          time
          <input id="time" onChange={changeValue}></input>
        </label>
        <label>
          party size
          <input id="size" onChange={changeValue}></input>
        </label>
      </form>
      <button onClick={sendBooking}>Submit booking</button>
    </>
  );
};

export default BookingInput;
