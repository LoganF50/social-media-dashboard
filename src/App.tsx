import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/globalStyle";
import { Themes } from "./styles/themes";
import { useState } from "react";
import { Header } from "./components/Header";
import { SocialMediaFollowerCard } from "./components/SocialMediaFollowerCard";
import { SocialMediaOverviewCard } from "./components/SocialMediaOverviewCard";

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
  gap: ${({ theme }) => theme.spacing.base600};
`;

const OverviewCardsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base600};
`;

const OverviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base600};
`;

type FollowerCardData = {
  id: string;
  colors: string[];
  followerCount: string;
  followerName: string;
  followerChange: number;
  imgAlt: string;
  imgSrc: string;
  userHandle: string;
};

type OverviewCardData = {
  id: string;
  description: string;
  amount: string;
  change: number;
  imgAlt: string;
  imgSrc: string;
};

function App() {
  const [currentTheme, setCurrentTheme] = useState(Themes.dark);

  const followerData: FollowerCardData[] = [
    {
      id: "0",
      colors: [currentTheme.color.facebook],
      followerCount: "1987",
      followerName: "followers",
      followerChange: 12,
      imgAlt: "facebook",
      imgSrc: "images/icon-facebook.svg",
      userHandle: "@nathanf",
    },
    {
      id: "1",
      colors: [currentTheme.color.twitter],
      followerCount: "1044",
      followerName: "followers",
      followerChange: 99,
      imgAlt: "twitter",
      imgSrc: "images/icon-twitter.svg",
      userHandle: "@nathanf",
    },
    {
      id: "2",
      colors: [
        currentTheme.color.instagram.yellow,
        currentTheme.color.instagram.pink,
      ],
      followerCount: "11k",
      followerName: "followers",
      followerChange: 1099,
      imgAlt: "instagram",
      imgSrc: "images/icon-instagram.svg",
      userHandle: "@realnathanf",
    },
    {
      id: "3",
      colors: [currentTheme.color.youtube],
      followerCount: "8239",
      followerName: "subscribers",
      followerChange: -144,
      imgAlt: "youtube",
      imgSrc: "images/icon-youtube.svg",
      userHandle: "@Nathan F.",
    },
  ];
  const overviewData: OverviewCardData[] = [
    {
      id: "0",
      description: "page views",
      amount: "87",
      imgAlt: "facebook",
      imgSrc: "images/icon-facebook.svg",
      change: 3,
    },
    {
      id: "1",
      description: "likes",
      amount: "52",
      imgAlt: "facebook",
      imgSrc: "images/icon-facebook.svg",
      change: -2,
    },
    {
      id: "2",
      description: "likes",
      amount: "5462",
      imgAlt: "instagram",
      imgSrc: "images/icon-instagram.svg",
      change: 2257,
    },
    {
      id: "3",
      description: "profile views",
      amount: "52k",
      imgAlt: "instagram",
      imgSrc: "images/icon-instagram.svg",
      change: 1375,
    },
    {
      id: "4",
      description: "retweets",
      amount: "117",
      imgAlt: "twitter",
      imgSrc: "images/icon-twitter.svg",
      change: 303,
    },
    {
      id: "5",
      description: "likes",
      amount: "507",
      imgAlt: "twitter",
      imgSrc: "images/icon-twitter.svg",
      change: 3,
    },
    {
      id: "6",
      description: "likes",
      amount: "107",
      imgAlt: "youtube",
      imgSrc: "images/icon-youtube.svg",
      change: -19,
    },
    {
      id: "7",
      description: "total views",
      amount: "1407",
      imgAlt: "youtube",
      imgSrc: "images/icon-youtube.svg",
      change: -12,
    },
  ];

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
          <Header
            followerCount={"23,004"}
            toggleTheme={toggleTheme}
            isLightTheme={currentTheme.name === "light"}
          />
          <FollowerSection>
            {followerData.map((card) => {
              return (
                <SocialMediaFollowerCard
                  key={card.id}
                  colors={card.colors}
                  followerCount={card.followerCount}
                  followerName={card.followerName}
                  followerChange={card.followerChange}
                  imgAlt={card.imgAlt}
                  imgSrc={card.imgSrc}
                  userHandle={card.userHandle}
                />
              );
            })}
          </FollowerSection>
          <OverviewSection>
            <h2>Overview - Today</h2>
            <OverviewCardsSection>
              {overviewData.map((card) => {
                return (
                  <SocialMediaOverviewCard
                    key={card.id}
                    imgAlt={card.imgAlt}
                    imgSrc={card.imgSrc}
                    change={card.change}
                    description={card.description}
                    amount={card.amount}
                  />
                );
              })}
            </OverviewCardsSection>
          </OverviewSection>
        </StyledApp>
      </ThemeProvider>
    </>
  );
}

export default App;
