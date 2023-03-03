import React, { useState , useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import {  Card , Typography  , CardMedia , CardContent , Container, Grid } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import img from '../assets/loupe.png';
import './country.css';
function SearchCountry() {
    const [value ,setvalue]= useState();
    const [country , setCountry] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.get(`name/${value}`)
        .then((res)=>{
            if (res.data) {
            setCountry(res.data)
            }
        })
        .catch((err)=> console.log(err))
    },[value])
    const filterCountry = country.map(({area, flag , capital , name ,population , region})=>(
        <Grid item md={3} xs ={12} key={name}>
        <Card sx={{ maxWidth: 345 }} onClick={()=> navigate(`/country/${name}`)}>
          <CardMedia sx={{ minHeight: 180 }} image={flag} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">{name}</Typography>
            <Typography variant="body2" color="text.secondary">Region :  {region} </Typography>
            <Typography variant="body2" color="text.secondary">Area :  {area} </Typography>
            <Typography variant="body2" color="text.secondary">Population :   {population} </Typography>
            <Typography variant="body2" color="text.secondary">Captial :   {capital} </Typography>
          </CardContent>
        </Card>
        </Grid>
        ))

    console.log(value);
    console.log(country);
    return ( 
        <div className='search'>
        <Container>
       
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
            <div className="field">
            <img src={img} className='icon' />
            <input type="search"  className='text-feild'
             value={value} onChange={(e) => setvalue(e.target.value)}/>
            </div>
            </Grid>
    {filterCountry}
</Grid>
        </Container>
        </div>
     );
}

export default SearchCountry;