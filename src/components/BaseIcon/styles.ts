import styled from "styled-components";

// interface GenericIconProps{
//   backgroundColor: string;
// }

export const GenericIcon = styled.span<{color : string} >`
  padding: 0.5rem;
  border-radius: 50%;
  color: ${props => props.theme['background']};

  display: flex;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`