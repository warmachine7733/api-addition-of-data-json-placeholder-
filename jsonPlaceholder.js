import React from 'react';

class login extends React.Component{
    constructor(){
        super()
        this.state = {
            post:[{id:1},{id:2},{id:3}],
            fakeId:"",
        }
        this.addMe = this.addMe.bind(this);
        this.idChange = this.idChange.bind(this);
    }
    
    idChange(e){
        this.setState({
        fakeId:e.target.value       
        })
      
    }

    addMe(e){
         console.log("this will be added in 100th indexno",this.state.id)
         fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            var obj={}
            obj.id=this.state.fakeId
            // console.log("my precious obj",obj)
            json.push(obj);
            this.setState({
                post:json
            })
        })

    }
    render(){
        return(
            <div>
                {console.log("render is here")}
            <h5>i am going to add an object in 100th index no. in jsonplaceholder fakeApi..</h5>
            <label for="usr">id</label>  <input type="text" id="usr" onChange={this.idChange}/><br/>
            <input type="button" onClick={this.addMe} value="Add"/>
                 {this.state.post.map((elem)=>{
                return(<div>
                    <span>=>{elem.id}</span>
                    </div>)
                })}
              </div>
        )
    }
}
export default login;
