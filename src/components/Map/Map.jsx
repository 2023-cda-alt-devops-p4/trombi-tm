import React from "react";
import styled from "styled-components";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';

const Map = ({ 
    scrollWheelZoom = false,
    zoom = 13,
    center= [51.505, -0.09],
    withHeight = "300px",
    withWidth = "100%",
    markers = [],
}) => {

    return(
        <MapWrapper withHeight={withHeight} withWidth={withWidth}>
            <MapContainer 
                center={center} 
                zoom={zoom} 
                scrollWheelZoom={scrollWheelZoom}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => ((
                    <Marker key={`marker-${index}`} position={marker?.position}>
                        <Popup>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione nostrum debitis totam.
                        </Popup>
                    </Marker>
                )))}
            </MapContainer>
        </MapWrapper>
    )
}

export default Map;

const MapWrapper = styled.div`
    width: ${({ withWidth }) => withWidth};
    height: ${({ withHeight }) => withHeight};
    display: flex;

    .leaflet-container {
        height: 100%;
        width: 100%;
    }
`;