import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { useState } from "react";

const BookingDisplay = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      group: 1,
      title: "colins",
      start_time: moment(),
      end_time: moment().add(1, "hour"),
      canMove: false,
    },
    {
      id: 2,
      group: 2,
      title: "Johnson",
      start_time: moment().add(-0.5, "hour"),
      end_time: moment().add(0.5, "hour"),
      canMove: false,
    },
    {
      id: 3,
      group: 1,
      title: "jefferson",
      start_time: moment().add(2, "hour"),
      end_time: moment().add(3, "hour"),
      canMove: false,
    },
    {
      id: 4,
      group: 2,
      title: "hooba",
      start_time: new Date("2024-12-14T14:29:16"),
      end_time: moment(new Date("2024-12-14T14:29:16")).add(1, "hour"),
      canMove: false,
    },
  ]);

  const [selectedBooking, setSelectedBooking] = useState("");

  const groups = [
    { id: 1, title: "table 1" },
    { id: 2, title: "table 2" },
    { id: 3, title: "table 3" },
  ];

  const newBooking = () => {
    const newItems = [...items];
    newItems.push({
      id: 7,
      group: 3,
      title: "om",
      start_time: moment().add(1, "hour"),
      end_time: moment().add(2, "hour"),
      canMove: false,
      itemProps: {value: "cow"}
    });
    setItems(newItems);
  };

  const selectHandler = (itemId, e, time) => {
    setSelectedBooking(e.target.value)
    console.log(new Date(time))
    console.log(e.target.textContent)
    console.log(e.target)
  };

  return (
    <div>
      Bookings:
      <button onClick={newBooking}>Add new</button>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
        minZoom={60 * 60 * 1000}
        maxZoom={365.24 * 86400 * 1000}
        onItemSelect={selectHandler}
      />
      <p></p>
    </div>
  );
};

export default BookingDisplay;
