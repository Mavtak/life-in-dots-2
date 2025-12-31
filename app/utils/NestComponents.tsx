import {
  type FunctionComponent,
  type ReactNode,
} from 'react';

type Props = {
  children: ReactNode;
  components: FunctionComponent<any>[];
};

const NestComponents = ({ children, components }: Props) => {
  const result = components.reduceRight(
    (prev, Curr) => <Curr>{prev}</Curr>,
    <>{children}</>,
  );
  return result;
};

export default NestComponents;
