import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsTwoTone';
import ContactEmergencyTwoToneIcon from '@mui/icons-material/ContactEmergencyTwoTone';
import _ from 'underscore';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TempleHinduTwoToneIcon from '@mui/icons-material/TempleHinduTwoTone';
import CelebrationTwoToneIcon from '@mui/icons-material/CelebrationTwoTone';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MovieCreationTwoToneIcon from '@mui/icons-material/MovieCreationTwoTone';

const pages = [];
const settings = [{key:'Ambulance', value: '112', valueTel: 'tel:112'},{key:'Police', value: '101',valueTel:'tel:101'},{key:'Medical Service', value: '100',valueTel:'tel:100'},{key:'Fire', value: '100',valueTel:'tel:100'},{key:'Pharmacy', value: 'Website',valueTel:'https://www.pharmacie.be/'},{key:'Region', value: 'Belgium',valueTel:''}];

function ResponsiveAppBar({length,events}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

const dataFormat = (dat) => {
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d= new Date(dat);
return d.getDate()+'-'+months[d.getMonth()] +'-'+d.getFullYear();
}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon size="large" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/freshmind2"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Fresh Mind 1.0
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/freshmind2"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Fresh Mind
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Notifications">
                        <IconButton onClick={handleClick} sx={{ p: 1 }}>
                        <Badge badgeContent={events?.length} color="secondary">
                        <NotificationsTwoToneIcon  sx={{ fontSize: 40,color: "#Yellow" }}/>
                        </Badge>
                        </IconButton>
                      </Tooltip>
                      <Menu
                              id="basic-menu"
                              anchorEl={anchorEl}
                              open={open}
                              onClose={handleClose}
                              MenuListProps={{
                                'aria-labelledby': 'basic-button',
                              }}
                            >
                               {events?.map((even) => (
                                              <MenuItem style={{whiteSpace: 'normal'}} autoFocus={true} divider={true} onClick={handleClose}><Stack direction="row" spacing={1}>{even.type === 'food' ? <FastfoodIcon />: even.type === 'devotional'? <TempleHinduTwoToneIcon />:even.type === 'movie'? <MovieCreationTwoToneIcon />:<CelebrationTwoToneIcon />}
                                                                                                                                                      <Typography align="justify">{even.name +" on "+dataFormat(even.startDate)}</Typography></Stack></MenuItem>
                                            ))}
                            </Menu>

                    </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Emergencies">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 1 }}>
              <ContactEmergencyTwoToneIcon size="large" sx={{ fontSize: 40,color: "#F012CB" }}/>
              </IconButton>
            </Tooltip>
            <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {_.sortBy(settings, 'key').map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.key}{" : "}</Typography>
                  {setting.valueTel ? <a href={setting.valueTel}>{setting.value}</a> : setting.value}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;