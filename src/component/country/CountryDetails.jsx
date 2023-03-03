import './country.css'
import {Container , Grid , Button } from '@mui/material';
import {useParams , useNavigate} from 'react-router-dom';
import { useState , useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';
import { useSelector } from "react-redux";
import Loader from '../loader/Loader';
function CountryDetails() {
    const {id} = useParams();
    const [countryDetails , setcountryDetails ] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosInstance.get(`name/${id}`)
        .then((res)=> setcountryDetails(res.data[0]))
        .catch((err)=> console.log(err))
    },[]);
    const handel = ()=>{
        navigate(-1)
    }
    console.log(countryDetails);
const loader = useSelector((state)=> state.load)
    return ( 
        <div className="country-details">
            <Container>
            {loader?
      <Loader /> :
      <>
      
      <button className='btns mb-3'  onClick={()=> handel() } >Back</button>
      <Grid container spacing={5}>
  <Grid item  md={5} spacing={2}>
    <img src={countryDetails.flag} alt="" className='w-100 img-fluid rounded mx-auto d-block' />
  </Grid>
  <Grid item  md={7} spacing={2}>
    <h3>{countryDetails.name}</h3>
<Grid container spacing={2}>
<Grid item  md= {6} spacing={2}>
<p> <span>Native Name : </span>{countryDetails.nativeName} </p>
    <p> <span>Population : </span>{countryDetails.population} </p>
    <p> <span>Region : </span>{countryDetails.region} </p>
    <p> <span>Sub Region : </span>{countryDetails.subregion} </p>
    <p> <span>Currency : </span>{countryDetails?.currencies?.[0]?.code} </p>
   
</Grid>
<Grid item  md= {6} spacing={2}>
<p> <span>Area : </span>{countryDetails.area} </p>
    <p> <span>Capital : </span>{countryDetails.capital} </p>
    <p> <span>Time Zone : </span>{countryDetails?.timezones?.[0]} </p>
    <p> <span>Numeric Code : </span>{countryDetails.numericCode} </p>
    <p> <span>Gini : </span>{countryDetails.gini} </p>

</Grid>
<Grid item md= {12} spacing={1}>
<div className='d-flex bord'> Border Country :
    <ul className='d-flex list-unstyled'>
       {countryDetails?.borders?.map((bor,id)=>(
            <li key={id}>{bor}</li>
        ))}
    </ul>
    </div>
</Grid>
<Grid item md= {12} spacing={1}>
<div className='d-flex bord'> Languages :
    <ul className='d-flex list-unstyled'>
       {countryDetails?.languages?.map(({nativeName},id)=>(
            <li key={id}>{nativeName} | </li>
        ))}
    </ul>
    </div>
</Grid>
</Grid>

  </Grid>
</Grid>
      </>
      }
            
            </Container>
        </div>

     );
}
export default CountryDetails;