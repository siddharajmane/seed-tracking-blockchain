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
            label="Enter total quantity"
            margin="normal"
            onChange={onchange}
            value={form.TotalQuantity||""}
            name="TotalQuantity">
           </TextField>
           <TextField
            id="date"
           label="Enter Processing date"
            type="date"
            value={form.date||"2017-05-24"}
            name="date"
            onChange={onchange}
           />
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