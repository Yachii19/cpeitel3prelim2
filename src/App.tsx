import { useState } from 'react';
import { skillList } from './data';
import './App.css';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < skillList.length - 1;

  function handleprevClick() {
    if (index === 0) {
      setIndex(skillList.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let sculpture = skillList[index];
  return (
    <>
      <Container maxWidth="sm">
        <div><h1>10 Things that Require Zero Talent</h1></div>
        <p> by John Rein Vinuya</p>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            height="350"
            image={sculpture.url}
            alt={sculpture.alt}
          />
          <CardMedia>
          <h1>{sculpture.thing}</h1>
          </CardMedia>
          {sculpture.detail}
          <CardMedia className='buttons'>
          <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleprevClick} className='button2'>Back</Button>
          <Button variant="contained" onClick={handleNextClick} className='button3'>Next</Button>
          </Stack>
          </CardMedia>
        </Card>
      </Container>
    </>
  );
}