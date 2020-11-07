import React from "react"
import {
  TextField,
  Box,
  Container,
  Button  
} from "@material-ui/core"



const SPAUIForm=({form:{form,onchange,onsubmit,registerFormValid}})=>{
    
    return(
        <Container>
        <Box display="flex"
        flexDirection="column"
        p={4}
        >
            <TextField
            variant="outlined"
            label="Enter Tag no"
            value={form.BatchID||""}
            margin="normal"
            onChange={onchange}
            name="BatchID">
           </TextField>
        <TextField
            variant="outlined"
            label="Enter Crop"
            margin="normal"
            onChange={onchange}
            value={form.Crop||""}
            name="Crop">
           </TextField>
           <TextField
            id="date"
           label="Enter date of issue"
            type="date"
            value={form.date||"2017-05-24"}
            name="date"
            onChange={onchange}
           />
            <TextField
            variant="outlined"
            label="Enter Variety if available"
            margin="normal"
            onChange={onchange}
            value={form.Variety||""}
            name="Variety">
           </TextField>
           <TextField
            variant="outlined"
            label="Enter Source Quantity"
            margin="normal"
            onChange={onchange}
            value={form.SourceQuantity||""}
            name="SourceQuantity">
           </TextField>
           <TextField
            variant="outlined"
            label="Enter Owner"
            margin="normal"
            onChange={onchange}
            value={form.Owner||""}
            name="Owner">
           </TextField>
           <TextField
            variant="outlined"
            label="Enter plot no"
            margin="normal"
            onChange={onchange}
            value={form.Plot||""}
            name="Plot">
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

export default SPAUIForm;