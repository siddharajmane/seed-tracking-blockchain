import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ data, showdata}) => {
  const classes = useStyles();
  if(showdata===true){
    return (
      <Card
        className={clsx(classes.root)}
      >
        <CardHeader title="Seed Batches in progress" />
        <Divider />
        <PerfectScrollbar>
          <Box minWidth={800}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Tag No
                  </TableCell>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    Next Action Pending
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((order) => (
                  <TableRow
                    hover
                    key={order.index}
                  >
                    <TableCell>
                      {order.TagNo}
                    </TableCell>
                    <TableCell>
                      {order.date}
                    </TableCell>
                    <TableCell>
                      <Chip
                        color="primary"
                        label={order.action}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            endIcon={<ArrowRightIcon />}
            size="small"
            variant="text"
          >
            View all
          </Button>
        </Box>
      </Card>
    );
  }else{
    return null;
  }

  
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
