import React,{useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import web3 from '../../web3'
import contract from '../../contract'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {

  const [accname,setname] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
    web3.eth.getAccounts().then(res=>{
      if(res[0]==="0xFF6b4F6C7591a562276dD0FF73c44f564b03961f"){
        setname("admin");
      }
      else{
        contract.methods.getUser(res[0]).call().then(function(res){
             if(res.userType==="SeedProducingAgency")
             {
               setname("SPA")
               console.log("SPA user detected")
               console.log(res)
             }else if(res.userType==="SeedGrower"){
               setname("SG")
               console.log("SG user detected",res)
             }else if(res.userType==="Processor"){
              setname("Sp")
              console.log("Sp user detected")
            }else if(res.userType==="Lab"){
              setname("lab")
              console.log("lab user detected")
            }else if(res.userType==="Certification"){
              setname("certification")
              console.log("certification user detected")
            }else if(res.userType==="Distributor"){
              setname("distribution")
              console.log("distribution user detected",res)
            }
          })
      }
    })
  },[])

  const onclick = ()=>{
    if(accname==="admin"){
      navigate("/app/dashboard")
    }else if(accname==="SPA"){
      navigate("/spa")
    }else if(accname==="SG"){
      navigate("/sg")
    }else if(accname==="Sp"){
      navigate("/pp")
    }else if(accname==="lab"){
      navigate("/lab")
    }else if(accname==="certification"){
      navigate("/sca")
    }else if(accname==="distribution"){
      navigate("/distributor")
    }
  }

  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Register"
    >
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
                <Box my={2}>
                <Typography
                    color="textPrimary"
                    variant="h4"
                  >
                    Login to metamask before login
                  </Typography>
                  <Button
                    type='button'
                    color="primary"
                    onClick={onclick}
                    fullWidth
                    variant="contained"
                  >
                   Click to Login
                  </Button>
                </Box>
              
        </Container>
      </Box>
    </Page>
  );
};

export default LoginView;
