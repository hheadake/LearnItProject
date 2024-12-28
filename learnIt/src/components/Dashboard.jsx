import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar, Badge, styled } from '@mui/material';
import { FlutterDashRounded, LogoutRounded, Mail, Notifications, SettingsRounded } from '@mui/icons-material';




const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  background: "#662249"
})
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: 'none',
  display: 'flex',
  gap: "20px",
  alignItems: "center",
}))

const NAVIGATION = [
  {
    segment: 'test',
    title: 'Тестове',
    icon: <DashboardIcon />,
  },
  {
    segment: 'catalog',
    title: 'Ученици',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'createTest',
    title: 'Създай тест',
    icon: <ShoppingCartIcon />,
  }
];

function DemoPageContent({ page }) {



  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        textAlign: 'center',
        flex: 1,
        bgcolor: '#f4f4f4',
      }}
    >
      <Typography variant="h4">Page: {page}</Typography>
    </Box>
  );
}

DemoPageContent.propTypes = {
  page: PropTypes.string.isRequired,
};

function SimpleDashboard() {
  const [selectedPage, setSelectedPage] = useState('dashboard');

  const handleNavigation = (segment) => {
    setSelectedPage(segment);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <List>
          {NAVIGATION.map((item) => (
            <ListItem
              button
              key={item.segment}
              onClick={() => handleNavigation(item.segment)}
              selected={selectedPage === item.segment}
              component={Link}
              to={`/${item.segment}`}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>

          <StyledToolBar>
            <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>LearnIt</Typography>
            <FlutterDashRounded variant="h6" sx={{ display: { xs: "block", sm: "none" } }}></FlutterDashRounded>
            <Icons>
              <Avatar sx={{ width: 30, height: 30 }}></Avatar>
              <Badge badgeContent={4} color="eror">
                <Mail />
              </Badge>
              <Badge badgeContent={4} color="eror">
                <Notifications />
              </Badge>
              <Badge>
                <SettingsRounded />
              </Badge>

              <Link to="/logout">
                <Badge>
                  <LogoutRounded />
                </Badge>
              </Link>

            </Icons>
          </StyledToolBar>

        </AppBar>
        <DemoPageContent page={selectedPage} />
      </Box>
    </Box>
  );
}

export default SimpleDashboard;
