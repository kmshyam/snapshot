import React, { useState, useEffect } from "react";
import axios from "axios";

const FlickrContext = React.createContext({
  photos: [],
  search: (input) => {},
});

export const FlickrProvider = (props) => {
  const [flickrPhotos, setFlickrPhotos] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  useEffect(() => {
    const params = {
      method: "flickr.photos.search",
      api_key: "267c6c7e999c7af6e89a2e985136209a",
      text: searchInput,
      sort: "date-posted-desc",
      per_page: 40,
      license: "4",
      extras: "owner_name, license",
      format: "json",
      nojsoncallback: 1,
    };

    const parameters = new URLSearchParams(params);
    const url = `https://api.flickr.com/services/rest/?${parameters}`;

    const imageUrl = (photo, size) => {
      let url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
        photo.id
      }_${photo.secret}${size ? `_${size}` : ""}.jpg`;
      return url;
    };

    axios
      .get(url)
      .then((responseData) => {
        const flickrImages = responseData.data.photos.photo.map((image) => {
          return imageUrl(image, "q");
        });
        setFlickrPhotos(flickrImages);
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {});
  }, [searchInput]);

  const searchHandler = (searchInput) => {
    setsearchInput(searchInput);
  };

  return (
    <FlickrContext.Provider
      value={{
        photos: flickrPhotos,
        search: searchHandler,
      }}
    >
      {props.children}
    </FlickrContext.Provider>
  );
};

export default FlickrContext;
