import React from 'react';
import {
  Box,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  Container,
  FormControlLabel,
  TextField,
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

const RegisterView = ({form:{form,onchange,onsubmit,registerFormValid}}) => {
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
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Add user
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  label="Address"
                  margin="normal"
                  name="Address"
                  onChange={onchange}
                  value={form.Address ||""}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Enter name of user"
                  margin="normal"
                  name="Name"
                  onChange={onchange}
                  value={form.Name ||""}
                  variant="outlined"
                />
                <Box
                  alignItems="flex-start"
                  display="flex"
                  flexDirection="column"
                  ml={-1}
                  p={2}
                >
                   <FormLabel component="legend">Select User Type</FormLabel>
                    <RadioGroup aria-label="userType" name="userType" value={form.userType||"Producer"} onChange={onchange}>
                    <FormControlLabel value="BatchDetails" control={<Radio />} label="Seed Producing agency" />
                    <FormControlLabel value="seedGrower" control={<Radio />} label="Seed Grower" />
                    <FormControlLabel value="processor" control={<Radio />} label="Seed Processor" />
                    <FormControlLabel value="lab" control={<Radio />} label="Lab" />
                    <FormControlLabel value="certification" control={<Radio />} label="Seed Certification authority" />
                    <FormControlLabel value="distribution" control={<Radio />} label="Distributor" />

                    </RadioGroup>
                </Box>
                <Box my={2}>
                  <Button
                    type='button'
                    disabled={registerFormValid}
                    onClick={onsubmit}
                    color="primary"
                    fullWidth
                    size="large"
                    variant="contained"
                  >
                    Create User
                  </Button>
                </Box>
              
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
