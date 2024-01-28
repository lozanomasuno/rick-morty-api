import { useEffect, useState } from "react";
import	'./App.css'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
  
 
  return <>
    <h1>Rick and Morty Characters</h1>
    <div className="container"> 
    {
      characters.map(character => {
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
                  <FavoriteIcon />
                </IconButton>
             </CardActions>
            </Card>
        )
      })
    }

    </div>    
  </>
}

export default App;