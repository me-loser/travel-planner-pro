import React from "react";
import VacationItem from "./VacationItem";
import classes from "../../styles/VacationItem.module.css";

const Vacation = () => {
  const place = [
    {
      image: "Greece.jpg",
      location: "Greece",
      id: "dbkjfdsfnsdlknvlkdsnl",
    },
    {
      image: "Greece.jpg",
      location: "Greece",
      id: "dbkjfdsfnsdlknvlkdsnl",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Vacation</div>
      <div className={classes.box}>
        {place.map((item) => (
          <VacationItem vacation={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Vacation;
