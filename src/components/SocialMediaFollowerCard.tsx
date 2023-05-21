import styled from "styled-components";

const StyledCard = styled.div<CardStyleProps>`
  background-color: ${({ theme }) => theme.color.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  overflow: hidden;
`;

const CardAccent = styled.div<CardStyleProps>`
  background-color: ${({ colors }) => (colors ? colors[0] : "none")};
  background: linear-gradient(
    ${({ colors }) =>
      colors.length > 1
        ? `to right, ${colors[0]}, ${colors[1]}`
        : `to right, ${colors[0]}, ${colors[0]} : `}
  );
  height: 4px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base600};
  padding: ${({ theme }) => theme.spacing.base800};
`;

const FollowerChange = styled.p<CardStyleProps>`
  display: flex;
  color: ${({ theme, followerChange }) =>
    followerChange > 0 ? theme.color.green : theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.base100};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &::before {
    display: flex;
    align-items: center;
    padding-right: ${({ theme }) => theme.spacing.base200};
    content: ${({ followerChange }) =>
      followerChange > 0
        ? "url(images/icon-up.svg)"
        : "url(images/icon-down.svg)"};
  }
`;

const FollowerCount = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base800};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const FollowerName = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  text-transform: uppercase;
  letter-spacing: 0.3rem;
`;

const UserHandle = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base100};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base200};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base300};
`;

type CardStyleProps = {
  colors: string[];
  followerChange: number;
};

type CardProps = CardStyleProps & {
  followerCount: string;
  followerName: string;
  imgAlt: string;
  imgSrc: string;
  userHandle: string;
};

export const SocialMediaFollowerCard: React.FC<CardProps> = ({
  colors,
  followerCount,
  followerName,
  followerChange = 0,
  imgAlt,
  imgSrc,
  userHandle,
}: CardProps) => {
  return (
    <StyledCard colors={colors} followerChange={followerChange}>
      <CardAccent colors={colors} followerChange={followerChange} />
      <CardInfo>
        <FlexRow>
          <img src={imgSrc} alt={imgAlt} />
          <UserHandle>{userHandle}</UserHandle>
        </FlexRow>
        <FlexColumn>
          <FollowerCount>{followerCount}</FollowerCount>
          <FollowerName>{followerName}</FollowerName>
        </FlexColumn>
        <FlexColumn>
          <FollowerChange colors={colors} followerChange={followerChange}>
            {Math.abs(followerChange)} Today
          </FollowerChange>
        </FlexColumn>
      </CardInfo>
    </StyledCard>
  );
};
