import React, { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutsideMenu";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const onClickOutsideMenu = () => {
    setIsOpen(false);
    console.log("beeb");
  };
  const ref = useRef<any>();

  useClickOutside(ref, onClickOutsideMenu);
  return (
    <WrapperHeader>
      <HeaderLogo isMenuOpen={isMenuOpen} onClick={() => navigate("/")}>
        Logo Here
      </HeaderLogo>
      <HeaderContent isMenuOpen={isMenuOpen}>
        <nav>
          <HeaderMenu>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/">
                Home
              </Link>
            </li>
            <li>
              <DropdowmMenuContainer
                isMenuOpen={isMenuOpen}
                isOpen={isOpen}
                ref={ref}
              >
                <div onClick={toggleDropdown}>Features</div>
                {isOpen && (
                  <ul>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                          setIsMenuOpen(false);
                        }}
                        to="/features1"
                      >
                        Features1
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          setIsOpen(false);
                          setIsMenuOpen(false);
                        }}
                        to="/features2"
                      >
                        Features2
                      </Link>
                    </li>
                  </ul>
                )}
              </DropdowmMenuContainer>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/contact">
                Contact
              </Link>
            </li>
          </HeaderMenu>
        </nav>
        <div>
          <HeaderIcon
            src={isMenuOpen ? "images/user-w.svg" : "images/user.svg"}
            alt="user"
          />
          <HeaderIcon
            src={isMenuOpen ? "images/cart-w.svg" : "images/cart.svg"}
            alt="cart"
          />
        </div>
      </HeaderContent>
      <MenuOpenBtn
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      >
        <img
          src={isMenuOpen ? "images/close-menu.svg" : "images/menu-open.svg"}
          alt=""
        />
      </MenuOpenBtn>
    </WrapperHeader>
  );
};
const WrapperHeader = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 40px auto 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 360px) {
    margin-top: 25px;
    margin-bottom: 14px;
    align-items: flex-start;
    padding: 0 10px 30px;
    border-bottom: 1px solid rgb(236, 235, 227);
  }
`;
const HeaderLogo = styled.div<any>`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  z-index: 5;
  transition: all 0.2s ease-in;
  @media (max-width: 360px) {
    ${({ isMenuOpen }) => {
      if (isMenuOpen) {
        return css`
          transition: all 0.2s ease-in;
          margin-left: 12px;
          color: #fff;
        `;
      }
    }}
  }
`;
const HeaderContent = styled.div<any>`
  display: flex;
  align-items: center;
  z-index: 3;
  @media (max-width: 360px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background: #000;
    height: 100vh;
    padding-top: 100px;
    padding-left: 24px;
    padding-right: 24px;
    z-index: 2;
    transform: translateY(-1000px);
    transition: all 0.2s ease-in;
    & > nav {
      & > ul {
        display: block;
        & > li {
          margin-bottom: 30px;
          & > a {
            color: #fff;
          }
        }
      }
    }
    ${({ isMenuOpen }) => {
      if (isMenuOpen) {
        return css`
          transform: translateX(0px);
          transition: all 0.2s ease-in;
        `;
      }
    }}
    & > div {
      margin-top: auto;
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 40px;
    }
  }
`;
const MenuOpenBtn = styled.div<any>`
  & > img {
    width: 22px;
    height: 14px;
    transform: translateY(5px);
    cursor: pointer;
  }
  z-index: 5;
  display: none;
  transition: all 0.2s ease-in;

  @media (max-width: 360px) {
    display: block;
    ${({ isMenuOpen }) => {
      if (isMenuOpen) {
        return css`
          transition: all 0.2s ease-in;
          margin-right: 14px;
        `;
      }
    }}
  }
`;

const HeaderMenu = styled.ul`
  display: flex;
  & > li {
    margin-right: 47px;
    cursor: pointer;
    & > a {
      color: #1f1f1f;
    }
  }
  margin-right: 13px;
`;
const HeaderIcon = styled.img`
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 36px;
  }
`;

const DropdowmMenuContainer = styled.div<any>`
  position: relative;
  display: inline-block;
  & > div {
    color: #000;
    border: none;
    cursor: pointer;
    padding-right: 20px;
    position: relative;
    &::after {
      content: "";
      width: 12px;
      height: 7px;
      right: 0px;
      top: 7px;
      background-image: url("images/arrow-down.svg");
      transition: 0.2s;
      position: absolute;
      ${({ isOpen }) => {
        if (isOpen) {
          return css`
            transform: rotate(180deg);
            transition: 0.2s;
          `;
        }
      }}
      ${({ isMenuOpen }) => {
        if (isMenuOpen) {
          return css`
            background-image: url("images/white-arrow.svg");
          `;
        }
      }}
    }
  }

  & > ul {
    transition: 0.2s;
    color: #000;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #fff;
    border-top: none;
    margin-top: 5px;
    padding: 0;
    list-style: none;
    z-index: 1;
    min-width: 150px;
    margin-left: -20px;
    box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.04);

    & > li {
      padding: 10px 20px;
      cursor: pointer;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
  @media (max-width: 360px) {
    & > div {
      color: #fff;
    }
  }
`;
