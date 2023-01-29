import { Component } from "react";
import BasicMenu from "./util/BasicMenu";
import MiniDrawer from "./util/MiniDrawer";
import PrimarySearchAppBar from "./util/PrimarySearchAppBar";
import SideBar from "./util/SideBar";

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            age:0 
        }
    }
    render(){
        return (
        // <div> Hellow {this.props.name} </div>) 
        // <div>
        //     <h1>Hello {this.props.name} and age is {this.state.age} </h1>
        //     <button onClick={()=>{
        //         this.setState({age:7})
        //     }}>Click</button>
        // </div>
        // this.props.clinic.map((val,index)=>{
        //     return(
        //         <h1>count {val} and index is {index}</h1>
        //     )
        // })
        <div>
            <PrimarySearchAppBar />
            <MiniDrawer />
            <BasicMenu />
            <SideBar name={'mwinyi'}  age={2} />
        </div>
        )
    }
}