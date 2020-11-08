import React,{useState} from "react"
import LatestOrders from "../../reports/DashboardView/LatestOrders"
import {
    makeStyles,
    Paper,
    Grid,
    Box,
    Container,
    Typography,
    TextField,
    Button
} from "@material-ui/core"

  import { SupervisedUserCircleRounded } from '@material-ui/icons'
  
  const useStyles = makeStyles((theme) => ({
      root: {
          flexGrow:1,
          backgroundColor:theme.palette.dark
      },
      paper: {
        margin:"4px",
        padding: theme.spacing(2),
        color: theme.palette.text.primary,
      },
    }));

const ConsumerModule = ()=>{

    const [form,setForm] = useState({});

    const onchange= (e)=>{

        setForm({...form,[e.target.name]:e.target.value})

    }
    const onsubmit=()=>{
        console.log(form)
    }


    const classes = useStyles()
    return(
        <div  className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Box display="flex">
                            <Paper elevation={6}>
                                <SupervisedUserCircleRounded fontSize="large"/>
                            </Paper>
                            <Box ml={5} display="flex"
                            justifyContent="space-between">
                            <Typography  variant="h3"
                                 color="Black">
                                Consumer
                            </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={6} className={classes.paper}>
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
                        </Box>
                 <Box p={4}>
                  <Button
                    type='button'
                    onClick={onsubmit}
                    color="primary"
                    fullWidth
                    variant="contained"
                  >
                  Get Tracking details
                  </Button>
                </Box>
                </Container>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                <Paper elevation={6} className={classes.paper}>
                    <Container>
                    <Typography  variant="h5"
                                 color="Black">
                                Tracking Details
                            </Typography>
                    </Container>
                </Paper>
                </Grid>
                <Grid
                item
                lg={12}
                md={12}
                xl={9}
                xs={12}>
                <Paper elevation={6} className={classes.paper}>
                    <LatestOrders />
                 </Paper> 
                </Grid>
            </Grid>
        </div>
    )
}

export default ConsumerModule;