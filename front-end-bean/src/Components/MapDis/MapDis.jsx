import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";

import axios from "axios";
import apiUrl from "../../apiConfig";
// import mapboxgl from 'mapbox-gl';
// import useSWR from 'swr';
// import lookUp from 'country-code-lookup';

const MapDis = () => {
  const [allCafes, setAllCafes] = useState([]);
  const [coords, setCoods] = useState([]);
  const [viewPort, setViewPort] = useState({
    latitude: 39.76666,
    longitude: -98.97304,
    zoom: 1,
    width: "100vw",
    height: "100vh",
  });

  useEffect(() => {
    const makeCafeAPICall = async () => {
      try {
        const res = await axios(`${apiUrl}/shops`);
        // console.log('res from get all cafes post rev', res.data)
        if (res.data.length > 0) {
          setAllCafes(res.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    makeCafeAPICall();
  }, []);

  let coordsPairs = [];

  allCafes.map((cafe) => {
    if (cafe.coords !== null) {
      let helperObj = {};
      helperObj.id = cafe.id;
      helperObj.name = cafe.name;
      helperObj.coordinates = cafe.coords.split(" ");
      coordsPairs.push(helperObj);
    }
  });
  //   console.log('allCafes from MapDis', allCafes)
  //   console.log('addresses from MapDis', addresses)
  console.log("coords Parirs from MapDis", coordsPairs);

  //     const coder = new Geocoder({
  //       accessToken: process.env.REACT_APP_API_KEY,
  //       marker: {
  //       color: 'orange'
  //       },
  //       mapboxgl: ReactMapGl
  //       });

  //       ReactMapGl.addControl(coder);

  return (
    <div>
      <ReactMapGl 
            {...viewPort}
            mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
            mapStyle='mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k'
            onViewportChange={viewPort => {
                setViewPort(viewPort);
            }}>
                {coordsPairs.map( (cafe) => (
                    // console.log('map inside return', cafe.id)
                    <Marker 
                        key={cafe.id}
                        longitude={Number(cafe.coordinates[0])}
                        latitude={Number(cafe.coordinates[1])}
                        >
                        <div>CAFE</div>
                    </Marker>
                ))
                }
        </ReactMapGl>
      <h1>HEY i;m a mappp</h1>
    </div>
  );
};

export default MapDis;
