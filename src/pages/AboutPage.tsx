import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Chip,
} from "@mui/material"
import { Groups, TrendingUp, ArrowForward } from "@mui/icons-material"
import { TeamMemberCard, StatCard } from "../components/ui"
import type { TeamMemberProps } from "../types"

export const AboutPage: React.FC = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      initials: "AM",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      initials: "SC",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    },
  ]

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #F3E7FF 0%, #E9D5FF 100%)",
          pt: { xs: 8, md: 12 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="🚀 About Us"
                sx={{
                  mb: 3,
                  backgroundColor: "rgba(102, 126, 234, 0.15)",
                  color: "#667eea",
                  fontWeight: 600,
                  fontSize: "0.813rem",
                  border: "1px solid rgba(102, 126, 234, 0.3)",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  mb: 3,
                  color: "text.primary",
                }}
              >
                We build the{" "}
                <Box
                  component="span"
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  future of work.
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.125rem" },
                  color: "text.secondary",
                  mb: 4,
                  lineHeight: 1.7,
                  maxWidth: 540,
                }}
              >
                Bigeen Solutions empowers businesses with cutting-edge tools
                designed for the modern era. We remove friction so you can
                experience the sheer flow of productivity.
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    boxShadow: "0 8px 24px rgba(102, 126, 234, 0.4)",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  View our Journey
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: "text.primary",
                    color: "text.primary",
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: "1rem",
                    "&:hover": {
                      borderColor: "primary.main",
                      backgroundColor: "rgba(102, 126, 234, 0.05)",
                    },
                  }}
                >
                  🎯 Watch Roadmap
                </Button>
              </Stack>
            </Grid>

            {/* Hero Image */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: 300, md: 400 },
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    background:
                      'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(135deg, rgba(102, 126, 234, 0.3) 0%, rgba(118, 75, 162, 0.3) 100%)",
                      borderRadius: 4,
                    },
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Story Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
        <Container maxWidth="md">
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              p: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, rgba(102, 126, 234, 0.03) 0%, rgba(118, 75, 162, 0.03) 100%)",
            }}
          >
            <Chip
              label="🎯 The Origin"
              sx={{
                mb: 3,
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                color: "#667eea",
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: "text.primary",
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Born from the frustration of disconnected workflows.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                mb: 3,
                fontSize: "1.05rem",
              }}
            >
              In early 2020, our founders realized that companies were juggling
              20+ disconnected tools. The overhead was crushing productivity. We
              set out to build a unified platform that just works.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: "1.05rem",
              }}
            >
              Today, we're proud to serve 500+ companies with our seamless
              integrations. Today we're building the next generation of workflow
              automation with AI-powered insights and predictive analytics.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 4 }}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
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
                      #4y
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", display: "block" }}
                    >
                      Years Building
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "background.paper",
                  }}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      background:
                        "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      ✓
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", display: "block" }}
                    >
                      SOC2 Approved
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                value="50+"
                label="Team Members"
                icon={<Groups sx={{ fontSize: 32, color: "#667eea" }} />}
                color="#667eea"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                value="500+"
                label="Active Customers"
                icon={<TrendingUp sx={{ fontSize: 32, color: "#10B981" }} />}
                color="#10B981"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                value="12"
                label="Products Shipped"
                icon={<Box sx={{ fontSize: 32 }}>🚀</Box>}
                color="#F59E0B"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatCard
                value="99.9%"
                label="Uptime SLA"
                icon={<Box sx={{ fontSize: 32 }}>⚡</Box>}
                color="#EF4444"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                mb: 2,
                color: "text.primary",
              }}
            >
              Meet the minds behind the magic
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.125rem",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Our team of engineers, designers, and dreamers building the tools
              that power modern businesses.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TeamMemberCard {...member} />
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: "divider",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    height: 240,
                    background:
                      "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "3px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{ color: "white", fontWeight: 700 }}
                    >
                      RP
                    </Typography>
                  </Box>
                </Box>
                <CardContent sx={{ p: 3, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 0.5, color: "text.primary" }}
                  >
                    Ravi Patel
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Head of Design
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
      >
        <Container maxWidth="md">
          <Card
            elevation={0}
            sx={{
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              borderRadius: 4,
              p: { xs: 4, md: 8 },
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                opacity: 0.1,
                filter: "blur(80px)",
              }}
            />

            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
              }}
            >
              Ready to shape the future?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.8)",
                mb: 4,
                fontSize: "1.125rem",
                maxWidth: 500,
                mx: "auto",
              }}
            >
              Join 500+ companies that have already transformed the way they
              work with Bigeen Solutions.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <Button
                variant="contained"
                size="large"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)",
                  },
                }}
              >
                Get Started for Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "white",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Contact Sales
              </Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}
