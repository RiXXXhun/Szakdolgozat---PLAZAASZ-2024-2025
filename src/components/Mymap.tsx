"use client"
import React from 'react';
import { Container, Box, TextField, IconButton, InputAdornment, Typography } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import SearchIcon from '@mui/icons-material/Search';

const MyMap: React.FC = () => {
  const position: [number, number] = [51.505, -0.09];

  return (
    <Container sx={{ backgroundColor: '#1c2331', py: 5, minHeight: '24vh', maxWidth: 'lg', mx: 'auto'  }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Typography variant="h5" sx={{ color: 'white', mb: 5 }}>
          Térkép és Keresés
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Keresés..."
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: 'white' }} onClick={() => { /* keresési logika ide kerülhet */ }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
            style: {
              borderRadius: '25px',
              border: '2px solid white',
              color: 'white',
              backgroundColor: '#1c2331',
            },
          }}
          sx={{
            width: { xs: '80%', sm: '60%', md: '50%' },  // Reszponzív szélesség
            mb: 3,
            maxWidth: '600px',  // Maximális szélesség beállítása
          }}
        />
      </Box>

      {/* Leaflet térkép */}
      <MapContainer 
        center={position} 
        zoom={13} 
        style={{ height: '400px', width: '100%', backgroundColor: '#1c2331' }} // Háttérszín beállítása
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};

export default MyMap;
