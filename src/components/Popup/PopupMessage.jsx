import React from "react";
import styled from "styled-components";

const PopupMessage = ({ message, children }) => {


    return(
        <PopupContainer>
            <PopupChildren id="popup-childrens">
                {children}
            </PopupChildren>
            <Popup id="popup-message">
                <p>{message}</p>
            </Popup>
        </PopupContainer>
    )
}

export default PopupMessage;

const PopupContainer = styled.div`
    position: relative;
    height: auto;
    width: auto;
    z-index: 600;

    &:hover {
        #popup-message {
            transform: scale(1);
        }
    }
`;

const Popup = styled.div`
    position: absolute;
    z-index: 900;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    padding: 10px;
    width: auto;
    min-width: 100%;
    bottom: -20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease-in-out;
    transform: scale(0);

    p {
        font-family: "Roboto", sans-serif;
        font-weight: normal;
        color: #FFF;
        font-size: 16px;
    }
`;

const PopupChildren = styled.div`
    height: auto;
    width: auto;
`;