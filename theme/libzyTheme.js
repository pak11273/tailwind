import { createMuiTheme } from "@material-ui/core/styles"

export const LibzyTheme = (config) =>
  createMuiTheme({
    palette: {
      primary: config.theme.palette.primary,
      secondary: config.theme.palette.secondary,
    },
    props: {
      MuiAppBar: {
        elevation: 0,
      },
      MuiCard: {
        elevation: 0,
      },
      MuiPaper: {
        elevation: 0,
      },
      MuiTypography: {
        style: {
          color: "#65819D",
        },
      },
    },
    overrides: {
      MuiIcon: {
        root: {
          color: "#65819D",
        },
      },
      MuiTypography: {
        root: {
          color: "red",
        },
      },
    },
  })
