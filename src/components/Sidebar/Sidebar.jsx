import React, { useState } from 'react';
import { Markers } from "../../data";
import styled from "styled-components";
import { FiChevronsRight, FiChevronsLeft } from "react-icons/fi";

const Sidebar = ({ onClickNavigation }) => {

    const [SidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <ToggleButton $isVisible={SidebarVisible} onClick={() => setSidebarVisible(!SidebarVisible)}>
        {SidebarVisible ? 
        <FiChevronsLeft size={20} />
        : 
        <FiChevronsRight size={20} />}
      </ToggleButton>
        <SidebarContent $isVisible={SidebarVisible}>
            <SidebarList>
              {Markers.map((marker, index) => (
                <SidebarElement key={`sidebar-nav-${index}`} onClick={() => onClickNavigation(marker?.position)}>
                  { marker.name }
                </SidebarElement>
              ))}
            </SidebarList>
        </SidebarContent>
    </>
  )
}

export default Sidebar;

const SidebarContent = styled.div`
  ${({ $isVisible }) => $isVisible ? `
    transform: translateX(0px);
  ` : `
    transform: translateX(-200px);
  `}

  position: fixed;
  z-index: 9999;
  top : 0;
  left: 0;
  height: 100vh;
  width: 200px;
  background-color: #FFFFFF;
  padding-top: 50px;
  transition: 0.2s transform;
`

const SidebarList = styled.ul`
  
`

const SidebarElement = styled.li`
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: #000;
  transition: color 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colorPrimary()};
  }
`;


const ToggleButton = styled.button`
  ${({ $isVisible }) => $isVisible ? `
    top: 10px;
    left: 155px;
  ` : `
    top: 80px;
    left: 10px;
  `}

  z-index: 10000;
  position: absolute;
  border-radius: 3px;
  border: 2px solid rgba(0,0,0,0.2);
  background-color: #FFFFFF;
  height: 33px;
  width: 33px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`