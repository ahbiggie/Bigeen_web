import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import { useState } from "react"
import { Link as RouterLink, useLocation } from "react-router-dom"

interface NavItem {
  label: string
  path: string
}

export const Navbar: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Roadmap", path: "/roadmap" },
    { label: "Contact", path: "/contact" },
  ]

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
            {/* Logo */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
              }}
            >
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: 1,
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  B
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                Bigeen
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                {navItems.map((item) => (
                  <Typography
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      color:
                        location.pathname === item.path
                          ? "primary.main"
                          : "text.secondary",
                      fontSize: "0.95rem",
                      fontWeight: location.pathname === item.path ? 600 : 500,
                      cursor: "pointer",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    {item.label}
                  </Typography>
                ))}
              </Box>
            )}

            {/* CTA Buttons */}
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {!isMobile && (
                <Button
                  variant="text"
                  sx={{
                    color: "text.primary",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  Log In
                </Button>
              )}
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: 600,
                  px: { xs: 2, md: 3 },
                  borderRadius: 2,
                  textTransform: "none",
                  boxShadow: "0 4px 14px rgba(102, 126, 234, 0.4)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)",
                    boxShadow: "0 6px 20px rgba(102, 126, 234, 0.5)",
                  },
                }}
              >
                Get Started
              </Button>
              {isMobile && (
                <IconButton
                  onClick={handleDrawerToggle}
                  sx={{ color: "text.primary" }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 280,
            pt: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2 }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={handleDrawerToggle}
                selected={location.pathname === item.path}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.path ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}
