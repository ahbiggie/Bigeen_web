import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  LinearProgress,
  Stack,
} from "@mui/material"
import {
  Lightbulb,
  Smartphone,
  VpnKey,
  TrendingUp,
  ArrowForward,
} from "@mui/icons-material"
import { RoadmapCard, ProjectCard } from "../components/ui"
import type { RoadmapCardProps } from "../types"

export const RoadmapPage: React.FC = () => {
  const roadmapItems: RoadmapCardProps[] = [
    {
      label: "In Design",
      labelColor: "#667eea",
      icon: <Lightbulb sx={{ fontSize: 20, color: "#667eea" }} />,
      title: "AI Analytics Integration",
      description:
        "Predictive analytics and insights directly within the Bigeen dashboard.",
      votes: 342,
      views: 1205,
    },
    {
      label: "Coming Q4",
      labelColor: "#F59E0B",
      icon: <Smartphone sx={{ fontSize: 20, color: "#F59E0B" }} />,
      title: "Mobile Companion App",
      description:
        "Native iOS and Android apps for managing workflows on the go.",
      votes: 287,
      views: 956,
    },
    {
      label: "Planned",
      labelColor: "#3B82F6",
      icon: <VpnKey sx={{ fontSize: 20, color: "#3B82F6" }} />,
      title: "Public API Gateway",
      description:
        "Powerful public endpoints for developers to build custom integrations.",
      votes: 198,
      views: 743,
      status: "Dark Mode v2",
    },
  ]

  return (
    <Box sx={{ backgroundColor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)",
          pt: { xs: 6, md: 10 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Chip
              label="🎯 Live Roadmap & Projects"
              sx={{
                mb: 3,
                backgroundColor: "rgba(102, 126, 234, 0.1)",
                color: "#667eea",
                fontWeight: 600,
                fontSize: "0.813rem",
                border: "1px solid rgba(102, 126, 234, 0.2)",
              }}
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                color: "text.primary",
              }}
            >
              Building the Future of{" "}
              <Box
                component="span"
                sx={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Tools
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.125rem",
                color: "text.secondary",
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.7,
              }}
            >
              Transparency at our core. Explore our journey from legacy systems
              to our flagship Micro-SaaS Integrator. Vote on what we build next.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Current Focus Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              mb: 6,
              color: "text.primary",
            }}
          >
            Current Focus
          </Typography>

          <Grid container spacing={4}>
            {/* Featured Project Card */}
            <Grid item xs={12} md={7}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  border: "1px solid",
                  borderColor: "divider",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Chip
                    label="LIVE v2.0"
                    sx={{
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "#10B981",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      mb: 3,
                    }}
                  />
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 800, mb: 2, color: "text.primary" }}
                  >
                    Bigeen Core
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.7,
                      mb: 4,
                    }}
                  >
                    The All-in-One Integrator seamlessly connecting your
                    business tools. Currently serving 500+ businesses with
                    automated workflows and real-time analytics.
                  </Typography>

                  <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "white",
                        fontWeight: 600,
                        px: 3,
                        borderRadius: 2,
                        textTransform: "none",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg, #5568d3 0%, #6a3f8f 100%)",
                        },
                      }}
                    >
                      Try for Free
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "divider",
                        color: "text.primary",
                        fontWeight: 600,
                        px: 3,
                        borderRadius: 2,
                        textTransform: "none",
                        "&:hover": {
                          borderColor: "primary.main",
                        },
                      }}
                    >
                      View Changelog
                    </Button>
                  </Stack>

                  {/* Decorative circles */}
                  <Box sx={{ display: "flex", gap: 3, mt: 4 }}>
                    {[120, 100, 140, 90].map((size, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: size,
                          height: size,
                          borderRadius: "50%",
                          border: "8px solid",
                          borderColor:
                            ["#667eea", "#3B82F6", "#10B981", "#F59E0B"][
                              index
                            ] + "30",
                          opacity: 0.6,
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Card>
            </Grid>

            {/* Stats Sidebar */}
            <Grid item xs={12} md={5}>
              <Stack spacing={3} sx={{ height: "100%" }}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    p: 3,
                  }}
                >
                  <Typography
                    variant="overline"
                    sx={{ color: "text.secondary", fontSize: "0.75rem" }}
                  >
                    Total Projects
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{ fontWeight: 800, color: "text.primary", mb: 1 }}
                  >
                    12
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        Live
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        3
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={25}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: "rgba(16, 185, 129, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#10B981",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 1,
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        In Development
                      </Typography>
                      <Typography variant="caption" sx={{ fontWeight: 600 }}>
                        4
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={33}
                      sx={{
                        height: 6,
                        borderRadius: 3,
                        backgroundColor: "rgba(102, 126, 234, 0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: "#667eea",
                          borderRadius: 3,
                        },
                      }}
                    />
                  </Box>
                </Card>

                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    p: 3,
                    background:
                      "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mb: 2,
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
                      <TrendingUp sx={{ color: "white", fontSize: 24 }} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Community Request
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary" }}
                      >
                        Submit your own feature idea
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* The Lab: Public Roadmap */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.default" }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 6,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                color: "text.primary",
              }}
            >
              The Lab: Public Roadmap
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Chip label="Q3 2025" variant="outlined" />
              <Chip label="Q4 2025" variant="outlined" />
            </Box>
          </Box>

          <Grid container spacing={3}>
            {roadmapItems.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <RoadmapCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Archive: Legacy Projects */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: "background.paper" }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              mb: 6,
              color: "text.primary",
            }}
          >
            Archive: Legacy Projects
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <ProjectCard
                category="2021 - Logistics"
                categoryColor="#667eea"
                title="Project Alpha CRM"
                description="A bespoke CRM solution for a mid-sized logistics firm that increased efficiency by 40%."
                isDarkMode={true}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ProjectCard
                category="2022 - Retail"
                categoryColor="#F59E0B"
                title="Omni-POS System"
                description="Integrated point-of-sale system connecting physical & inventory with e-commerce platforms."
                isDarkMode={true}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
