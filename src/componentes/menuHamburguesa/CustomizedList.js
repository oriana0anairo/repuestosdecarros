import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useLittera } from "@assembless/react-littera"
import { Translation } from "../../utils/traduccion";
import { Link } from 'react-router-dom';




const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const trans = useLittera(Translation.cabecera)
  const data = [
    {
      label: trans.inicio,
      to: "/"
    },
    {
      label: trans.tienda,
      to: "/"
    },
    {
      label: trans.servicios,
      to: "/servicios"
    },
    {
      label: trans.empresa,
      to: "/"
    },
    {
      label: 'Blog',
      to: "/"
    },
    {
      label: trans.contacto,
      to: "/contacto"
    },
    {
      label: 'FAQ',
      to: "/"
    },
  ];
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {

            primary: { main: '#00000000' },
            background: { paper: '#00000000' },
          },
        })}
      >
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>

            <Box>
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
              >
                <IconButton>
                  <DehazeIcon sx={{ color: "white" }} />
                </IconButton>
                <KeyboardArrowDown
                  sx={{
                    mr: -1,
                    opacity: 0,
                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                    transition: '0.2s',
                  }}
                />
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                    component={Link}
                    to={item.to}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}

                      sx={{ marginLeft: "15%" }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
      </ThemeProvider>
    </Box>
  );
}
