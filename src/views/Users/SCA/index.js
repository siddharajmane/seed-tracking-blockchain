import React from "react"
import InspectorForm from "./InspectorForm"
import useForm from "./useForm"
import LatestOrders from "../../reports/DashboardView/LatestOrders"
import {
    makeStyles,
    Paper,
    Grid,
    Box,
    Typography,
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

const InspectorModule = ()=>{

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
                                Seed Certification Authority (SCA)
                            </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={6} className={classes.paper}>
                        <InspectorForm form={useForm()}/>
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

export default InspectorModule