import React from "react";
import styled from "styled-components";

import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

const Modal = ({ 
    title,
    imageHeader,
    subTitle,
    afterSubTitle,
    isVisible,
    setIsVisible,
    children,
}) => {

    return(
        <GlobalModalContainer>
            <ModalContainer>
                <ModalHeader 
                    title={title}
                    subTitle={subTitle}
                    afterSubTitle={afterSubTitle}
                    imageHeader={imageHeader}
                    setIsVisible={setIsVisible}
                />
                <ModalContent>
                    {children}
                </ModalContent>
                <ModalFooter />
            </ModalContainer>
            <BackgroundOverlayExit
                onClick={() => setIsVisible((prevState) => !prevState)}
            />
        </GlobalModalContainer>
    )
}

export default Modal;

const GlobalModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 997;
    justify-content: center;
    align-items: center;
    animation: fadeIn 400ms;
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

const BackgroundOverlayExit = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
`;

const ModalContainer = styled.div`
    height: auto;
    width: clamp(50%, 60%);
    min-width: 40%;
    background-color: #FFF;
    border-radius: 10px;
    position: relative;
    z-index: 999;
    animation: zoomIn 400ms;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    @keyframes zoomIn {
        from { transform: scale(0); }
        to { transform: scale(1); }
    }
`;

const ModalContent = styled.div`
    min-height: 500px;
    max-height: 500px;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;