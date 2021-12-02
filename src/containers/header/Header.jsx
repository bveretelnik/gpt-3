import React from "react";
import styled from "styled-components";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContent>
        <GradienText>
          Let’s Build Something amazing with GPT-3 OpenAI
        </GradienText>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>

        <HeaderContentInput>
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </HeaderContentInput>

        <HeaderContentPeople>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </HeaderContentPeople>
        {/* <HeaderImage>
          <img src={ai} alt="ai" />
        </HeaderImage> */}
      </HeaderContent>
    </HeaderSection>
  );
};

export default Header;

const HeaderSection = styled.div`
  padding: 4rem 6rem;
  display: flex;
`;
const HeaderContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  margin-right: 5rem;

  p {
    font-family: var(--font-family);
    font-size: 20px;
    line-height: 27px;
    color: var(--color-text);

    margin-top: 1.5rem;
  }
`;
const GradienText = styled.h1`
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-family);
  font-weight: 800;
  font-size: 62px;
  line-height: 75px;
  letter-spacing: -0.04em;
`;
const HeaderContentInput = styled.div`
  width: 100%;
  margin: 2rem 0 1rem;

  display: flex;
  input {
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-size: 20px;
    line-height: 27px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  button {
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    background: #ff4820;
    color: #ffff;
    cursor: pointer;
    outline: none;
    padding: 0 1rem;
    border: none;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;
const HeaderContentPeople = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 2rem;
  img {
    width: 182px;
    height: 38px;
  }
  p {
    margin-left: 1rem;
    margin-top: 0;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 38px;
    color: #ffff;
    text-align: center;
  }
`;
const HeaderImage = styled.div``;
