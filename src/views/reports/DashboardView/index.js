import React,{useEffect} from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import {useNavigate} from "react-router-dom"
import Page from 'src/components/Page';
import UserTile from './UserTile';
import LatestOrders from './LatestOrders';
import BatchTile from './BatchTile';
import RoleTile from './RoleTile';
import web3 from '../../../web3'
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {

  const navigate  = useNavigate();

  useEffect(()=>{
    web3.eth.getAccounts().then(res=>{
      if(res[0]==="0xFF6b4F6C7591a562276dD0FF73c44f564b03961f"){
        navigate("/app/dashboard");
      }
      else{
        navigate("/login")
      }
    })
  },[])
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <UserTile />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <RoleTile />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={3}
            xs={12}
          >
            <BatchTile />
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
