import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

// UI component Modal (using it after submit form in contact page)
export const Modal = (props: Props) => {
  const { children, isOpen, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {isOpen && (
        <Popup>
          <PopupBg onClick={handleClose} />
          <PopupInner>
            {children}
            <PopupBtn onClick={handleClose}>
              <img src={"images/close.svg"} alt="close" />
            </PopupBtn>
          </PopupInner>
        </Popup>
      )}
    </>
  );
};

const Popup = styled.div`
  z-index: 8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupInner = styled.div`
  position: relative;
  z-index: 8;
  background: #fff;
  border-radius: 24px;
  padding: 40px 20px;
`;

const PopupBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 24px;
  background: #f7f7f7;
  position: absolute;
  top: 24px;
  right: 24px;
  border: none;
  cursor: pointer;
`;

const PopupBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 4;
`;
