import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Grid from '@mui/material/Grid';

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));


export default function YongSanSeatPage() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <item>
          <div>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              열 선택
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                A열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                B열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                C열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                D열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                E열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                F열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                G열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                H열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                I열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                J열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                K열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                L열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                M열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                N열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                O열
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                P열
              </MenuItem>
            </StyledMenu>
          </div>
        </item>
      </Grid>
      <Grid item xs={4}>
        <item>
          <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
          >
            좌석 번호 선택
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              A열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              B열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              C열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              D열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              E열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              F열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              G열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              H열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              I열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              J열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              K열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              L열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              M열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              N열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              O열
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              P열
            </MenuItem>
          </StyledMenu>
        </div>
      </item>
    </Grid>
  </Grid>


  );
}