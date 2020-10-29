import React from "react"
import {
  TextField,
  Box,
  Container,
  Button  
} from "@material-ui/core"


const DistributorUIForm=({form:{form,onchange,onsubmit,registerFormValid}})=>{
    
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
            label="Enter Ware house details"
            value={form.WareHouseName||""}
            margin="normal"
            onChange={onchange}
            name="WareHouseName">
           </TextField>
        <TextField
            variant="outlined"
            label="Enter transport type"
            margin="normal"
            onChange={onchange}
            value={form.TransportType||""}
            name="TransportType">
           </TextField>
           <TextField
            variant="outlined"
            label="Enter date"
            margin="normal"
            onChange={onchange}
            value={form.Date||""}
            name="Date">
           </TextField>
           <TextField
            variant="outlined"
            label="Quantity"
            margin="normal"
            onChange={onchange}
            value={form.Quantity||""}
            name="Quantity">
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

export default DistributorUIForm;