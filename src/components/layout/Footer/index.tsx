import React from 'react';

import { Box, Container, Link, Grid, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            sm={4}
            sx={{ display: { xs: 'none', md: 'grid' } }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Навігація
            </Typography>
            <Link href="/" color="text.secondary" display="block" gutterBottom>
              Головна
            </Link>
            <Link
              href="/lots"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Лоти
            </Link>
            <Link
              href="/about"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Про нас
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="h6" color="text.primary" gutterBottom>
              Контакти
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Email: support@artauction.com
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Телефон: +38 (050) 123-45-67
            </Typography>
            <Link
              href="/contact"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Контактна форма
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={4}
            textAlign="right"
            sx={{ display: { xs: 'none', md: 'grid' } }}
          >
            <Typography variant="h6" color="text.primary" gutterBottom>
              Соціальні мережі
            </Typography>
            <Link
              href="https://www.facebook.com"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Facebook
            </Link>
            <Link
              href="https://www.twitter.com"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com"
              color="text.secondary"
              display="block"
              gutterBottom
            >
              Instagram
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary" align="center">
              <Link
                href="/privacy"
                color="text.secondary"
                display="block"
                gutterBottom
              >
                Політика конфіденційності
              </Link>
              <Link
                href="/terms"
                color="text.secondary"
                display="block"
                gutterBottom
              >
                Умови використання
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          marginTop={1}
        >
          © {new Date().getFullYear()} Арт Аукціон
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
