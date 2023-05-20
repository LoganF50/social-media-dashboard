import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";
import { SocialMediaFollowerCard } from "./components/SocialMediaFollowerCard";

const StyledApp = styled.div`
  #root {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.color.background.primary};
  color: ${({ theme }) => theme.color.text.primary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  gap: ${({ theme }) => theme.spacing.base700};
  padding: ${({ theme }) => theme.spacing.base700};
`;

const FollowerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.base600};
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

  const toggleTheme = () => {
    currentTheme.name === "dark"
      ? setCurrentTheme(Themes.light)
      : setCurrentTheme(Themes.dark);
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <StyledApp>
          <Header followerCount={"23,004"} toggleTheme={toggleTheme} />
          <FollowerSection>
            <SocialMediaFollowerCard
              colors={[currentTheme.color.facebook]}
              followerCount={"1987"}
              followerName={"followers"}
              followerChange={12}
              imgAlt={"facebook"}
              imgSrc={"images/icon-facebook.svg"}
              userHandle={"@nathanf"}
            />
            <SocialMediaFollowerCard
              colors={[currentTheme.color.twitter]}
              followerCount={"1044"}
              followerName={"followers"}
              followerChange={99}
              imgAlt={"twitter"}
              imgSrc={"images/icon-twitter.svg"}
              userHandle={"@nathanf"}
            />
            <SocialMediaFollowerCard
              colors={[
                currentTheme.color.instagram.yellow,
                currentTheme.color.instagram.pink,
              ]}
              followerCount={"11k"}
              followerName={"followers"}
              followerChange={1099}
              imgAlt={"instagram"}
              imgSrc={"images/icon-instagram.svg"}
              userHandle={"@realnathanf"}
            />
            <SocialMediaFollowerCard
              colors={[currentTheme.color.youtube]}
              followerCount={"8239"}
              followerName={"subscribers"}
              followerChange={-144}
              imgAlt={"youtube"}
              imgSrc={"images/icon-youtube.svg"}
              userHandle={"Nathan F."}
            />
          </FollowerSection>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
