import React, { useState } from "react";
import styled from "styled-components";
import L from 'leaflet';

import { 
    MapContainer, 
    TileLayer, 
    useMap, 
    Marker, 
    Popup 
} from 'react-leaflet';

import { Modal } from "../Modal";

const Map = ({ 
    scrollWheelZoom = false,
    zoom = 13,
    center= [51.505, -0.09],
    withHeight = "300px",
    withWidth = "100%",
    markers = [],
}) => {

    const [modalData, setModalData] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
                    <Marker 
                        key={`marker-${index}`} 
                        position={marker?.position}
                        icon={L.icon({
                            iconUrl: marker?.image,
                            iconSize: [64,64],
                            iconAnchor: [64, 64],
                            popupAnchor: null,
                            shadowUrl: null,
                            shadowSize: null,
                            shadowAnchor: null
                        })}
                        eventHandlers={{
                            click: () => {
                                setModalData(marker);
                                setModalIsOpen((prevState) => !prevState);
                            },
                        }}
                    />
                )))}
            </MapContainer>
            {(modalIsOpen && modalData !== null) && (
                <Modal
                    isVisible={modalIsOpen}
                    setIsVisible={setModalIsOpen}
                    title={modalData?.name}
                    subTitle={modalData?.city}
                    afterSubTitle={modalData?.simpleWord}
                    imageHeader={modalData?.image}
                >
                    
                </Modal>
            )}
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

    .leaflet-marker-icon {
        border-radius: 100%;
        width: 64px;
        height: 64px;
        object-fit: cover;
        border: 5px solid ${({ theme }) => theme.colorPrimary()};
    }
`;

const PopupContent = styled.div`
    width: 100%;
    height: auto;
    padding: 5px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Name = styled.h2`
    font-family: "Roboto", sans-serif;
    color: #000;
    font-weight: normal;
`;

const Avatar = styled.img`
    border-radius: 100%;
    width: 64px;
    height: 64px;
    object-fit: cover;
`;