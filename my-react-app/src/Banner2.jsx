import React from "react";
import styled from "styled-components";

function Banner2() {
  return (
    <StyledFooter>
      <FooterContent>
      <LogoSection>
          <LogoWrapper>
            <Logo1 loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ad52fbc120df4e593513715a76363f4b9866c7081715fa76e1453f3eb5d07bb?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Company logo icon" />
            <Logo2 loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e02d77d227fb3709d1b29edc9063b39ddd47d212986f41825383d0b5ada00cff?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Company logo text" />
          </LogoWrapper>
          <NavLinks>
            <NavLink>For Students</NavLink>
            <NavLink>For Educators</NavLink>
            <NavLink>For Business</NavLink>
            <NavLink>Privacy Policy</NavLink>
            <NavLink>Terms & Conditions</NavLink>
          </NavLinks>
        </LogoSection>
        <NewsletterSection>
          <NewsletterTitle>Get Email Notifications</NewsletterTitle>
          <NewsletterDescription>
            Sign up to our e-mail newsletter to receive the latest news & updates.
          </NewsletterDescription>
          <NewsletterForm>
            <EmailInput type="email" placeholder="Input your email." aria-label="Input your email" />
            <SubmitButton type="submit">Submit</SubmitButton>
          </NewsletterForm>
        </NewsletterSection>
      </FooterContent>
      <FooterBottom>
        <Copyright>© 2023 All Rights Reserved.</Copyright>
        <SocialLinks>
          <SocialIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/590d6908d0b322c9125915bb651f1036b5b924c55b4aa1a8ce6084f6a1ca29fa?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Social media icon" />
          <SocialIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/23d87b5cd242b7473ce159315aed19fee9add2716670a1046c1412d7092e87ff?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Social media icon" />
          <SocialIcon loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f3c4f9feeddc69d009906536a9647b1d773657d64c6dbcecec2e846af0042503?apiKey=9c41d9f7ad734af2a431cbd2cb8742aa&" alt="Social media icon" />
        </SocialLinks>
      </FooterBottom>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 1350px;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FooterContent = styled.div`
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px; /* Move the logo section down */
  margin-left: 50px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 192px;
  max-width: 100%;
  gap: 5px;
  margin-left: 15px;
  justify-content: space-between;
`;

const Logo1 = styled.img`
  aspect-ratio: 1.11;
  object-fit: contain;
  width: 48px;
`;

const Logo2 = styled.img`
  aspect-ratio: 6.25;
  object-fit: contain;
  width: 133px;
  fill: #093550;
  max-width: 100%;
`;

const NavLinks = styled.nav`
  display: flex;
  margin-top: 28px;
  gap: 20px;
  font-size: 16px;
  color: var(--grey-600, #727273);
  font-weight: 600;
  line-height: 150%;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const NavLink = styled.a`
  font-family: Circular Std, sans-serif;
  cursor: pointer;
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  transform: translateX(200px)
  display: flex;
  width: 300px;
  flex-direction: column;
`;

const NewsletterTitle = styled.h3`
  justify-content: center;
  border-radius: 5px;
  color: var(--grey-black, #101011);
  letter-spacing: -0.22px;
  font: 700 22px/127% Circular Std, sans-serif;
`;

const NewsletterDescription = styled.p`
  color: var(--grey-600, #727273);
  margin-top: 6px;
  font: 450 16px/24px Circular Std Book, sans-serif;
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 6px;
  position: relative; /* Ensure button stays within input */
`;

const EmailInput = styled.input`
  border-radius: 6px;
  border: 1px solid rgba(217, 217, 217, 1);
  background-color: var(--common-White, #fff);
  color: var(--grey-600, #727273);
  font: 450 14px/143% Circular Std Book, sans-serif;
  padding: 12px 16px;
  width: 100%; /* Full width to align with button */
  box-sizing: border-box; /* Include padding and border in width */
`;

const SubmitButton = styled.button`
  position: absolute; /* Position over the input box */
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0 6px 6px 0;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.04);
  background-color: var(--secondary-main, #093550);
  color: var(--text-icons-light-on-color, #fff);
  white-space: nowrap;
  padding: 12px 20px;
  font: 700 16px/150% Circular Std, sans-serif;
  cursor: pointer;
  border: none;
`;

const FooterBottom = styled.div`
  align-items: start;
  border-top: 1px solid rgba(221, 221, 221, 1);
  display: flex;
  transform: translateY(20px);
  margin-left: 20px; /* Adjusted margin to move the line to the right */
  margin-top: 20px;
  transform: translateX(25px);
  gap: 20px;
  justify-content: space-between;
  padding: 24px 0 0 0;
  width: calc(100% - 40px); /* Adjusted width to account for left and right margins */
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;


const Copyright = styled.p`
  color: var(--text-icons-dark-base-second, #979aa0);
  text-align: center;
  font: 450 16px/150% Circular Std Book, sans-serif;
  margin-top: -2px;
`;

const SocialLinks = styled.div`
  justify-content: center;
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

export default Banner2;
