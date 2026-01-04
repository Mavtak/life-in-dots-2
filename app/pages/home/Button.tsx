import StyledButton from './Button.StyledButton';

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
