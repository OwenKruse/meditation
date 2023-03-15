import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeOptions } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import {ThemeProvider} from "@mui/system";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#764BD1',
    },
    secondary: {
      main: '#339989',
    },
    text: {
      primary: '#EFF2FC',
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {

const theme = createTheme(themeOptions);

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}