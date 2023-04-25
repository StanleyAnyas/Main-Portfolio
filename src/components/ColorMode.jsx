import Brightness4Icon from '@mui/icons-material/Brightness4';
import React from 'react';
  import Brightness7Icon from '@mui/icons-material/Brightness7';
  import IconButton from '@mui/material/IconButton';
  import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
  import { useState } from 'react';

  const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

  const ColorMode = () => {
    const [mode, setMode] = useState('light');
    const toggleColorMode = () => {
      const nextMode = mode === 'light' ? 'dark' : 'light';
      setMode(nextMode);
    };

    const theme = createTheme({
      palette: {
        mode,
      },
    });

    return (
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ColorModeContext.Provider>
    );
  }

    const useColorMode = () => {
        const { toggleColorMode } = React.useContext(ColorModeContext);
        const theme = useTheme();
        const colorMode = theme.palette.mode;
        const isDark = colorMode === 'dark';
        const Icon = isDark ? Brightness7Icon : Brightness4Icon;
        const toggle = () => toggleColorMode();
        return { colorMode, Icon, toggle };
    };

    export default ColorMode