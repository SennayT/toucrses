"use client";

import { ThemeProvider } from "@mui/material/styles";
import { baselightTheme } from "./_utils/theme/DefaultColors";
import CssBaseline from "@mui/material/CssBaseline";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={baselightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
