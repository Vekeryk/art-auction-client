import { createTheme } from '@mui/material/styles';

import useAppSelector from './useAppSelector.ts';

export default function useTheme() {
  const mode = useAppSelector((state) => state.uiReducer.theme);
  return createTheme({
    palette: {
      mode,
    },
  });
}
