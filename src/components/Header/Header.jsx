import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FlickrContext from "../../store/flickr-context";
import classes from "./Header.module.css";

const Header = () => {
  const searchInputRef = useRef();
  const flickrCtx = useContext(FlickrContext);
  const navigate = useNavigate();

  const searchHandler = (event) => {
    event.preventDefault();
    flickrCtx.search(searchInputRef.current.value);
    navigate(`${searchInputRef.current.value}`);
  };

  const mountainClickHandler = () => {
    flickrCtx.search("mountain");
    navigate("mountain");
  };

  const beachesClickHandler = () => {
    flickrCtx.search("beaches");
    navigate("beaches");
  };

  const birdsClickHandler = () => {
    flickrCtx.search("birds");
    navigate("birds");
  };

  const foodClickHandler = () => {
    flickrCtx.search("food");
    navigate("food");
  };

  return (
    <section className={classes.container}>
      <header className={classes.header}>
        <h1>Snapshot</h1>
      </header>
      <section className={classes["search-section"]}>
        <form className={classes.search} onSubmit={searchHandler}>
          <input type="text" name="search" id="search" ref={searchInputRef} />
          <button type="submit">Search</button>
        </form>
        <nav className={classes.nav}>
          <button onClick={mountainClickHandler}>Mountain</button>
          <button onClick={beachesClickHandler}>Beaches</button>
          <button onClick={birdsClickHandler}>Birds</button>
          <button onClick={foodClickHandler}>Food</button>
        </nav>
      </section>
    </section>
  );
};

export default Header;
