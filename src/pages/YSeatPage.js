import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import "../css/seatreview.css";



export default function YSeatPage() {
  const [alphabet, setalphabet] = React.useState('');
  const [seatNum, setNum] = React.useState('');

  const handleChange = (event) => {
    setalphabet(event.target.value);
  };
  const handleChange2 = (event) => {
    setNum(event.target.value);
  };


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
                  <MenuItem value={1}>A</MenuItem>
                  <MenuItem value={2}>B</MenuItem>
                  <MenuItem value={3}>C</MenuItem>
                  <MenuItem value={4}>D</MenuItem>
                  <MenuItem value={5}>E</MenuItem>
                  <MenuItem value={6}>F</MenuItem>
                  <MenuItem value={7}>G</MenuItem>
                  <MenuItem value={8}>H</MenuItem>
                  <MenuItem value={9}>I</MenuItem>
                  <MenuItem value={10}>J</MenuItem>
                  <MenuItem value={11}>K</MenuItem>
                  <MenuItem value={12}>L</MenuItem>
                  <MenuItem value={13}>M</MenuItem>
                  <MenuItem value={14}>N</MenuItem>
                  <MenuItem value={15}>O</MenuItem>
                  <MenuItem value={16}>P</MenuItem>
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
                  id="demo-simple-select"
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
            <Button variant="contained" href="#outlined-buttons">후기 쓰기</Button>
          </div>
        </item>
      </Grid>
    </Grid>
    </>
  );
}