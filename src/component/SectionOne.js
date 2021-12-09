import React from 'react'
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'
import Linechart from './Linechart';
import { Image, Icon } from 'semantic-ui-react'



function SectionOne() {
    return (
        /* Signup container */
        <Grid>
             <Grid.Row columns={4} only='computer only'>           
             <Grid.Column>
               <div className="box">
            <h3 className="sign">Sign In</h3>
            <Form>
    <Form.Field>
      <label>Email address</label>
      <input placeholder='olami@gmail.com' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Enter password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Remind me' />
       </Form.Field>
     <Button type='submit'>Sign In</Button>
     <h4>Don't have an account? 
         <a href="click">&nbsp; &nbsp;Click here to Sign Up</a></h4>
  </Form>
   </div>
    </Grid.Column>
    <Grid.Column >
     <div className="box">
        <Image src='images/bitcoin.png' avatar  />
      <span>Bitcoin</span>
     <p className='label'><label>BTC</label></p>
     <h2>$56,475.00 <span className='ratio'>+ 12.5%</span></h2>
     <Button className='ratioButton'>+$500 </Button><span className='ratiolast'>&nbsp; last 24h</span>             
                       <Linechart/>           
  </div>
  </Grid.Column>
  <Grid.Column>
        <div className="box1">
            <h3 className="forgot">Forgot Password</h3>
            <Form>
    <Form.Field>
      <label>Email address</label>
      <input placeholder='olami@gmail.com' />
    </Form.Field>   
     <Button type='submit'>Sign In</Button>

         </Form>
  </div>
  </Grid.Column>
  <Grid.Column >
        <div className="box2">
        <Icon enabled name='check circle centered' className='icon' />
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
            <h3 className="sign">Sign In</h3>
            <Form>
    <Form.Field>
      <label>Email address</label>
      <input placeholder='olami@gmail.com' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Enter password' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='Remind me' />
       </Form.Field>
     <Button type='submit'>Sign In</Button>
     <h4>Don't have an account? 
         <a href="click">&nbsp; &nbsp;Click here to Sign Up</a></h4>
  </Form>
   </div>
    </Grid.Column>
    <Grid.Column >
     <div className="box">
        <Image src='images/bitcoin.png' avatar  />
      <span>Bitcoin</span>
     <p className='label'><label>BTC</label></p>
     <h2>$56,475.00 <span className='ratio'>+ 12.5%</span></h2>
     <Button className='ratioButton'>+$500 </Button><span className='ratiolast'>&nbsp; last 24h</span>             
                       <Linechart/>           
  </div>
  </Grid.Column>
  <Grid.Column>
        <div className="box1">
            <h3 className="forgot">Forgot Password</h3>
            <Form>
    <Form.Field>
      <label>Email address</label>
      <input placeholder='olami@gmail.com' />
    </Form.Field>   
     <Button type='submit'>Sign In</Button>

         </Form>
  </div>
  </Grid.Column>
  <Grid.Column >
        <div className="box2">
        <Icon enabled name='check circle centered' className='icon' />
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
