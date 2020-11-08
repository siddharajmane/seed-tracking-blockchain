import React from 'react'
import { Icon, Step } from 'semantic-ui-react'
import {Typography} from "@material-ui/core"
const Stepper = ({data,status}) => {

    if(status===false){
        return  <Typography variant="h5"
                color="Black">
                Enter TagId to view tracking data
                eg 46282
                </Typography>
    }else{
        return <Step.Group vertical>
        <Step completed>
          <Icon name='truck' />
          <Step.Content>
            <Step.Title>Seed Producing Agency</Step.Title>
            <Step.Description>Crop: {data[0][1]}</Step.Description>
            <Step.Description>Cropvariety: {data[0][2]}</Step.Description>
            <Step.Description>SourceQuantity: {data[0][3]}</Step.Description>
            <Step.Description>Date: {data[0][4]}</Step.Description>
            <Step.Description>Owner: {data[0][5]}</Step.Description>
            <Step.Description>Plot no: {data[0][6]}</Step.Description>
          </Step.Content>
        </Step>
    
        <Step completed>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Seed Grower</Step.Title>
            <Step.Description>Cultivation date: {data[1][0]}</Step.Description>
          </Step.Content>
        </Step>
    
        <Step completed>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Seed Processor</Step.Title>
            <Step.Description>Quantity Processed: {data[2][1]}</Step.Description>
            <Step.Description>Date Processed: {data[2][2]}</Step.Description>
          </Step.Content>
        </Step>
    
        <Step completed>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Lab details</Step.Title>
            <Step.Description>Test date: {data[3][1]}</Step.Description>
            <Step.Description>Result: {data[3][2]}</Step.Description>
          </Step.Content>
        </Step>
    
        <Step completed>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Seed Certification Authority</Step.Title>
            <Step.Description>Certificate No: {data[4][1]}</Step.Description>
            <Step.Description>Date of test Verification: {data[4][2]}</Step.Description>
            <Step.Description>Validity in years: {data[4][3]}</Step.Description>
          </Step.Content>
        </Step>
    
        <Step completed>
          <Icon name='payment' />
          <Step.Content>
            <Step.Title>Distributor data</Step.Title>
            <Step.Description>Warehouse Location details: {data[5][1]}</Step.Description>
            <Step.Description>Date: {data[5][2]}</Step.Description>
          </Step.Content>
        </Step>
       </Step.Group>
    }


}
  

export default Stepper