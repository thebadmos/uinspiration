import React from 'react'
import { Button,Divider,Form, Grid } from 'semantic-ui-react'
import { Image,Dropdown } from 'semantic-ui-react'
import Design from './Design';



function SectionOne() {
    return (
        /* Signup container */
        <Grid>
             <Grid.Row columns={4} >
             <Grid.Column>
               <div className="box">
            <h3 className="sign">Convert Coin</h3>
            <Form>
    <Form.Field>
      <label>Amount</label>
      <input placeholder='60.456000' />
    </Form.Field>
    <Form.Field>
      <label>From</label>
      <Dropdown
    placeholder='BTC - Bitcoin'
    fluid
    selection
    className="dropdown"
    />    
    </Form.Field>
    <Form.Field>
      <label>To</label>
      <Dropdown
    placeholder='USDT - USDT'
    fluid
    selection
    className="dropdown"
    />    
    </Form.Field>
    <Design/>
    <p className='coinConvert'>60.4560 BTC = 
   <br/>
    <span>345.7821645290 USDT </span></p>
    </Form>
   </div>
    </Grid.Column>
    
    <Grid.Column >
     <div className="box4">
     <h3 className="sign">Account Security</h3>
        <Image src='images/disabled.png' avatar/>
      <span>2FA Authentication
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='disabled'><label>Disabled</label></p>   
    <Design/>
    <Image src='images/phone.png' avatar/>
      <span>Phone Verification    
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='active'><label>Active</label></p>   
    <Design/>
    <Image src='images/email.png' avatar/>
      <span>Recovery Email  
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='notC'><label>Not completed</label></p>               
  </div>
  </Grid.Column>
  
  <Grid.Column >
        <div className="box3">
       <h3 className='sign' id='sign1'>Withdraw USDT</h3>
       <Form>
    <Form.Field>
      <label>Enter Address</label>
      <input placeholder='n5gegvghavszdhcnxghdbncdshxbsdfvgbhkyhxcaszd...' />
    </Form.Field>
    <Form.Field>
      <label>Network</label>
      <input placeholder='TRC20' />
    </Form.Field>
       <Form.Field>
      <label>Amount</label>
      <input placeholder='150.543212890' />
    </Form.Field>
    <Form.Field>
      <label>Available: 250.35789000 USDT</label>
    <Divider/>    
    <label>You will get: <span id='trans'>Transaction Fee: 1.00 USDT</span></label>
    <label>150.543212890 USDT</label>
    </Form.Field>
          <Button type='submit'>Withdraw</Button>
          </Form>
  </div> 
  </Grid.Column>
  
    </Grid.Row>
    <Grid.Row columns={1} only='mobile only' >
             <Grid.Column>
               <div className="box">
            <h3 className="sign">Convert Coin</h3>
            <Form>
    <Form.Field>
      <label>Amount</label>
      <input placeholder='60.456000' />
    </Form.Field>
    <Form.Field>
      <label>From</label>
      <Dropdown
    placeholder='BTC - Bitcoin'
    fluid
    selection
    className="dropdown"
    />    
    </Form.Field>
    <Form.Field>
      <label>To</label>
      <Dropdown
    placeholder='USDT - USDT'
    fluid
    selection
    className="dropdown"
    />    
    </Form.Field>
    <Design/>
    <p className='coinConvert'>60.4560 BTC = 
   <br/>
    <span>345.7821645290 USDT </span></p>
    </Form>
   </div>
    </Grid.Column>
    
    <Grid.Column >
     <div className="box4">
     <h3 className="sign">Account Security</h3>
        <Image src='images/disabled.png' avatar/>
      <span>2FA Authentication
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='disabled'><label>Disabled</label></p>   
    <Design/>
    <Image src='images/phone.png' avatar/>
      <span>Phone Verification    
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='active'><label>Active</label></p>   
    <Design/>
    <Image src='images/email.png' avatar/>
      <span>Recovery Email  
       <div className="wrg-toggle">
            <div className="wrg-toggle-container">
                <div className="wrg-toggle-check"> </div>                   
                <div className="wrg-toggle-uncheck"></div>                  
                          </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
        </span>
     <p className='label' id='notC'><label>Not completed</label></p>               
  </div>
  </Grid.Column>
  
  <Grid.Column >
        <div className="box3">
       <h3 className='sign' id='sign1'>Withdraw USDT</h3>
       <Form>
    <Form.Field>
      <label>Enter Address</label>
      <input placeholder='n5gegvghavszdhcnxghdbncdshxbsdfvgbhkyhxcaszd...' />
    </Form.Field>
    <Form.Field>
      <label>Network</label>
      <input placeholder='TRC20' />
    </Form.Field>
       <Form.Field>
      <label>Amount</label>
      <input placeholder='150.543212890' />
    </Form.Field>
    <Form.Field>
      <label>Available: 250.35789000 USDT</label>
    <Divider/>    
    <label>You will get: <span id='trans'>Transaction Fee: 1.00 USDT</span></label>
    <label>150.543212890 USDT</label>
    </Form.Field>
          <Button type='submit'>Withdraw</Button>
          </Form>
  </div> 
  </Grid.Column>
  
    </Grid.Row>
    </Grid>   
    )

    
}

export default SectionOne
