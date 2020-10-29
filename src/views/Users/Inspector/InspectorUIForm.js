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
            label="Enter Batch no"
            value={form.BatchNo||""}
            margin="normal"
            onChange={onchange}
            name="BatchNo">
           </TextField>
            <TextField
            variant="outlined"
            label="Enter type of seed"
            value={form.TypeOfSeed||""}
            margin="normal"
            onChange={onchange}
            name="TypeOfSeed">
           </TextField>
        <TextField
            variant="outlined"
            label="Enter fertilizer used"
            margin="normal"
            onChange={onchange}
            value={form.Fertilizer||""}
            name="Fertilizer">
           </TextField>
           <TextField
            variant="outlined"
            label="Enter seed condition"
            margin="normal"
            onChange={onchange}
            value={form.SeedCondition||""}
            name="SeedCondition">
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
                   Update Details
                  </Button>
                </Box>
       </Container>
    )
}

export default InspectorUIForm;