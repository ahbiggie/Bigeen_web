import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material"
import { LinkedIn, Twitter, GitHub, Language } from "@mui/icons-material"
import { Link as RouterLink } from "react-router-dom"
import type { FooterLinkSection, NavLinkProps } from "../types"

interface FooterProps {
  sections?: FooterLinkSection[]
}

const defaultSections: FooterLinkSection[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Changelog", href: "/#changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/#blog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/#docs" },
      { label: "API Access", href: "/#api" },
      { label: "Support", href: "/contact" },
      { label: "Status", href: "/#status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#privacy" },
      { label: "Terms", href: "/#terms" },
      { label: "Security", href: "/#security" },
    ],
  },
]

export const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
}) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0F172A",
        color: "white",
        pt: 8,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
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
                  sx={{ color: "white", fontWeight: 700 }}
                >
                  B
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Bigeen
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                mb: 3,
                maxWidth: 320,
                lineHeight: 1.7,
              }}
            >
              The all-in-one platform for modern SaaS businesses. Automate
              workflows, analyze data, and scale infinitely with our
              cutting-edge tools.
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <Language />
              </IconButton>
            </Box>
          </Grid>

          {/* Links Sections */}
          {sections.map((section) => (
            <Grid item xs={6} sm={6} md={2} key={section.title}>
              <Typography
                variant="subtitle2"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {section.links.map((link) =>
                  link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link
                      key={link.label}
                      component={RouterLink}
                      to={link.href}
                      underline="none"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.875rem",
                        transition: "color 0.2s",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      underline="none"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "0.875rem",
                        transition: "color 0.2s",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255, 255, 255, 0.1)" }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "0.813rem" }}
          >
            © {new Date().getFullYear()} Bigeen Solutions. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Link
              href="#privacy"
              underline="none"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.813rem",
                "&:hover": { color: "white" },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#terms"
              underline="none"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.813rem",
                "&:hover": { color: "white" },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
