import { useState } from "react";
import "./App.css";
import BookingInput from "./BookingInput";
import BookingDisplay from "./BookingDisplay";

function App() {
  return (
    <>
      <BookingInput></BookingInput>
      <BookingDisplay></BookingDisplay>
    </>
  );
}

export default App;
