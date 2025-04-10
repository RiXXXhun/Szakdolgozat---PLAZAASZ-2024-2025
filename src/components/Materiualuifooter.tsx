import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoaded(true);
    });

    return () => {
      window.removeEventListener('load', () => setIsLoaded(true));
    };
  }, []);

  return (
    <Box sx={{ backgroundColor: '#1c2331', color: 'white', paddingY: 5 }}>
      <Box sx={{ backgroundColor: '#161C27', padding: 2 }}>
        <Container>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="body1">Social média elérhetőségeink:</Typography>
            </Grid>
            <Grid item>
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  '& .MuiIconButton-root': {
                    transition: 'box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: '0 0 8px 2px rgba(30, 144, 255, 0.8)', 
                    },
                  },
                }}
              >
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <Facebook />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <Twitter />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <Google />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <Instagram />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <LinkedIn />
                </IconButton>
                <IconButton color="inherit" onClick={() => window.location.href = '/not-found'}>
                  <GitHub />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ marginTop: 10 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>PlázaÁsz</Typography>
            <Box sx={{ width: 60, height: 2, backgroundColor: '#1E90FF', marginY: 1, position: 'relative' }}>
              
            </Box>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
            „Plázák és boltok egy kattintásra – gyors keresés, könnyű felfedezés!”
            </Typography>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Fontos Részek</Typography>
            <Box sx={{ width: 60, height: 2, backgroundColor: '#1E90FF', marginY: 1, position: 'relative' }}>
              
            </Box>
            <Link href="http://localhost:3000/homepage#informSection" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Tudnivalók
            </Link>
            <Link href="http://localhost:3000/homepage#quick-search" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Gyorskeresés
            </Link>
            <Link href="http://localhost:3000/homepage#map" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Térkép
            </Link>
            <Link href="http://localhost:3000/homepage#faq" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              GYIK
            </Link>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Hasznos Linkek</Typography>
            <Box sx={{ width: 60, height: 2, backgroundColor: '#1E90FF', marginY: 1, position: 'relative' }}>
              
            </Box>
            <Link href="http://localhost:3000/homepage" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Főoldal
            </Link>
            <Link href="http://localhost:3000/coupons" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Kuponok
            </Link>
            <Link href="http://localhost:3000/support" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Ügyfélszolgálat
            </Link>
            <Link href="http://localhost:3000/adminPage" color="inherit" sx={{ display: 'block', textDecoration: 'none', fontSize: '1rem', marginBottom: 0.5 }}>
              Admin oldal
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Elérhetőségek</Typography>
            <Box sx={{ width: 60, height: 2, backgroundColor: '#1E90FF', marginY: 1, position: 'relative' }}>
              
            </Box>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <i className="fas fa-home mr-3"></i> Csepreg, Rákóczi Ferenc utca 13, 9735
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <i className="fas fa-envelope mr-3"></i> plazaasz@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <i className="fas fa-phone mr-3"></i> 06 30 782 8553
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: '#161C27', textAlign: 'center', paddingY: 3, marginTop: '40px' }}>
        <Typography variant="body2">
          © 2025 Copyright: <Link href="" color="inherit">PlazaAsz.hu</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
