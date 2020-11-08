import React,{useEffect,useState} from 'react';
import {
  Container,
  Grid,
  Button,
  Box,
  makeStyles
} from '@material-ui/core';
import {useNavigate} from "react-router-dom"
import Page from 'src/components/Page';
import UserTile from './UserTile';
import LatestOrders from './LatestOrders';
import BatchTile from './BatchTile';
import RoleTile from './RoleTile';
import web3 from '../../../web3'
import contract from '../../../contract'
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
  const logdata = []
  const [tabledata,settabledata] = useState();
  const [showdata,setshowdata] = useState(false)

  useEffect(()=>{
    web3.eth.getAccounts().then(res=>{
      if(res[0]==="0xFF6b4F6C7591a562276dD0FF73c44f564b03961f"){
        navigate("/app/dashboard");
      }
      else{
        navigate("/login")
      }
    })

    const getbatchdata= async()=>{
     await contract.getPastEvents('BatchAdded',{
        fromBlock : 0
       }, function(err,event){
         event.forEach(element => {
            const object ={}
            object.TagNo=element.returnValues[1]
            contract.methods.getBatchDetails(element.returnValues[1]).call().then(function(res){
             object.date = res._Date
      
           })
           contract.methods.getNextAction(element.returnValues[1]).call().then(function(res){
             object.action = res
           })
           logdata.push(object)
         });
         settabledata(logdata)
       })
    }
    
    getbatchdata();
    
  },[])

  const classes = useStyles();

  const onsubmit = ()=>{
   setshowdata(true)
    
  }

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
            <LatestOrders data={tabledata} showdata={showdata}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
