import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  color: inherit;
  border: none;
  white-space: nowrap;

  cursor: pointer;

  &:focus-visible {
    outline: 2px solid orangered;
  }
`;

type Props = {
  label: string;
  onPress: () => void;
};

const LinkButton = ({
  label,
  onPress,
}: Props) => {
  return (
    <StyledButton
      onClick={onPress}
    >
      {label}
    </StyledButton>
  );
};

export default LinkButton;
