import React from 'react'
import { Button, Form, Grid, Divider } from 'semantic-ui-react'
import { Image, Icon,Header,Table } from 'semantic-ui-react'

const src1 = '/images/barcode.png'

function SectionOne() {
    return (
        /* Signup container */
        <Grid>
             <Grid.Row columns={4} only='computer only' >
             <Grid.Column>
               <div className="box">
            <h3 className="sign">Confirm Order</h3>
            <Form>
    <Form.Field>
      <label className='message'>You will recieve</label>
      <p className='sign'>150.543212890<span className='ratiolast'> USDT</span></p>
        </Form.Field>
       
    <Header as='p' floated='left'>
      Address
    </Header>
      <Header as='p' floated='right'>
     asssyhfvjmnbjbshddddd
    </Header>
    <Header as='p' floated='left'>
      Network
    </Header>
      <Header as='p' floated='right'>
      TNCRO
    </Header>

    <Divider clearing />
    <Header as='p' floated='left'>
     Coin
    </Header>
      <Header as='p' floated='right'>
     USDT
    </Header>  
     <Button type='submit'>Confirm</Button>
   
  </Form>
   </div>
    </Grid.Column>
    <Grid.Column >
     <div className="box3">
     <h3 className="sign">Deposit USDT </h3>
     <h4>BRP20&nbsp; ETR10&nbsp; BEP20&nbsp; TRC1&nbsp; TRC20&nbsp; SCE2&nbsp; BST40</h4>
     <Image src={src1} size='small' centered /><br/>
     <p className='depositText'>USDT Deposit Address &nbsp; &nbsp; &nbsp;
     <Icon enabled name='copy' className='icon1' id='icon1'/> <br/>
     n6mge7asd11bfsp24km89sd1k3sdnkBlygfdghkgcd</p>
     <Icon enabled name='ban' className='icon1' />
      <span className='ratiolast'> Send only BTC to this deposit address. 
         </span><br/><br/>
   
     <Button type='submit'>Share Address</Button>
   
  </div>
  </Grid.Column>
  <Grid.Column>
        <div className="box1" id='box1'>
            <h3 className="forgot">Market Rate</h3>
            <Form>
            <Table>
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell>Coin</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Change</Table.HeaderCell>
        <Table.HeaderCell>Volume</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
        <Image src='images/bitcoin.png' avatar  />
      <span>Bitcoin</span>
     <p className='label'><label>BTC</label></p>
        </Table.Cell>
        <Table.Cell>$6750</Table.Cell>
        <Table.Cell>+7.3%</Table.Cell>
        <Table.Cell>$3420214</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
        <Image src='images/litcoin.jpg' avatar  />
      <span>Litcoin</span>
     <p className='label'><label>LTC</label></p>
        </Table.Cell>
        <Table.Cell>$8535</Table.Cell>
        <Table.Cell>+8.2%</Table.Cell>
        <Table.Cell>$5820399</Table.Cell>
      </Table.Row>
     
    </Table.Body>
    </Table>
         </Form>
  </div>
  
  </Grid.Column>

  <Grid.Column >
        <div className="box2">
        <Icon enabled name='check circle center' className='icon' />
            <h3 className='sign' id='sign1'>Success!</h3>
            <Form>
    <Form.Field>
      <label className='message'>A mail has been sent to you olamij@gmail.com.
        Please check your email and click on the included link 
        to rest your password.
      </label>
        </Form.Field>
   
       <Button type='submit'>Back to Home</Button>
          </Form>
  </div>
 
  </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={1} only='mobile only' >
             <Grid.Column>
               <div className="box">
            <h3 className="sign">Confirm Order</h3>
            <Form>
    <Form.Field>
      <label className='message'>You will recieve</label>
      <p className='sign'>150.543212890<span className='ratiolast'> USDT</span></p>
        </Form.Field>
       
    <Header as='p' floated='left'>
      Address
    </Header>
      <Header as='p' floated='right'>
     asssyhfvjmnbjbshddddd
    </Header>
    <Header as='p' floated='left'>
      Network
    </Header>
      <Header as='p' floated='right'>
      TNCRO
    </Header>

    <Divider clearing />
    <Header as='p' floated='left'>
     Coin
    </Header>
      <Header as='p' floated='right'>
     USDT
    </Header>  
     <Button type='submit'>Confirm</Button>
   
  </Form>
   </div>
    </Grid.Column>
    <Grid.Column >
     <div className="box3">
     <h3 className="sign">Deposit USDT </h3>
     <h4>BRP20&nbsp; ETR10&nbsp; BEP20&nbsp; TRC1&nbsp; TRC20&nbsp; SCE2&nbsp; BST40</h4>
     <Image src={src1} size='small' centered /><br/>
     <p className='depositText'>USDT Deposit Address &nbsp; &nbsp; &nbsp;
     <Icon enabled name='copy' className='icon1' id='icon1'/> <br/>
     n6mge7asd11bfsp24km89sd1k3sdnkBlygfdghkgcd</p>
     <Icon enabled name='ban' className='icon1' />
      <span className='ratiolast'> Send only BTC to this deposit address. 
         </span><br/><br/>
   
     <Button type='submit'>Share Address</Button>
   
  </div>
  </Grid.Column>
  
  <Grid.Column >
        <div className="box2">
        <Icon enabled name='check circle center' className='icon' />
            <h3 className='sign' id='sign1'>Success!</h3>
            <Form>
    <Form.Field>
      <label className='message'>A mail has been sent to you olamij@gmail.com.
        Please check your email and click on the included link 
        to rest your password.
      </label>
        </Form.Field>
   
       <Button type='submit'>Back to Home</Button>
          </Form>
  </div>
 
  </Grid.Column>
    </Grid.Row>
    </Grid>   
    )

    
}

export default SectionOne
