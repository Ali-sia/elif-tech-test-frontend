import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: ${p => p.theme.space[8] + 100}px;
  padding: ${p => p.theme.space[5] - 6}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const InnerForm = styled.div`
  display: flex;
`;
export const TotalPrice = styled.h3`
  font-size: ${p => p.theme.fontSizes.l};
`;

export const StyledButton = styled.button`
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.sm};
  border-color: transparent;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const InputName = styled.div`
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const Input = styled.input`
  border-radius: ${p => p.theme.radii.sm};
  padding: ${p => p.theme.space[2]}px;
`;
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: ${p => p.theme.space[4]}px;
`;
