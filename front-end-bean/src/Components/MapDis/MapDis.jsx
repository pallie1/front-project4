import React, { useContext, useState, useEffect } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Link } from 'react-router-dom';
// import Geocoder from "react-map-gl-geocoder";
import { DataContext } from "../../App";
import axios from "axios";
import apiUrl from "../../apiConfig";
import "./MapDis.scss";
// import mapboxgl from 'mapbox-gl';
// import useSWR from 'swr';
// import lookUp from 'country-code-lookup';

const MapDis = () => {
  const { activeUser } = useContext(DataContext);
  const [allCafes, setAllCafes] = useState([]);
  const [viewPort, setViewPort] = useState({
    longitude: 15.274974345203223,
    latitude: 14.110227334500253,
    zoom: 0.7,
    width: "100vw",
    height: "100vh",
  });

  console.log("vewPort", viewPort);

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

  if (activeUser !== undefined) {
    return (
      <div>
        <ReactMapGl
          {...viewPort}
          mapboxApiAccessToken={process.env.REACT_APP_API_KEY}
          mapStyle="mapbox://styles/notalemesa/ck8dqwdum09ju1ioj65e3ql3k"
          onViewportChange={(viewPort) => {
            setViewPort(viewPort);
          }}
        >
          {coordsPairs.map((cafe) => (
            // console.log('map inside return', cafe.id)
            <Marker
              key={cafe.id}
              longitude={Number(cafe.coordinates[0])}
              latitude={Number(cafe.coordinates[1])}
            >
              <div>
                <i className="fa fa-coffee icon-color" aria-hidden="true"></i>
              </div>
            </Marker>
          ))}
        </ReactMapGl>
        <h1>HEY i;m a mappp</h1>
      </div>
    );
  } else {
    return (
      <>
        <h1>Log in please!</h1>
        <Link to="/login">Login</Link>
      </>
    );
  }
};

export default MapDis;
