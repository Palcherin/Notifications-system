// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import MarkerClusterGroup from "react-leaflet-cluster";
// import "leaflet/dist/leaflet.css";
// import { Icon, divIcon, point } from "leaflet";
// import Navbar from '../Componets/Navbar/Navbar';

// // Create custom icon
// const customIcon = new Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
//   iconSize: [38, 38] // Size of the icon
// });

// // Create custom cluster icon
// const createClusterCustomIcon = function (cluster) {
//   return new divIcon({
//     html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
//     className: "custom-marker-cluster",
//     iconSize: point(33, 33, true)
//   });
// };

// // Define markers
// const markers = [
//   {
//     id: 1,
//     geocode: [-3.58082, 39.86622],
//     popUp: "Hello, I am popup 1"
//   },
//   {
//     id: 2,
//     geocode: [-3.58056 ,39.86444],
//     popUp: "Hello, I am popup 2"
//   },
//   {
//     id: 3,
//     geocode: [-3.5744, 39.8492],
//     popUp: "The"
//   }
// ];

// const Location = () => {
//   const [position, setPosition] = useState(null)
//   const map = useMapEvents({
//     click() {
//       map.locate()
//     },
//     locationfound(e) {
//       setPosition(e.latlng)
//       map.flyTo(e.latlng, map.getZoom())
//     },
//   })
//   return (
//     <>
//     <Navbar/>
//     <div className='w-full h-[90vh]'>
//       <MapContainer  center={{ lat: 39.8492, lng: -3.5744 }}
//      zoom={14} className='h-[90vh] mt-[10vh]'>
//         {/* OpenStreetMap Tiles */}
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         <MarkerClusterGroup
//           chunkedLoading
//           iconCreateFunction={createClusterCustomIcon}
//         >
//           {/* Map through the markers */}
//           {markers.map((marker, index) => (
//             <Marker position={position}>
//             <Popup>You are here</Popup>
//           </Marker>
//           ))}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//     </>
//   );
// };

// export default Location;
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import Navbar from '../Componets/Navbar/Navbar';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>The bus is currently here moving from A, Will be in B in 10 minutes</Popup>
    </Marker>
  );
}

function Location() {
  return (
    <>
    <Navbar/>
    <MapContainer
      center={{ lat: -3.61676, lng: 39.84249 }}
      zoom={15}
      scrollWheelZoom={false}
      className='h-[90vh] w-[90vw] mt-[10vh]'
      style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
    </MapContainer>
    </>
  );
}

export default Location;
