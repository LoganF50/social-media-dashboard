import styled from "styled-components";

const Button = styled.span<StyleProps>`
  content: "";
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.circular};
  transition: 0.2s;
  background: ${({ theme }) => theme.color.background.secondary};

  ${({ isOn }) =>
    !isOn &&
    `
    left: calc(100% - 0.2rem);
    transform: translateX(-100%);
  `}
`;

const Label = styled.label<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 3rem;
  height: 1.6rem;
  background: ${({ isOn, theme }) =>
    isOn
      ? `linear-gradient(to right, ${theme.color.toggle.background.blue}, ${theme.color.toggle.background.green})`
      : theme.color.toggle.background.gray};
  border-radius: ${({ theme }) => theme.borderRadius.circular};
  position: relative;
  transition: background-color 0.2s;
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
  height: 0;
  width: 0;
  visibility: hidden;
`;

type StyleProps = {
  isOn: boolean; //off === move button to right
};

type SwitchProps = StyleProps & {
  handleToggle: () => void;
  label: string;
};

export const Switch: React.FC<SwitchProps> = ({
  handleToggle,
  isOn,
  label,
}: SwitchProps) => {
  return (
    <>
      <Checkbox checked={isOn} onChange={handleToggle} id={label} />
      <Label htmlFor={label} isOn={isOn}>
        <Button isOn={isOn} />
      </Label>
    </>
  );
};
