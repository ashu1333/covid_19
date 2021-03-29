import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
    let ChangableUrl  = url;
    if(country){
        ChangableUrl = `${url}/countries/${country}`;
    }
    try{
        const{data : { confirmed,recovered,deaths,lastUpdate } } = await axios.get(ChangableUrl);
        return { confirmed, recovered, deaths, lastUpdate};
     
          }
    catch(error){
        return error;
    }
} 


export const fetchdailyData = async () =>{ 
    try{
        
const {data} = await axios.get(`${url}/daily`);
console.log(data);
console.log(typeof(data));


const modifydata = data.map((dailyData)=>({
    confirmed:dailyData.confirmed.total,
    deaths:dailyData.deaths.total,
    date:dailyData.reportDate,

}));

return modifydata;
    }
    catch(error){
 return error;
    }
}


export const fetchcountry = async () =>{
    try{
       const {data:{countries}} = await axios.get(`${url}/countries`);
     
       const countrydata = countries.map((country)=>country.name);
       return countrydata;
    }
    catch(error){
        return error;

    }
}