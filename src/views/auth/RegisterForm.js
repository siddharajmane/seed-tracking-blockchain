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
                <TextField
                  fullWidth
                  label="Enter contact"
                  margin="normal"
                  name="Contact"
                  onChange={onchange}
                  value={form.Contact ||""}
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Enter location"
                  margin="normal"
                  name="Location"
                  onChange={onchange}
                  value={form.Location ||""}
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
                    <FormControlLabel value="Producer" control={<Radio />} label="Producer" />
                    <FormControlLabel value="Lab" control={<Radio />} label="Lab" />
                    <FormControlLabel value="Consumer" control={<Radio />} label="Consumer" />
                    <FormControlLabel value="Inspector" control={<Radio />} label="Inspector" />
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
