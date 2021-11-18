import { ReactNode } from 'react';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import { Container } from './styles';

type Props = {
  height: string;
  width: string;
  background?: string;
  children?: ReactNode;
  modalOpen: boolean;
}

export const Modal = (
  {
    height,
    width,
    background,
    children,
    modalOpen,
  }: Props) => {

  return (
    <Container
      height={height}
      width={width}
      background={background}
      style={{ display: modalOpen ? '' : 'none' }}>
      {children}
    </Container>
  );

};