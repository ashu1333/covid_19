import React from 'react';
import Cards from './components/Card/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import style from './App.module.css';
import {fetchData} from './api';
import logo from './img/covid1.jpg';




class App extends React.Component{
  state={
    data:{},
    country:'',
  }
  

async componentDidMount(){
  const data = await fetchData();
  this.setState({data});
}


handleCountryChange = async(country) =>{
 const data = await fetchData(country);
  this.setState({data,country:country});


}
  render(){
    return(
      <div className ={style.container}>
      <img src={"https://i.ibb.co/7QpKsCX/image.png"} width="200" height="70" />
  

     <Cards data={this.state.data}/>
     <CountryPicker handleCountryChange={this.handleCountryChange}/>
     <Chart data={this.state.data} country={this.state.country}/>
     
      </div>


    );
  }

}

export default App;