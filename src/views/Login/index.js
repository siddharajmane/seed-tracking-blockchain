import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const LoginView = () => {
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
