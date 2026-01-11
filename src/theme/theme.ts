import { createTheme } from '@mui/material/styles';

// Bigeen Solutions Design System
const PRIMARY_NAVY = '#1a237e';
const SECONDARY_BLUE = '#3B82F6';
const ACCENT_PURPLE = '#7C3AED';
const SUCCESS_GREEN = '#10B981';
const WARNING_AMBER = '#F59E0B';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PRIMARY_NAVY,
      light: '#534bae',
      dark: '#000051',
      contrastText: '#ffffff',
    },
    secondary: {
      main: SECONDARY_BLUE,
      light: '#6CB4FF',
      dark: '#0053BF',
      contrastText: '#ffffff',
    },
    success: {
      main: SUCCESS_GREEN,
    },
    warning: {
      main: WARNING_AMBER,
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: 'system-ui, Avenir, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 800,
      lineHeight: 1.1,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.95rem',
        },
        contained: {
          boxShadow: '0 4px 14px rgba(26, 35, 126, 0.25)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(26, 35, 126, 0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
        },
      },
    },
  },
});

// Gradient utilities for sx prop usage
export const gradients = {
  primary: 'linear-gradient(135deg, #1a237e 0%, #3B82F6 100%)',
  accent: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
  dark: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
};