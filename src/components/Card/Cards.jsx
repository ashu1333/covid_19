import React from 'react';
import {Card,Typography,Grid,CardContent} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';



const Cards = ({data:{ confirmed,recovered,deaths,lastUpdate }}) =>{
    if(!confirmed)
    return 'loading....'
    
    
    return(
    
        <div className={styles.container}>
       <Grid container spacing={3} justify="center">
       <Grid item component={Card} className={cx(styles.card,styles.Infected)}>
       <CardContent>
       <Typography color="textSecondary" gutterBottom >Infected</Typography>
       <Typography variant="h5">
       <CountUp 
       start={0}
       end=  {confirmed.value}
       duration={2}
       separator=",">
       </CountUp>
       </Typography>
        <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2"  >Active case</Typography>
       </CardContent>
      </Grid>

       
       
        <Grid item component={Card} className={cx(styles.card,styles.Deaths)}>
       <CardContent>
       <Typography color="textSecondary" gutterBottom >Deaths</Typography>
       <Typography variant="h5" >
       <CountUp 
       start={0}
       end=  {deaths.value}
       duration={2}
       separator=",">
       </CountUp>
       </Typography>
        <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2"  >Total Death case </Typography>
       </CardContent>
      </Grid>



       
        <Grid item component={Card} className={cx(styles.card,styles.Recovered)}>
       <CardContent>
       <Typography color="textSecondary" gutterBottom >Recovered</Typography>
       <Typography variant="h5" >
        <CountUp 
       start={0}
       end=  {recovered.value}
       duration={2}
       separator=",">
       </CountUp>
        </Typography>
        <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant="body2"  >Total Recovered</Typography>
       </CardContent>
      </Grid>


</Grid>

       
        </div>
    )
}

export default Cards;