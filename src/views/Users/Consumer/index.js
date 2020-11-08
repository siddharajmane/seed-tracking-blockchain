import React,{useState} from "react"
import contract from "../../../contract"
import Stepper from "./Stepper"
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

    const [trackingdata,settrackingdata] = useState();
    const [status,setstatus] = useState(false)
    const [tagid,settagid] = useState('');
    const onsubmit= async()=>{

        if(status===true){
            setstatus(false)
            await contract.methods.consumer(tagid).call().then(res=>{
                console.log(res[0][0]);
                console.log(res)
                settrackingdata(res);
                setstatus(true)
           })
        }else{
            await contract.methods.consumer(tagid).call().then(res=>{
                console.log(res[0][0]);
                console.log(res)
                settrackingdata(res);
                setstatus(true)
           }) 
        }
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
                        value={tagid}
                        margin="normal"
                        onChange={(e)=>settagid(e.target.value)}
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
                    <Typography  variant="h3"
                                 color="Black">
                                Tracking Details
                            </Typography>
                    </Container>
                    <Box m={3}>
                    <Stepper data={trackingdata} status={status}/>
                    </Box>
                </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ConsumerModule;