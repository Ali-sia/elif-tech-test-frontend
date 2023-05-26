import styled from 'styled-components';

export const StyledShopList = styled.ul`
  overflow-y: auto;
  width: ${p => p.theme.space[8]}px;
  min-height: 100vh;

  padding: ${p => p.theme.space[5] - 6}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.darkBackground};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ShopItem = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;

  padding: ${p => p.theme.space[3]}px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
`;

export const ShopLabel = styled.label`
  width: 100%;
  & input {
    margin-right: ${p => p.theme.space[3]}px;
  }
`;
