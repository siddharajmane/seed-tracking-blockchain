import React,{useState} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import contract from "../../../contract"
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  CircularProgress,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import Pages from '@material-ui/icons/Pages';
const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const BatchTile = ({ className, ...rest }) => {
  const classes = useStyles();
  const [loading,setloading] = useState(true);
  const [count,setCount] = useState();
  let adder=0;

  
    const getbatchdata= ()=>{
       contract.getPastEvents('BatchAdded',{
        fromBlock : 0
       }, function(err,event){
         event.forEach(element => {
            adder++
         });
         setCount(adder)
         setloading(false)
       })
    }
     
     getbatchdata();
     

  if(loading===true){
    return <Card>
      <CircularProgress />
    </Card>
  }
  else{
    return (
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardContent>
          <Grid
            container
            justify="space-between"
            spacing={3}
          >
            <Grid item>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="h6"
              >
                TOTAL BATCHES
              </Typography>
              <Typography
                color="textPrimary"
                variant="h3"
              >
                {count}
              </Typography>
            </Grid>
            <Grid item>
              <Avatar className={classes.avatar}>
                <Pages/>
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }

  
};

BatchTile.propTypes = {
  className: PropTypes.string
};

export default BatchTile;
