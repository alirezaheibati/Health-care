import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useRef } from "react";
export default function DoctorAddress({ doctor, address, coordinates }) {
  const markerRef = useRef(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  }, [markerRef.current]);
  return (
    <div className="bg-gray-100 p-2 sm:p-4 mt-3 rounded-xl">
      <h2 className="text-xl mb-2 ">Address of {doctor}'s office</h2>
      <address className="text-gray-600">
        <FontAwesomeIcon icon={faLocationDot} className="mr-1" />
        {address}
      </address>
      <div id="map">
        {doctor && (
          <MapContainer center={coordinates} zoom={13} className="h-60 mt-4">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates} ref={markerRef}>
              <Popup closeButton={false} closeOnEscapeKey={false}>
                {doctor}'s office: {address}
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
}
