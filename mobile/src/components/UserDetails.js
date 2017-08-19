import styled from 'styled-components/native';

export const Name = styled.Text`
  fontWeight: 600;
  fontSize: 16;
  paddingRight: 4;
  color: ${props => props.theme.SECONDARY};
`;

export const Meta = styled.Text`
  fontSize: 16;
  color: ${props => props.theme.LIGHT_GREY};
`;
