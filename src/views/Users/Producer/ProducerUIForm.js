import React from "react"
import {
  TextField,
  Box,
  Container,
  Button  
} from "@material-ui/core"



const ProducerUIForm=({form:{form,onchange,onsubmit,registerFormValid}})=>{
    
    return(
        <Container>
        <Box display="flex"
        flexDirection="column"
        p={4}
        >
            <TextField
            variant="outlined"
            label="BatchID"
            value={form.BatchID||""}
            margin="normal"
            onChange={onchange}
            name="BatchID">
           </TextField>
        <TextField
            variant="outlined"
            label="BatchQuantity"
            margin="normal"
            onChange={onchange}
            value={form.BatchQuantity||""}
            name="BatchQuantity">
           </TextField>
       </Box>
       <Box p={4}>
                  <Button
                    type='button'
                    onClick={onsubmit}
                    color="primary"
                    fullWidth
                    variant="contained"
                  >
                    Add batch
                  </Button>
                </Box>
       </Container>
    )
}

export default ProducerUIForm;