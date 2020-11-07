import React from "react"
import {
  TextField,
  Box,
  Container,
  Button  
} from "@material-ui/core"


const InspectorUIForm=({form:{form,onchange,onsubmit,registerFormValid}})=>{
    
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
            variant="outlined"
            label="Enter Certificate info"
            value={form.Certificate||""}
            margin="normal"
            onChange={onchange}
            name="Certificate">
           </TextField>
           <TextField
            id="date"
           label="Enter Issuing date"
            type="date"
            value={form.date||"2017-05-24"}
            name="date"
            onChange={onchange}
           />
           <TextField
            variant="outlined"
            label="Enter Validity"
            margin="normal"
            onChange={onchange}
            value={form.Validity||""}
            name="Validity">
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
                   Update Details
                  </Button>
                </Box>
       </Container>
    )
}

export default InspectorUIForm;