import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #4d007f;
  color: white;

  padding: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  line-height: 20px;
  border: none;
  border-radius: 20px;

  &:active {
    background-color: orangered;
  }

  &:disabled {
    color: gray;
  }

  &:focus-visible {
    outline: 2px solid orangered;
  }
`;

type Props = {
  label: string;
  isDisabled?: boolean;
  onPress: () => void;
};

const Button = ({
  label,
  isDisabled = false,
  onPress,
}: Props) => {
  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onPress}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
