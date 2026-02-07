import styled from 'styled-components';
import StyledButton from './Button.StyledButton';

const Container = styled.div`
  white-space: nowrap;
`;

const LeftButtonPart = styled(StyledButton)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const MiddleButtonPart = styled(StyledButton)`
  border-radius: 0;
`;

const RightButtonPart= styled(StyledButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

type ButtonPart = {
  isDisabled?: boolean;
  label: string;
  onPress: () => void;
};

type Props = {
  left: ButtonPart;
  middle: ButtonPart;
  right: ButtonPart;
};

const ThreePartButton = ({
  left,
  right,
  middle,
}: Props) => {

  const renderButtonPart = (
    Component: typeof StyledButton,
    buttonPart: ButtonPart,
  ) => {
    return (
      <Component
        disabled={buttonPart.isDisabled}
        onClick={buttonPart.onPress}
      >
        {buttonPart.label}
      </Component>
    );
  };

  return (
    <Container>
      {renderButtonPart(LeftButtonPart, left)}
      {renderButtonPart(MiddleButtonPart, middle)}
      {renderButtonPart(RightButtonPart, right)}
    </Container>
  );
};

export default ThreePartButton;
