import { useEffect, useState } from "react";
import	'./App.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

function App(){
  
  const [characters, setCharacters] = useState([])
  
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();  
      setCharacters(data.results);
    } 

    fetchData();
  }, []);
  
  const namesAscending = [...characters].sort((a, b) =>
   a.name > b.name ? 1 : -1,
  );
  console.log(namesAscending);
 
  return <>
    <div className="pic-banner">
      <img src="https://i.pinimg.com/564x/43/91/5f/43915f55bc12c4890361fb5f3cecf93c.jpg" alt="main-banner" />
    </div>

    <div className="container"> 
    {
      namesAscending.map(character => {
        return(
          <Card sx={{ maxWidth: 250 }} key={character.id} className="card">
            <CardHeader className="cut-text"          
              title={character.name}
              subheader={character.species}
            />
           
            <CardMedia
              component="img"
              height="250"
              image={character.image}
              alt={character.name}
            />
          
             <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <Button size="small">Learn More</Button>
             </CardActions>
            </Card>
        )
      })
    }

    </div>    
  </>
}

export default App;