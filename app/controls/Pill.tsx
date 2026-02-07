import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #9e45d9;
  color: white;

  padding: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  border-radius: 16px;

  white-space: nowrap;

  cursor: pointer;

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
  onPress: () => void;
};

const Pill = ({
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

export default Pill;
