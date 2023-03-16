import React, { useContext } from "react";
import FlickrContext from "../store/flickr-context";
import Search from "../components/UI/Search";
import { useParams } from "react-router-dom";

const SearchOutput = () => {
  const params = useParams();
  const flickrCtx = useContext(FlickrContext);
  return (
    <Search heading={`${params.searchId} Pictures`} photos={flickrCtx.photos} />
  );
};

export default SearchOutput;
