import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../css/seatreview.css";
import NativeSelect from '@mui/material/NativeSelect';



export default function YSeatPage() {
  const [alphabet, setalphabet] = React.useState('');
  const [seatNum, setSeatNum] = React.useState('');

  const handleChange = (event) => {
    setalphabet(event.target.value);
  };
  const handleChange2 = (event) => {
    setSeatNum(event.target.value);
  };

  const theaterId = 1;
  console.log(alphabet);
  console.log(seatNum);

  return (
<>
  <div className='imgBack'>
    <img src={'img/YongSanSeat.png'} alt="용산역 좌석" width={1200}/>
  </div>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <item>
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">좌석 알파벳</InputLabel>
                <Select
                  labelId="SeatAlphabet-label"
                  id="SeatAlphabet-select"
                  value={alphabet}
                  label="SeatAlphabet"
                  onChange={handleChange}
                >
                  <MenuItem value={'A'}>A</MenuItem>
                  <MenuItem value={'B'}>B</MenuItem>
                  <MenuItem value={'C'}>C</MenuItem>
                  <MenuItem value={'D'}>D</MenuItem>
                  <MenuItem value={'E'}>E</MenuItem>
                  <MenuItem value={'F'}>F</MenuItem>
                  <MenuItem value={'G'}>G</MenuItem>
                  <MenuItem value={'H'}>H</MenuItem>
                  <MenuItem value={'I'}>I</MenuItem>
                  <MenuItem value={'J'}>J</MenuItem>
                  <MenuItem value={'K'}>K</MenuItem>
                  <MenuItem value={'L'}>L</MenuItem>
                  <MenuItem value={'M'}>M</MenuItem>
                  <MenuItem value={'N'}>N</MenuItem>
                  <MenuItem value={'O'}>O</MenuItem>
                  <MenuItem value={'P'}>P</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </item>
      </Grid>
      <Grid item xs={4}>
        <item>
          <div>
          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">좌석 번호</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="SeatNum-select"
                  value={seatNum}
                  label="SeatNum"
                  onChange={handleChange2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={7}>7</MenuItem>
                  <MenuItem value={8}>8</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                  <MenuItem value={24}>24</MenuItem>
                  <MenuItem value={25}>25</MenuItem>
                  <MenuItem value={26}>26</MenuItem>
                  <MenuItem value={27}>27</MenuItem>
                  <MenuItem value={28}>28</MenuItem>
                  <MenuItem value={29}>29</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                  <MenuItem value={31}>31</MenuItem>
                  <MenuItem value={32}>32</MenuItem>
                  <MenuItem value={33}>33</MenuItem>
                  <MenuItem value={34}>34</MenuItem>
                  <MenuItem value={35}>35</MenuItem>
                  <MenuItem value={36}>36</MenuItem>
                  <MenuItem value={37}>37</MenuItem>
                  <MenuItem value={38}>38</MenuItem>
                  <MenuItem value={39}>39</MenuItem>
                  <MenuItem value={40}>40</MenuItem>
                  <MenuItem value={41}>41</MenuItem>
                  <MenuItem value={42}>42</MenuItem>
                  <MenuItem value={43}>43</MenuItem>
                  <MenuItem value={44}>44</MenuItem>
                  <MenuItem value={45}>45</MenuItem>
                </Select>
              </FormControl>
            </Box>    
          </div>
        </item>
      </Grid>
      <Grid item xs={4}>
        <item>
          <div>
            <Link to={`/WriteReview/${theaterId}/${alphabet}/${seatNum}`}>
              <Button variant="contained">후기 쓰기</Button>
            </Link>
          </div>
        </item>
      </Grid>
    </Grid>
    </>
  );
}