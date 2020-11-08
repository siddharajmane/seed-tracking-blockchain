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
            id="date"
           label="Enter date of issue"
            type="date"
            value={form.date||"2020-05-24"}
            name="date"
            onChange={onchange}
           />
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
                      Cultivate 
                  </Button>
                </Box>
       </Container>
    )
}

export default InspectorUIForm;