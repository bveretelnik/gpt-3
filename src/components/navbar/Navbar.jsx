import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Menu = () => (
  <>
    <p>
      <a href="#home">HOME</a>
    </p>
    <p>
      <a href="#wgpt3">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <NavBar>
      <NavbarLinks>
        <NavbarLinksLogo>
          <img src={logo} alt="logo" />
        </NavbarLinksLogo>
        <LinksContainer>
          <Menu />
        </LinksContainer>
      </NavbarLinks>
      <NavbarSign>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </NavbarSign>
      <NavbarMenu>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <NavbarMenuContainer>
            <NavbarMenuContainerLinks>
              <Menu />
              <NavbarMenuSign>
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </NavbarMenuSign>
            </NavbarMenuContainerLinks>
          </NavbarMenuContainer>
        )}
      </NavbarMenu>
    </NavBar>
  );
};
export default Navbar;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 6rem;

  @media screen and (max-width: 700px) {
    padding: 2rem 4rem;
  }
`;
const NavbarLinks = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;
const NavbarLinksLogo = styled.div`
  margin-right: 2rem;
  img {
    width: 62px;
    height: 16px;
  }
`;
const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    color: #fff;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    text-transform: capitalize;

    margin: 0 1rem;
    cursor: pointer;
  }
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;
const NavbarSign = styled(LinksContainer)`
  button {
    padding: 0.5rem 1rem;
    color: #fff;
    background: #ff4820;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    border-radius: 5px;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  @media screen and (max-width: 1050px) {
    display: flex;
    flex-direction: row;
  }
`;
const NavbarMenu = styled.div`
  margin-left: 1rem;

  display: none;
  position: relative;

  @media screen and (max-width: 1050px) {
    display: flex;
  }
`;

const NavbarMenuContainer = styled(LinksContainer)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  text-align: end;
  background: var(--color-footer);
  padding: 2rem;
  position: absolute;
  right: 0;
  top: 40px;
  margin-top: 1rem;
  min-width: 210px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgb(0, 0, 0, 0.2);
  p {
    margin: 1rem 0;
  }
  @media screen and (max-width: 550px) {
    top: 20px;
  }
`;
const NavbarMenuContainerLinks = styled.div``;
const NavbarMenuSign = styled(NavbarSign)`
  display: none;

  @media screen and (max-width: 550px) {
    display: block;
  }
`;
