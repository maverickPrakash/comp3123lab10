import React, { Component } from 'react'


export default class Dataframe extends Component {
    constructor(props){
        super(props)
        this.province = ['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland and Labrador','Nova Scotia','Ontario','Quebec','Saskatchewan'];
        
        this.state={
            email:'',
            name:'',
            add1:'',
            add2:'',
            city:'',
            province:'',
            postal:''


        }

       
    }
    onChangeValue = (event)=>{
       
        event.preventDefault()
        
        this.setState(
            {
                [event.target.id]: event.target.value
                
            }
        )
        console.log(this.dataValue)
        
    }
    onSubmitForm = (event)=>{
        event.preventDefault()
       
       document.write(JSON.stringify(this.state))
       
    }
  render() {
   
    return (
      <div>
        
   
        <h1>Date Entry Form</h1>
        <form onSubmit={event => this.onSubmitForm(event)}>
        <label htmlFor='email'>Email:
        </label><br />  
        <input htmlType="email" onChange={(e)=>this.onChangeValue(e)} name="email" id='email' placeholder="Email" />
        <br />
        <br />

        <label htmlFor='name'>Name:
        </label><br />
        <input htmlType="text" onChange={(e)=>this.onChangeValue(e)} id='name' placeholder="Fullname" />
        <br />
        <br />
        <label htmlFor='add1'>Address 1 :
        </label><br />
        <input htmlType="text" onChange={(e)=>this.onChangeValue(e)}  id='add1' placeholder="123 Main St" />

        <br />
        <br />
        <label htmlFor='add2'>Address 2 :
        </label><br />
        <input htmlType="text" onChange={(e)=>this.onChangeValue(e)}  id='add2' placeholder="Apt number/ suite" />

        <br />
        <br />
        <label htmlFor='city'>City :
        </label><br />
        <input htmlType="text" onChange={(e)=>this.onChangeValue(e)}  id='city' placeholder="city" />

        <br />
        <br />
        <label htmlFor='province'  >Province :
        </label><br />
        <select id='province' onChange={(e)=>this.onChangeValue(e)}>
            <option disabled selected>Choose</option>
            {
                this.province.map(province =>(
                    <option value={province}>{province}</option>
                ))
            }
        </select>

        <br />
        <br />
        <label htmlFor='postal'  >Postal Code :
        </label><br />
        <input htmlType="text" onChange={(e)=>this.onChangeValue(e)} id='postal' placeholder="Postal Code" />
        <br/>
        <br/>
<button type='submit'>Submit</button>
</form>

<div>
          <h2>Submitted Data:</h2>
          <p>Email: {this.state.email}</p>
          <p>Name: {this.state.name}</p>
          <p>Address 1: {this.state.add1}</p>
          <p>Address 2: {this.state.add2}</p>
          <p>City: {this.state.city}</p>
          <p>Province: {this.state.province}</p>
          <p>Postal Code: {this.state.postal}</p>
        </div>
      </div>
    )
  }
}
