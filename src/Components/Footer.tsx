import React from "react";
import styled from "styled-components";

export const Footer = () => {
  // state for email
  const [email, setEmail] = React.useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };

  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterLogo>Logo Here</FooterLogo>
        </FooterTop>
        <FooterContent>
          <ReachUs>
            <FooterSubtitle>Reach us</FooterSubtitle>
            <ReachUsItem>
              <img src="images/phone.svg" alt="phone" />
              <a href="tel:10123456789">+1012 3456 789</a>
            </ReachUsItem>
            <ReachUsItem>
              <img src="images/mail.svg" alt="phone" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </ReachUsItem>
            <ReachUsItem>
              <img src="images/location.svg" alt="phone" />
              <a href="#">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </a>
            </ReachUsItem>
          </ReachUs>
          <FooterNavigation>
            <FooterNavigationBlock>
              <FooterSubtitle>Company</FooterSubtitle>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </FooterNavigationBlock>

            <FooterNavigationBlock>
              <FooterSubtitle>Legal</FooterSubtitle>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Services</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
              </ul>
            </FooterNavigationBlock>
            <FooterNavigationBlock>
              <FooterSubtitle>Quick Links</FooterSubtitle>
              <ul>
                <li>
                  <a href="#">Techlabz Keybox</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
                <li>
                  <a href="#">Forum</a>
                </li>
              </ul>
            </FooterNavigationBlock>
          </FooterNavigation>
          <FooterNewsletter>
            <FooterSubtitle>Join Our Newsletter</FooterSubtitle>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Your email address"
              />
              <button type="submit">Subscribe</button>
            </form>
            <FooterNewsletterDesc>
              * Will send you weekly updates for your better tool management.
            </FooterNewsletterDesc>
          </FooterNewsletter>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  background: #000;
  padding: 80px 0px 60px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media (max-width: 360px) {
    padding: 40px 0px 30px;
  }
`;
const Container = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 360px) {
    max-width: 360px;
  }
`;
const FooterTop = styled.div`
  padding-bottom: 45px;
  border-bottom: 1px solid #fff;
  @media (max-width: 360px) {
    padding-bottom: 20px;
    max-width: 300px;
    margin: 0 auto;
  }
`;
const FooterLogo = styled.div`
  font-size: 36px;
  line-height: 44px;
  font-weight: 800;
  text-align: center;
`;
const FooterContent = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 360px) {
    display: block;
    text-align: center;
    padding: 20px 20px 20px 5px;
  }
`;
const ReachUs = styled.div`
  min-width: 330px;
`;
const FooterSubtitle = styled.div`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
`;
const ReachUsItem = styled.div`
  display: flex;
  margin-bottom: 24px;
  align-items: start;
  & > img {
    margin-right: 25px;
  }
  & > a {
    color: #fff;
    max-width: 280px;
  }
  @media (max-width: 360px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & > img {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`;
const FooterNavigation = styled.div`
  display: flex;
  @media (max-width: 360px) {
    display: block;
    text-align: center;
  }
`;
const FooterNavigationBlock = styled.div`
  &:not(:last-child) {
    margin-right: 60px;
  }
  & > ul {
    & > li {
      margin-bottom: 24px;
      & > a {
        color: #fff;
      }
    }
  }
  @media (max-width: 360px) {
    &:not(:last-child) {
      margin-right: 0;
    }
    margin-bottom: 40px;
  }
`;
const FooterNewsletter = styled.div`
  width: 306px;
  border-radius: 10px;
  background: #131313;
  padding: 14px;
  height: 184px;
  & > form {
    margin-bottom: 20px;
    display: flex;
    & > input {
      width: 172px;
      background: #1e1e1e;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 12px 10px;
      border: none;
      outline: none;
      color: #fff;
      &::placeholder {
        color: #616161;
        font-size: 11px;
        line-height: 16px;
      }
    }
    & > button {
      padding: 11px 22px;
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      background: #000;
      color: #fff;
      border: none;
    }
  }
`;
const FooterNewsletterDesc = styled.div`
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;

  color: #ffffff;

  opacity: 0.5;
`;
