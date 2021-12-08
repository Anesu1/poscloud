import styled from 'styled-components';
import { FormControl, Input, InputLabel,  TextField } from '@material-ui/core';
import Button from './Button';
import Radio from '../styled/Radio'


const FormWrapper = styled.form`
    @media(min-width:768px){
        width:45%;
    }
    .MuiFormControl-root{
        width:100%;
        margin-bottom:20px;
        font-family:${props => props.theme.fam.mont};
        font-size:15px;
        input,label{
            font-family:${props => props.theme.fam.mont}; 
            color:#000000;
        }
    }
    h4{
        font-family:${props => props.theme.fam.mont};
    }
`;

function Form() {
    return (
        <FormWrapper>
             <FormControl>
                    <InputLabel>Full Name</InputLabel>
                    <Input type="text"/>
                </FormControl>
                <h4>Desired Department</h4>
            <Radio />
             <FormControl>
                    <InputLabel>Your email address</InputLabel>
                    <Input type="email"/>
                </FormControl>
                
                <TextField
                id="standard-multiline-static"
                label="Ask us any questions"
                multiline
                rows={4}
                />
                <Button>Submit Message</Button>
        </FormWrapper>
    )
}

export default Form
