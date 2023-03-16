import React from "react";
import classes from "./Search.module.css";

const Search = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h3>{props.heading}</h3>
      </header>
      <section className={classes.container}>
        {props.photos.map((photo) => {
          if (!photo.includes("farm0")) {
            return (
              <div
                className={classes.image}
                key={`${Math.random().toString()}_${photo}`}
              >
                <img src={photo} alt={photo} />
              </div>
            );
          } else {
            return (
              <div
                className={classes.image}
                key={`${Math.random().toString()}_${photo}`}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg"
                  alt="nature"
                />
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default Search;
