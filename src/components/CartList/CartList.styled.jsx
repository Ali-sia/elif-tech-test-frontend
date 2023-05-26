import styled from 'styled-components';

export const StyledCartList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: ${p => p.theme.space[5] - 6}px;
`;

export const CartItem = styled.li`
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.md};
  padding: ${p => p.theme.space[5] - 6}px;

  width: ${p => p.theme.space[8] + 44}px;
  height: ${p => p.theme.space[8] + 90}px;

  margin-bottom: ${p => p.theme.space[2]}px;

  margin-right: ${p => p.theme.space[2]}px;
`;

export const PhotoHolder = styled.div`
  width: 100%;
  height: ${p => p.theme.space[7] + 22}px;

  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.darkBackground};
`;

export const ItemInfo = styled.div`
  padding: ${p => p.theme.space[3]}px 0px;
  font-size: ${p => p.theme.fontSizes.m};
`;
export const ItemTitle = styled.h3`
  font-size: ${p => p.theme.fontSizes.ml};
  padding-bottom: ${p => p.theme.space[2]}px;
`;
export const ItemPrice = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const ItemQuantity = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const StyledButton = styled.button`
  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  border-color: transparent;
  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
`;
