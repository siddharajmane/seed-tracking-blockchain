import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
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

const RegisterView = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
          <Formik
            initialValues={{
              Name: '',
              Contact: '',
              Location: '',
            }}
            validationSchema={
              Yup.object().shape({
                Name: Yup.string().max(255).required('Name is required'),
                Contact: Yup.string().max(255).required('Last name is required'),
                location: Yup.string().max(255).required('Location is required'),
              })
            }
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box mb={3}>
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    Add user
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.firstName && errors.firstName)}
                  fullWidth
                  helperText={touched.firstName && errors.firstName}
                  label="Enter name of user"
                  margin="normal"
                  name="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  helperText={touched.lastName && errors.lastName}
                  label="Enter contact"
                  margin="normal"
                  name="Contact"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Enter location"
                  margin="normal"
                  name="Location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
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
                    <RadioGroup aria-label="userType" name="userType" value="Lab" onChange={handleChange}>
                    <FormControlLabel value="Producer" control={<Radio />} label="Producer" />
                    <FormControlLabel value="Lab" control={<Radio />} label="Lab" />
                    <FormControlLabel value="Consumer" control={<Radio />} label="Consumer" />
                    <FormControlLabel value="Inspector" control={<Radio />} label="Inspector" />
                    </RadioGroup>
                </Box>
                <Box my={2}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Create User
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </Page>
  );
};

export default RegisterView;
