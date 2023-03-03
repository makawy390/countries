import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";
import {  Card , Typography  , CardMedia , CardContent , Container, Grid} from "@mui/material";
import './country.css';
import {useNavigate} from 'react-router-dom'
// import SearchCountry from "./SearchCountry";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
const Countries = () => {
    const navigate = useNavigate()
  const [country, setCoutry] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("all")
      .then((res) => setCoutry(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(country);
const filterCountry = country.map(({area, flag , capital , name ,population , region})=>(
<Grid item md={3} xs={12} key={name}>
<Card sx={{ maxWidth: 345 }} onClick={()=> navigate(`country/${name}`)}>
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
const loader = useSelector((state)=> state.load)
  return (
    <div className="countries" >
    <Container>
      {loader&&
      <Loader />
      }
    <Grid container spacing={2.5}>
    {filterCountry}
</Grid>
        </Container>

    </div>
  )
};
export default Countries;
