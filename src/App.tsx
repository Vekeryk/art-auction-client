import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Routes } from './pages/Routes.tsx';
import useTheme from './hooks/useTheme';
import useAuth from './hooks/useAuth.ts';
import useAppSelector from './hooks/useAppSelector.ts';

const queryClient = new QueryClient();

const App = () => {
  const loading = useAppSelector((state) => state.userReducer.loading);
  const theme = useTheme();
  useAuth();

  if (loading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          <Routes />
        </LocalizationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
