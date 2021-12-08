import * as React from 'react';
import Radio from '@mui/material/Radio';
import styled from 'styled-components'

const Wrapper = styled.div`
@media(min-width:768px){
  display:flex;
}
  .item{
    display:flex;
    align-items:center;
  }
`;

export default function RadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('Information');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Wrapper>
      <div className="item">
        <Radio
        checked={selectedValue === 'Information'}
        onChange={handleChange}
        value="Information"
        name="radio-buttons"
        id="info"
        inputProps={{ 'aria-label': 'Information' }}
      /> <label htmlFor="info">Information</label>
      </div>
      <div className="item">
         <Radio
        checked={selectedValue === 'Support'}
        onChange={handleChange}
        value="Support"
        name="radio-buttons"
        id="support"
        inputProps={{ 'aria-label': 'Support' }}
      /> <label htmlFor="support">Support</label>
      </div>
     
    </Wrapper>
  );
}