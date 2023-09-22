import React, { useState } from 'react';
import { Markers } from "../../data";
import styled from "styled-components";

const Sidebar = () => {

    const [SidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      <ToggleButton isVisible={SidebarVisible} onClick={() => setSidebarVisible(!SidebarVisible)}>
        {SidebarVisible ? 
        'Close'
        : 
        'Open'}

      </ToggleButton>
        <SidebarContent isVisible={SidebarVisible}>
            <SidebarList>
              {Markers.map((marker, index) => (
                <SidebarElement key={`sidebar-nav-${index}`}>{ marker.name }</SidebarElement>
                ))}
            </SidebarList>
        </SidebarContent>
    </>
  )
}

export default Sidebar;

const SidebarContent = styled.div`
  ${({ isVisible }) => isVisible ? `
    ` : `transform: translateX(-200px);`}
    position: fixed;
    z-index: 9999;
    top : 0;
    left: 0;
    height: 100vh;
    width: 200px;
    background-color: #FFFFFF;
    padding-top: 50px;
`

const SidebarList = styled.ul`
  
`

const SidebarElement = styled.li`
padding: 10px;
`


const ToggleButton = styled.button`
  ${({ isVisible }) => isVisible ? 
  `top: 10px;
  left: 155px;` : 
  `top: 80px;
  left: 10px;`}
  z-index: 10000;
  position: absolute;
  border-radius: 3px;
  border: 2px solid rgba(0,0,0,0.2);
  background-color: #FFFFFF;
  height: 33px;
  width: 33px;
  cursor: pointer;
`