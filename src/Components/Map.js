import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Map() {
  let { idUser } = useParams();

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null); //-6.9208655
  const [lat, setLat] = useState(null); //32.886023
  const [zoom] = useState(14);
  const [API_KEY] = useState("wntx4gchUa7g9Ws8PuwY");

  // async function getData (){
  //   const access_token = JSON.parse(
  //     localStorage.getItem("userdata")
  //   ).accessToken;
  //   await axios
  //     .get(`http://localhost:8082/location/${idUser}`, {
  //       headers: {
  //         Authorization: `Bearer ${access_token}`,
  //       },
  //     })
  //     .then((res) => {
  //       console.log("ha 3lach kan9aleb")
  //       console.log(res.data);
  //      setLat(res.data.latitude);
  //      setLng(res.data.longitude);
  //      console.log("latituede"+lat);
  //      console.log("longitude"+lng);
  //     })
  //     .catch((error) => {
  //        console.error(error)
  //     });
  // }

  useEffect(() => {
    const access_token = JSON.parse(
      localStorage.getItem("userdata")
    ).accessToken;
    axios
      .get(`http://localhost:8082/location/${idUser}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        console.log("ha 3lach kan9aleb");
        console.log(res.data);
        console.log(res.data.latitude);
        setLat(res.data.latitude);
        setLng(res.data.longitude);
        console.log("latituede" + lat);
        console.log("longitude" + lng);
      })
      .catch((error) => {
        console.error(error);
      });

    if (lat && lng) {
      if (map.current) return;
      map.current = new maplibregl.Map({
        container: mapContainer.current,
        style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
        center: [lng, lat],
        zoom: zoom,
      });
      map.current.addControl(new maplibregl.NavigationControl(), "top-right");
      new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([lng, lat])
        .addTo(map.current);
    }
  }, [idUser, lat, lng, zoom, API_KEY]);

  // useEffect(() => {
  //   if (map.current) return;
  //   map.current = new maplibregl.Map({
  //     container: mapContainer.current,
  //     style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  //   map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
  //   new maplibregl.Marker({color: "#FF0000"})
  // .setLngLat([lng, lat])
  // .addTo(map.current);
  // }, [lat, lng]);

  return (
    <div>
      {lat && (
        <div className="map-wrap">
          <div ref={mapContainer} className="map" />
        </div>
      )}
    </div>
  );
}
