import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.base400};

  h1 {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${({ theme }) => theme.fontSize.base600};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  p {
    color: ${({ theme }) => theme.color.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.base200};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  hr {
    background-color: ${({ theme }) => theme.color.text.secondary};
    height: 1px;
    border: none;
  }
`;

const FlexRowSpaced = styled.div`
  display: flex;
  justify-content: space-between;
`;

type HeaderProps = {
  toggleTheme: () => void;
  followerCount: string;
};

export const Header: React.FC<HeaderProps> = ({
  toggleTheme,
  followerCount,
}: HeaderProps) => {
  return (
    <StyledHeader>
      <div>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: {followerCount}</p>
      </div>
      <hr />
      <FlexRowSpaced>
        <p>Dark Mode</p>
        <button onClick={toggleTheme}>SLIDER</button>
      </FlexRowSpaced>
    </StyledHeader>
  );
};
