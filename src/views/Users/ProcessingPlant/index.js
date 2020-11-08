import React,{useEffect,useState} from "react"
import ProducerForm from "./ProducerForm"
import contract from '../../../contract'
import useForm from "./useForm"
import {
    makeStyles,
    Paper,
    Grid,
    Box,
    Typography,
    Button
  } from "@material-ui/core"
import LatestOrders from "../../reports/DashboardView/LatestOrders"
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

const ProducerModule = ()=>{

    const [tabledata,settabledata] = useState();
    const [showdata,setshowdata] = useState(false)
    const logdata=[]
    useEffect(()=>{
        const getbatchdata= async()=>{
            await contract.getPastEvents('BatchAdded',{
               fromBlock : 0
              }, function(err,event){
                event.forEach(element => {
                   const object ={}
                  contract.methods.getNextAction(element.returnValues[1]).call().then(function(res){
                    if(res==="Processor"){
                        object.action = res
                        object.TagNo=element.returnValues[1]
                        contract.methods.getBatchDetails(element.returnValues[1]).call().then(function(res){
                            object.date = res._Date
                            logdata.push(object)
                        })
                    }
                  })
                });
                console.log(logdata)
                settabledata(logdata)
              })
           }
           getbatchdata();
    },[])

    const onsubmit = ()=>{
        setshowdata(true)
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
                                Processing Plant
                            </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={6} className={classes.paper}>
                        <ProducerForm form={useForm()}/>
                    </Paper>
                </Grid>
                <Grid
                item
                lg={12}
                md={12}
                xl={9}
                xs={12}>
                <Paper elevation={6} className={classes.paper}>
                <Box my={2}>
                  <Button
                    type='button'
                    onClick={onsubmit}
                    color="primary"
                    size="large"
                    variant="contained"
                  >
                    Show Transactions
                  </Button>
                </Box>
                    <LatestOrders data={tabledata} showdata={showdata} />
                 </Paper> 
                </Grid>
               
            </Grid>
        </div>
    )
}

export default ProducerModule