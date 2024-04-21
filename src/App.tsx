import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

import useTheme from './hooks/useTheme';
import { Routes } from './pages/Routes.tsx';

const App = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <Routes />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
