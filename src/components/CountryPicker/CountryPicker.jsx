import React ,{useState,useEffect}from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountry} from '../../api';



const CountryPicker = ({handleCountryChange}) =>{
   const[countries,setcountries] = useState([]);   
  
   useEffect(()=>{
       const fetchAPI = async () =>{
         const aa = await fetchcountry();
         
           setcountries(aa);
       }  
       fetchAPI();  
},[]);

//console.log(countries);

    return(
       
       <FormControl className={styles.FormController}>
       <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
       <option value=""> Select Country</option>
       {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
     
       
       </NativeSelect>
       </FormControl>
        
      
    );
};

export default CountryPicker;