import styled from '@emotion/styled'; 

export const Numbers = styled.span`
  font-weight: 700;
`;

const bgrColor = props => {
  switch (props.categoryName) {
    case 'good':
      return ` rgba(22, 205, 22, 0.25)`;
    case 'neutral':
      return ` rgba(160, 95, 16, 0.6)`;
    case 'bad':
      return ` rgba(148, 7, 7, 0.2)`;
    default:
      console.log('Invalid subscription type');
  }
};

export const Category = styled.p`
  text-transform: capitalize; 
  margin: 0;
  width: 200px;
  padding: 16px;
  display: block;
  background-color: ${bgrColor}; 
`;
