import React from 'react';

const Header = props =>{
    return(
      <div className="jumbotron"> 
       
      <h1 className="display-1">  
      <span className="material-icons  brand-icon">fastfood</span>   
      Food Recipe </h1>
      
      <div className="input-group w-50 mx-auto">
      <input type="text" className="form-control" placeholder="Search Recipe..." 
      value={props.value} 
      onChange={props.onInputChange}
      />
      <div className="input-group-append">
      <button className="btn btn-dark" onClick={props.onClickSearch}>Search</button>
      </div>
      </div>

  

  
  
      </div>
 
     
    )
}

export default Header;