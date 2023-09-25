import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import L from 'leaflet';

import { 
    MapContainer, 
    TileLayer, 
    useMap, 
    Marker, 
    Popup 
} from 'react-leaflet';

import {
    FaCity
} from "react-icons/fa";

import { BiSolidMessageDetail } from "react-icons/bi";

import { Modal } from "../Modal";

import { PopupMessage } from "../Popup";

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

    const theme = useTheme();

    return(
        <MapWrapper $withHeight={withHeight} $withWidth={withWidth}>
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
                    subTitle={(
                        <Row>
                            <FaCity size={18} color={theme.colorPrimary()} />
                            <p>{modalData?.city}</p>
                        </Row>
                    )}
                    afterSubTitle={(
                        <Row>
                            <BiSolidMessageDetail size={18} color={theme.colorPrimary()} />
                            <p>{modalData?.simpleWord}</p>
                        </Row>
                    )}
                    imageHeader={modalData?.image}
                >
                    <ContentContainer>
                        <ListContainer>
                            <ListTitle>Compétences</ListTitle>
                            <List>
                                {modalData?.skills.map((skill, skillIndex) => ((
                                    <ListElement key={`skill-${skillIndex}`}>
                                        <PopupMessage message={skill?.name}>
                                            <SkillLogo 
                                                src={skill?.icon} 
                                                alt={skill?.name} 
                                            />
                                        </PopupMessage>
                                    </ListElement>
                                )))}
                            </List>
                        </ListContainer>
                        <ListContainer>
                            <ListTitle>Hobbies</ListTitle>
                            <List $direction="column">
                                {modalData?.hobbies.map((hobbie, hobbieIndex) => ((
                                    <ListElement key={`hobbie-${hobbieIndex}`}>{hobbie}</ListElement>
                                )))}
                            </List>
                        </ListContainer>
                    </ContentContainer>
                </Modal>
            )}
        </MapWrapper>
    )
}

export default Map;

const MapWrapper = styled.div`
    width: ${({ $withWidth }) => $withWidth};
    height: ${({ $withHeight }) => $withHeight};
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

const ListContainer = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const SkillLogo = styled.img`
    width: 82px;
    height: 82px;
    object-fit: cover;
`;

const ListTitle = styled.h1`
    color: ${({ theme }) => theme.colorPrimary()};
    font-family: "Roboto", sans-serif;
`;

const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
    gap: 20px;
`;

const List = styled.ul`
    display: flex;
    flex-direction: ${({ $direction }) => $direction ? $direction : "row"};
    gap: ${({ $direction }) => $direction !== "column" ? "20px" : "5px"};
    flex-grow: 1;
    padding-left: 18px;

    ${({ $direction }) => $direction !== "column" && `
        list-style: none;
        flex-wrap: wrap;
    `}
`;

const Row = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;

const ListElement = styled.li`
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    color: ${({ theme }) => theme.colorSecondary()};
`;