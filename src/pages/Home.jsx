import React, { useContext } from "react";
import FlickrContext from "../store/flickr-context";
import Search from "../components/UI/Search";

const Home = () => {
  const flickrCtx = useContext(FlickrContext);
  return <Search heading="All Pictures" photos={flickrCtx.photos} />;
};

export default Home;
