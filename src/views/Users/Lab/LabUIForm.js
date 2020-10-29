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
            label="Enter Batch no"
            value={form.BatchNo||""}
            margin="normal"
            onChange={onchange}
            name="BatchNo">
           </TextField>
            <TextField
            variant="outlined"
            label="Seed Temp"
            value={form.Temp||""}
            margin="normal"
            onChange={onchange}
            name="Temp">
           </TextField>
        <TextField
            variant="outlined"
            label="Purification value"
            margin="normal"
            onChange={onchange}
            value={form.Purification||""}
            name="Purification">
           </TextField>
           <TextField
            variant="outlined"
            label="Germ value"
            margin="normal"
            onChange={onchange}
            value={form.Germ||""}
            name="Germ">
           </TextField>
           <TextField
            variant="outlined"
            label="Seed Moisture"
            margin="normal"
            onChange={onchange}
            value={form.SeedMoisture||""}
            name="SeedMoisture">
           </TextField>
           <TextField
            variant="outlined"
            label="Seed Quantity"
            margin="normal"
            onChange={onchange}
            value={form.SeedQuantity||""}
            name="SeedQuantity">
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