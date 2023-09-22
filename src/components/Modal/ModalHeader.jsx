import React from "react";
import styled from "styled-components";

import { AiOutlineClose } from "react-icons/ai";

const ModalHeader = ({ 
    title, 
    subTitle, 
    afterSubTitle, 
    imageHeader, 
    setIsVisible 
}) => {

    return(
        <ModalHeaderContainer>
            <TitleContainer>
                <Avatar src={imageHeader} alt={title} />
                <TitleSubContainer>
                    <Title>{title}</Title>
                    <SubTitle>{subTitle}</SubTitle>
                    <AfterSubTitle>{afterSubTitle}</AfterSubTitle>
                </TitleSubContainer>
            </TitleContainer>
            <CloseButton onClick={() => setIsVisible((prevState) => !prevState)}>
                <AiOutlineClose />
            </CloseButton>
        </ModalHeaderContainer>
    )
}

export default ModalHeader;

const ModalHeaderContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #d3d3d3;
    padding: 10px 20px;
`;

const Title = styled.h1`
    font-family: "Roboto", sans-serif;
    color: ${({ theme }) => theme.colorPrimary()};
    letter-spacing: 1.2px;
    font-size: 28px;
`;

const TitleContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

const TitleSubContainer = styled.div`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const SubTitle = styled.p`
    color: ${({ theme }) => theme.colorPrimary()};
    font-family: "Roboto", sans-serif;
`;

const AfterSubTitle = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.colorPrimary()};
    font-family: "Roboto", sans-serif;
`;

const Avatar = styled.img`
    border-radius: 100%;
    width: 92px;
    height: 92px;
    object-fit: cover;
    border: 5px solid ${({ theme }) => theme.colorPrimary()};
`;

const CloseButton = styled.button`
    background: none;
    outline: 0;
    border: 0;
    height: auto;
    width: auto;
    cursor: pointer;
    transition: all 300ms linear;
    border: 1px solid ${({ theme }) => theme.colorPrimary()};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.colorPrimary()};

        svg {
            color: #FFF;
            background-color: transparent;
        }
    }

    svg {
        color: ${({ theme }) => theme.colorPrimary()};
        font-size: 32px;
    }
`;