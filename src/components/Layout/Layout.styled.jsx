import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: #000000;

  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.sm};
  text-decoration: none;

  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.primary};
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: ${p => p.theme.space[6] - 4}px;
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[5] - 6}px;
`;
