import React from "react";
import styled from "styled-components";

import { Map } from "../components/Map";
import { Markers } from "../data";

const HomePage = () => {

    return(
        <HomeContainer>
            <Map 
                withHeight="100vh"
                zoom={8.5}
                center={[49.63297, 3.05858]}
                markers={Markers}
            />
        </HomeContainer>
    )
}

export default HomePage;

const HomeContainer = styled.div`
    height: auto;
    width: 100%;
`;