import React from "react";
import styled from "styled-components";

import { Map } from "../components/Map";
import { Markers } from "../data";
import { Sidebar } from "../components/Sidebar";

const HomePage = () => {

    return(
        <HomeContainer>
            <Sidebar />
            <Map 
                withHeight="100vh"
                zoom={8.5}
                center={[49.63297, 3.05858]}
                markers={Markers}
                scrollWheelZoom={true}
            />
        </HomeContainer>
    )
}

export default HomePage;

const HomeContainer = styled.div`
    display: flex;
    height: auto;
    width: 100%;
`;