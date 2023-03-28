import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { Modal } from "../UI/Modal";
import { RadioBtns } from "../UI/RadioBtns";

const RadioOptions = [
  { value: "General Inquiry1" },
  { value: "General Inquiry2" },
  { value: "General Inquiry3" },
  { value: "General Inquiry4" },
];

export const Contact = () => {
  const [radioValue, setRadioValue] = useState("General Inquiry2");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Text>Any question or remarks? Just write us a message!</Text>
      <Wrapper>
        <ContactInfo>
          <ContactTitle>Contact Information</ContactTitle>
          <Subtitle>Say something to start a live chat!</Subtitle>
          <Contacts>
            <ContactsItem>
              <img src="images/phone.svg" alt="phone" />
              <a href="tel:10123456789">+1012 3456 789</a>
            </ContactsItem>
            <ContactsItem>
              <img src="images/mail.svg" alt="phone" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </ContactsItem>
            <ContactsItem>
              <img src="images/location.svg" alt="phone" />
              <a href="#">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </a>
            </ContactsItem>
          </Contacts>
          <Socials>
            <li>
              <a href="">
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 1.42545C14.4484 1.65977 13.8481 1.82841 13.2298 1.89409C13.8717 1.51853 14.3525 0.925213 14.5818 0.225451C13.9794 0.578331 13.3195 0.825776 12.6313 0.956811C12.3437 0.654018 11.9958 0.4128 11.6094 0.248186C11.2229 0.0835725 10.8062 -0.000908491 10.3852 7.36757e-06C8.68165 7.36757e-06 7.31162 1.35977 7.31162 3.02841C7.31162 3.26273 7.34046 3.49705 7.38733 3.72249C4.83656 3.59113 2.56159 2.39113 1.04915 0.553853C0.77357 1.01737 0.629156 1.54514 0.630934 2.08225C0.630934 3.13314 1.17354 4.05977 2.00096 4.60474C1.51335 4.58583 1.03715 4.45385 0.611104 4.21953V4.25681C0.611104 5.72841 1.66747 6.94793 3.07535 7.22841C2.81101 7.29602 2.53907 7.33061 2.26595 7.33136C2.06586 7.33136 1.87658 7.31184 1.68549 7.28521C2.07487 8.48521 3.20875 9.35681 4.55895 9.38521C3.50258 10.2 2.17943 10.6793 0.742699 10.6793C0.484918 10.6793 0.246966 10.6704 0 10.642C1.36282 11.503 2.97981 12 4.72119 12C10.3744 12 13.4677 7.38817 13.4677 3.38521C13.4677 3.25385 13.4677 3.12249 13.4587 2.99113C14.0572 2.55977 14.5818 2.02545 15 1.42545Z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.40795 0.045C5.20773 0.00818181 5.46273 0 7.5 0C9.53727 0 9.79227 0.00886363 10.5914 0.045C11.3905 0.0811364 11.9359 0.208636 12.4132 0.393409C12.913 0.582273 13.3664 0.8775 13.7414 1.25932C14.1232 1.63364 14.4177 2.08636 14.6059 2.58682C14.7914 3.06409 14.9182 3.60955 14.955 4.40727C14.9918 5.20841 15 5.46341 15 7.5C15 9.53727 14.9911 9.79227 14.955 10.592C14.9189 11.3898 14.7914 11.9352 14.6059 12.4125C14.4177 12.913 14.1227 13.3665 13.7414 13.7414C13.3664 14.1232 12.913 14.4177 12.4132 14.6059C11.9359 14.7914 11.3905 14.9182 10.5927 14.955C9.79227 14.9918 9.53727 15 7.5 15C5.46273 15 5.20773 14.9911 4.40795 14.955C3.61023 14.9189 3.06477 14.7914 2.5875 14.6059C2.08699 14.4177 1.63351 14.1227 1.25864 13.7414C0.877077 13.3668 0.581806 12.9136 0.393409 12.4132C0.208636 11.9359 0.0818182 11.3905 0.045 10.5927C0.00818181 9.79159 0 9.53659 0 7.5C0 5.46273 0.00886363 5.20773 0.045 4.40864C0.0811364 3.60955 0.208636 3.06409 0.393409 2.58682C0.582084 2.08642 0.877581 1.63317 1.25932 1.25864C1.63366 0.87716 2.08669 0.581893 2.58682 0.393409C3.06409 0.208636 3.60955 0.0818182 4.40727 0.045H4.40795ZM10.5307 1.395C9.73977 1.35886 9.5025 1.35136 7.5 1.35136C5.4975 1.35136 5.26023 1.35886 4.46932 1.395C3.73773 1.42841 3.34091 1.55045 3.07636 1.65341C2.72659 1.78977 2.47636 1.95136 2.21386 2.21386C1.96503 2.45594 1.77353 2.75065 1.65341 3.07636C1.55045 3.34091 1.42841 3.73773 1.395 4.46932C1.35886 5.26023 1.35136 5.4975 1.35136 7.5C1.35136 9.5025 1.35886 9.73977 1.395 10.5307C1.42841 11.2623 1.55045 11.6591 1.65341 11.9236C1.77341 12.2489 1.965 12.5441 2.21386 12.7861C2.45591 13.035 2.75114 13.2266 3.07636 13.3466C3.34091 13.4495 3.73773 13.5716 4.46932 13.605C5.26023 13.6411 5.49682 13.6486 7.5 13.6486C9.50318 13.6486 9.73977 13.6411 10.5307 13.605C11.2623 13.5716 11.6591 13.4495 11.9236 13.3466C12.2734 13.2102 12.5236 13.0486 12.7861 12.7861C13.035 12.5441 13.2266 12.2489 13.3466 11.9236C13.4495 11.6591 13.5716 11.2623 13.605 10.5307C13.6411 9.73977 13.6486 9.5025 13.6486 7.5C13.6486 5.4975 13.6411 5.26023 13.605 4.46932C13.5716 3.73773 13.4495 3.34091 13.3466 3.07636C13.2102 2.72659 13.0486 2.47636 12.7861 2.21386C12.544 1.96505 12.2493 1.77355 11.9236 1.65341C11.6591 1.55045 11.2623 1.42841 10.5307 1.395ZM6.54205 9.81205C7.07704 10.0347 7.67276 10.0648 8.22745 9.89708C8.78215 9.72936 9.2614 9.37426 9.58337 8.89244C9.90534 8.41062 10.05 7.83196 9.99276 7.2553C9.93548 6.67864 9.67978 6.13975 9.26932 5.73068C9.00766 5.46919 8.69128 5.26896 8.34295 5.14442C7.99463 5.01987 7.62302 4.97411 7.25488 5.01042C6.88675 5.04673 6.53124 5.16421 6.21396 5.35441C5.89667 5.5446 5.62551 5.80278 5.41998 6.11035C5.21445 6.41793 5.07967 6.76724 5.02535 7.13316C4.97103 7.49907 4.99851 7.87247 5.10582 8.22649C5.21313 8.5805 5.3976 8.90633 5.64595 9.18049C5.89429 9.45466 6.20034 9.67035 6.54205 9.81205ZM4.77409 4.77409C5.13206 4.41612 5.55704 4.13216 6.02475 3.93843C6.49246 3.7447 6.99375 3.64498 7.5 3.64498C8.00625 3.64498 8.50754 3.7447 8.97525 3.93843C9.44296 4.13216 9.86794 4.41612 10.2259 4.77409C10.5839 5.13206 10.8678 5.55704 11.0616 6.02475C11.2553 6.49246 11.355 6.99375 11.355 7.5C11.355 8.00625 11.2553 8.50754 11.0616 8.97525C10.8678 9.44296 10.5839 9.86794 10.2259 10.2259C9.50295 10.9489 8.52241 11.355 7.5 11.355C6.47759 11.355 5.49705 10.9489 4.77409 10.2259C4.05113 9.50295 3.64498 8.52241 3.64498 7.5C3.64498 6.47759 4.05113 5.49705 4.77409 4.77409ZM12.21 4.21909C12.2987 4.13541 12.3697 4.03478 12.4188 3.92316C12.468 3.81155 12.4942 3.69121 12.496 3.56927C12.4977 3.44734 12.475 3.32628 12.4292 3.21328C12.3833 3.10028 12.3153 2.99762 12.2291 2.91139C12.1428 2.82516 12.0402 2.75711 11.9272 2.71126C11.8142 2.66542 11.6931 2.64271 11.5712 2.64449C11.4492 2.64627 11.3289 2.67249 11.2173 2.72161C11.1057 2.77073 11.005 2.84175 10.9214 2.93045C10.7586 3.10297 10.6695 3.33213 10.673 3.56927C10.6764 3.80641 10.7722 4.03287 10.9399 4.20057C11.1076 4.36828 11.334 4.46402 11.5712 4.46748C11.8083 4.47093 12.0375 4.38183 12.21 4.21909Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.6985 0.829529C11.7258 0.439129 10.6995 0.160494 9.64506 0.000569545C9.63551 -0.000837589 9.62569 0.000377705 9.61696 0.00404837C9.60823 0.00771903 9.60102 0.0136648 9.59631 0.021068C9.46412 0.226053 9.31787 0.494173 9.21569 0.704078C8.07908 0.553216 6.92295 0.553216 5.78635 0.704078C5.67236 0.470248 5.54341 0.242217 5.4001 0.021068C5.39529 0.0137459 5.38806 0.00786861 5.37936 0.00420974C5.37066 0.000550877 5.36089 -0.000718153 5.35135 0.000569545C4.29668 0.159638 3.27012 0.438418 2.29795 0.829529C2.28963 0.832306 2.28267 0.837522 2.27826 0.844288C0.333905 3.38528 -0.199527 5.86396 0.0620327 8.31148C0.0629702 8.32296 0.0714076 8.33444 0.08172 8.34182C1.21395 9.07535 2.48037 9.63541 3.82699 9.9981C3.8365 10.0007 3.84672 10.0006 3.85616 9.99783C3.8656 9.99502 3.87377 9.98966 3.87949 9.98252C4.16824 9.63815 4.42511 9.27491 4.64636 8.89282C4.65097 8.88495 4.65255 8.87599 4.65086 8.86727C4.64917 8.85855 4.6443 8.85054 4.63698 8.84444C4.63214 8.84044 4.62639 8.83737 4.62011 8.83542C4.2162 8.69966 3.82502 8.53654 3.45012 8.34756C3.43965 8.34237 3.43186 8.33386 3.42837 8.32378C3.42488 8.31371 3.42596 8.30285 3.43137 8.29344C3.43456 8.28734 3.43939 8.282 3.44543 8.27787C3.52418 8.22621 3.60293 8.17209 3.67793 8.11798C3.68456 8.11332 3.69251 8.11032 3.70093 8.10931C3.70935 8.1083 3.71793 8.10931 3.72574 8.11224C6.18103 9.09289 8.83882 9.09289 11.2641 8.11224C11.2722 8.10917 11.2811 8.10808 11.2899 8.1091C11.2986 8.11011 11.3069 8.11318 11.3138 8.11798C11.3888 8.17209 11.4675 8.22621 11.5463 8.27787C11.5527 8.28194 11.5578 8.28734 11.5612 8.29358C11.5646 8.29981 11.5662 8.30669 11.5658 8.31359C11.5655 8.3205 11.5631 8.32722 11.5591 8.33314C11.555 8.33907 11.5493 8.34402 11.5425 8.34756C11.1685 8.53827 10.7768 8.70119 10.3716 8.83461C10.3651 8.83665 10.3593 8.83992 10.3544 8.84417C10.3496 8.84842 10.3458 8.85355 10.3435 8.8592C10.3413 8.86468 10.3405 8.87049 10.3409 8.87627C10.3414 8.88205 10.3432 8.88768 10.3463 8.89282C10.5713 9.27409 10.8291 9.63815 11.1122 9.98252C11.1179 9.98966 11.1261 9.99502 11.1356 9.99783C11.145 10.0006 11.1552 10.0007 11.1647 9.9981C12.5136 9.63653 13.7821 9.07641 14.9156 8.34182C14.9213 8.33838 14.926 8.33387 14.9294 8.32862C14.9328 8.32337 14.9349 8.31751 14.9353 8.31148C15.2484 5.48187 14.4113 3.02369 12.7172 0.845108C12.7155 0.84151 12.713 0.838264 12.7097 0.835581C12.7065 0.832897 12.7027 0.830836 12.6985 0.829529ZM5.01292 6.82083C4.27324 6.82083 3.66481 6.2272 3.66481 5.49909C3.66481 4.77016 4.26199 4.17652 5.01292 4.17652C5.76947 4.17652 6.37228 4.77508 6.36103 5.49909C6.36103 6.2272 5.76385 6.82083 5.01292 6.82083ZM9.99662 6.82083C9.25787 6.82083 8.64851 6.2272 8.64851 5.49909C8.64851 4.77016 9.24569 4.17652 9.99662 4.17652C10.7532 4.17652 11.3569 4.77508 11.3447 5.49909C11.3447 6.2272 10.7532 6.82083 9.99662 6.82083Z" />
                </svg>
              </a>
            </li>
          </Socials>
        </ContactInfo>
        <ContactForm onSubmit={(e) => onFormSubmit(e)}>
          <InputsWrapper>
            <Input
              value={firstName}
              onChange={(e: any) => setFirstName(e.target.value)}
              isActive={!!firstName}
              labelValue="First Name"
            />
            <Input
              value={lastName}
              onChange={(e: any) => setLastName(e.target.value)}
              isActive={!!lastName}
              labelValue="Last Name"
            />
          </InputsWrapper>
          <InputsWrapper>
            <Input
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              isActive={!!email}
              labelValue="Email"
            />
            <Input
              value={phone}
              onChange={(e: any) => setPhone(e.target.value)}
              isActive={!!phone}
              labelValue="Phone number"
            />
          </InputsWrapper>
          <RadioWrapper>
            <RadioTitle>Select Subject?</RadioTitle>
            <RadioBtns
              value={radioValue}
              options={RadioOptions}
              name={"subject"}
              setValue={setRadioValue}
            />
          </RadioWrapper>
          <MessageWrapper>
            <Input
              value={message}
              onChange={(e: any) => setMessage(e.target.value)}
              isActive={!!message}
              labelValue="Message"
              placeholder="Write your message.."
              inputType={"fullwidth"}
            />
          </MessageWrapper>
          <ButtonWrapper>
            <Button text="Send Message" />
          </ButtonWrapper>
        </ContactForm>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalInner>
            <ModalTitle>
              Thank you for your message, we will answer you in 24 hours!!
            </ModalTitle>
            <ModalItem>First Name - {firstName}</ModalItem>
            <ModalItem>Last Name - {lastName}</ModalItem>
            <ModalItem>Email - {email}</ModalItem>
            <ModalItem>Phone number - {phone}</ModalItem>
            <ModalItem>Select Subject - {radioValue}</ModalItem>
            <ModalItem>Your message - {message}</ModalItem>
          </ModalInner>
        </Modal>
      </Wrapper>
    </Container>
  );
};

const ModalInner = styled.div`
  width: 650px;
  min-height: 300px;
  overflow: hidden;
`;
const ModalTitle = styled.div`
  margin-top: 25px;
  font-weight: 600;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #000;
  margin-bottom: 30px;
`;
const ModalItem = styled.div`
  color: #000;
  padding-left: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  @media (max-width: 360px) {
    max-width: 360px;
    overflow: hidden;
  }
`;
const Title = styled.h2`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 10px;
  }
`;
const Text = styled.div`
  margin-bottom: 50px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #717171;
  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 21px;
    max-width: 200px;
    margin: 0 auto 20px;
  }
`;
const Wrapper = styled.div`
  max-width: 1196px;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 60px 30px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  margin-bottom: 50px;
  display: flex;
  @media (max-width: 360px) {
    display: block;
    max-width: 320px;
  }
`;
const ContactInfo = styled.div`
  padding: 40px;
  border-radius: 10px;
  background: #000;
  display: flex;
  flex-direction: column;
  max-width: 490px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -56px;
    right: -40px;
    width: 300px;
    height: 300px;
    background-image: url("images/contact-bg.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 360px) {
    max-width: 360px;
    overflow: hidden;
    align-items: center;
    text-align: center;
    padding: 15px;
    &::after {
      bottom: 0;
      right: 0;
      width: 100px;
      height: 100px;
    }
  }
`;
const ContactTitle = styled.h3`
  margin-bottom: 6px;
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  @media (max-width: 360px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
const Subtitle = styled.div`
  color: #c9c9c9;
  font-size: 18px;
  line-height: 27px;
  @media (max-width: 360px) {
    font-size: 11px;
    line-height: 16px;
  }
`;
const Contacts = styled.div`
  margin: 111px 0 160px;
  @media (max-width: 360px) {
    margin: 20px 0 58px;
  }
`;
const ContactsItem = styled.div`
  margin-bottom: 50px;
  display: flex;
  align-items: start;
  & > img {
    margin-right: 25px;
  }
  & > a {
    color: #fff;
    max-width: 280px;
  }
  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    /* justify-content: center; */
    & > img {
      margin-bottom: 14px;
      margin-right: 0;
    }
  }
`;
const Socials = styled.ul`
  display: flex;
  z-index: 1;
  & > li {
    background: #1b1b1b;
    border-radius: 50%;
    transition: all 0.2s;
    &:not(:last-child) {
      margin-right: 24px;
    }
    & > a {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;

      & > svg {
        fill: #fff;
      }
    }
    &:hover {
      background: #fff;
      transition: all 0.2s;
      & > a {
        & > svg {
          fill: #000;
          transition: all 0.2s;
        }
      }
    }
  }
`;

const ContactForm = styled.form`
  padding: 50px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -52px;
    right: 138px;
    width: 280px;
    height: 245px;
    background-image: url(images/arrow-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  @media (max-width: 360px) {
    padding: 20px 10px;
    &::after {
      display: none;
    }
  }
`;
const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 595px;
  margin-bottom: 45px;
  @media (max-width: 360px) {
    display: block;
    margin-bottom: 20px;
    width: 272px;
  }
`;

const RadioWrapper = styled.div`
  margin-bottom: 45px;
  @media (max-width: 360px) {
    margin-bottom: 25px;
  }
`;
const RadioTitle = styled.h3`
  color: #000;
  margin-bottom: 14px;
  font-weight: 600;
  @media (max-width: 360px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;
const MessageWrapper = styled.div`
  margin-bottom: 60px;
  @media (max-width: 360px) {
    margin-bottom: 25px;
  }
`;
const ButtonWrapper = styled.div`
  text-align: right;
`;
