import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

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
    width: '100vw',
    height: '100vh',
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

  const addresses = allCafes.map((cafe) => {
    return `${cafe.address.split(" ").join('-')}-${cafe.city.split(" ").join('-')}-${cafe.state.split(" ").join('-')}-${cafe.country.split(" ").join('-')}`;
  });

//     const coder = new Geocoder({
//       accessToken: process.env.REACT_APP_API_KEY,
//       marker: {
//       color: 'orange'
//       },
//       mapboxgl: ReactMapGl
//       });

//       ReactMapGl.addControl(coder);

const coordAPIRes = [];

//   addresses.forEach( async place => {
//     // coder.query(place)
//     if (allCafes !== undefined) {
//       try {
//          const res = await axios(`https://api.mapbox.com/v4/geocode/mapbox.places/${place}.json?access_token=${process.env.REACT_APP_API_KEY}`);
//          setCoods(res.data.query)
            // coordAPIRes.push(res.data.features[0].geometry.coordinates)
//         } catch (err) {
//             console.log(err);
//         }
//     }
//   });
//   console.log('coords', coords)

  addresses.forEach( async place => {
    // coder.query(place)
    if (allCafes !== undefined) {
      try {
         const res = axios(`https://api.mapbox.com/v4/geocode/mapbox.places/2460-Washtenaw-Ave-Ann-Arbor-MI.json?access_token=${process.env.REACT_APP_API_KEY}`);
        //  setCoods(res.data.query)
            // coordAPIRes.push(res.data.features[0].geometry.coordinates)
            if (res.data !== undefined) {
            console.log('res.data', res.data.features[0].geometry.coordinates)
        }
        } catch (err) {
            console.log(err);
        }
    }
  });

// console.log('coordAPIRes', coordAPIRes)
//   console.log("Map dispay all cafes - ", allCafes);
//   console.log("addresses", addresses);



  return (
    <div>
      {/* <ReactMapGl 
            {...viewPort}
            mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
            mapStyle='mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k'
            onViewportChange={viewPort => {
                setViewPort(viewPort);
            }}>
            
            </ReactMapGl> */}
      <h1>HEY i;m a mappp</h1>
    </div>
  );
};

export default MapDis;
