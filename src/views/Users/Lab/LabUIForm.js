import React from "react"
import {
  TextField,
  Box,
  Container,
  Button  
} from "@material-ui/core"


const LabUIForm=({form:{form,onchange,onsubmit,registerFormValid}})=>{
    
    return(
        <Container>
        <Box display="flex"
        flexDirection="column"
        p={4}
        >
          <TextField
            variant="outlined"
            label="Enter Tag no"
            value={form.BatchNo||""}
            margin="normal"
            onChange={onchange}
            name="BatchNo">
           </TextField>
           <TextField
            id="date"
           label="Enter test date"
            type="date"
            value={form.date||"2017-05-24"}
            name="date"
            onChange={onchange}
           />
        <TextField
            variant="outlined"
            label="Enter result"
            margin="normal"
            onChange={onchange}
            value={form.Result||""}
            name="Result">
           </TextField>
       </Box>
       <Box p={4}>
                  <Button
                    type='button'
                    disabled={registerFormValid}
                    onClick={onsubmit}
                    color="primary"
                    fullWidth
                    variant="contained"
                  >
                   Upadate Details
                  </Button>
                </Box>
       </Container>
    )
}

export default LabUIForm;