import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.base200};
  padding: ${({ theme }) => theme.spacing.base600};
  gap: ${({ theme }) => theme.spacing.base600};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.card.hover};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobileLg}) {
    flex: 1 1 40%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex: 1 1 20%;
  }
`;

const FlexRowCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.base300};
`;

const FlexRowEnd = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.base300};
`;

const Amount = styled.p`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: ${({ theme }) => theme.fontSize.base700};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const Change = styled.p<CardStyleProps>`
  display: flex;
  color: ${({ theme, change }) =>
    change > 0 ? theme.color.green : theme.color.red};
  font-size: ${({ theme }) => theme.fontSize.base100};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  &::before {
    display: flex;
    align-items: center;
    padding-right: ${({ theme }) => theme.spacing.base200};
    content: ${({ change }) =>
      change > 0 ? "url(images/icon-up.svg)" : "url(images/icon-down.svg)"};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.color.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.base200};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: capitalize;
`;

type CardStyleProps = {
  change: number;
};

type CardProps = CardStyleProps & {
  description: string;
  amount: string;
  imgAlt: string;
  imgSrc: string;
};

export const SocialMediaOverviewCard: React.FC<CardProps> = ({
  change,
  description,
  amount,
  imgAlt,
  imgSrc,
}: CardProps) => {
  return (
    <StyledCard>
      <FlexRowCenter>
        <Description>{description}</Description>
        <img src={imgSrc} alt={imgAlt} />
      </FlexRowCenter>
      <FlexRowEnd>
        <Amount>{amount}</Amount>
        <Change change={change}>{Math.abs(change)}%</Change>
      </FlexRowEnd>
    </StyledCard>
  );
};
