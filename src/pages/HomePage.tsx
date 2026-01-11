import { Box, Container, Typography, Button, Stack, Chip, Card, Grid } from '@mui/material';
import { ArrowForward, PlayArrow, Star } from '@mui/icons-material';
import { gradients } from '../theme/theme';

// ============================================
// INTERFACES
// ============================================

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ============================================
// SUB-COMPONENTS
// ============================================

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card
    elevation={0}
    sx={{
      p: 4,
      height: '100%',
      border: '1px solid',
      borderColor: 'divider',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 40px rgba(26, 35, 126, 0.12)',
        borderColor: 'primary.main',
      },
    }}
  >
    <Box
      sx={{
        width: 56,
        height: 56,
        borderRadius: 2,
        bgcolor: 'rgba(26, 35, 126, 0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 3,
        color: 'primary.main',
      }}
    >
      {icon}
    </Box>
    <Typography variant="h6" sx={{ mb: 1.5, color: 'text.primary' }}>
      {title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      {description}
    </Typography>
  </Card>
);

// ============================================
// HOMEPAGE COMPONENT
// ============================================

export const HomePage: React.FC = () => {
  const features: FeatureCardProps[] = [
    {
      icon: <Box component="span" sx={{ fontSize: 28 }}>🚀</Box>,
      title: 'Smart Automation',
      description: 'Automate complex workflows with our intelligent process engine.',
    },
    {
      icon: <Box component="span" sx={{ fontSize: 28 }}>📊</Box>,
      title: 'Real-time Analytics',
      description: 'Deep insights with built-in analytics that just works.',
    },
    {
      icon: <Box component="span" sx={{ fontSize: 28 }}>🔒</Box>,
      title: 'Enterprise Security',
      description: 'SOC2 compliant with zero-downtime guaranteed.',
    },
    {
      icon: <Box component="span" sx={{ fontSize: 28 }}>⚡</Box>,
      title: 'Instant Scalability',
      description: 'Infrastructure that grows effortlessly with your business.',
    },
  ];

  return (
    <Box>
      {/* ======================== HERO SECTION ======================== */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #F3E8FF 0%, #E0E7FF 50%, #F8FAFC 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            {/* Left Column: Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={3}>
                <Chip
                  label="✨ Now Available for Early Access"
                  sx={{
                    alignSelf: 'flex-start',
                    bgcolor: 'rgba(26, 35, 126, 0.1)',
                    color: 'primary.main',
                    fontWeight: 600,
                    fontSize: '0.813rem',
                    border: '1px solid rgba(26, 35, 126, 0.2)',
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                    color: 'text.primary',
                  }}
                >
                  Scale Your Micro-
                  <Box
                    component="span"
                    sx={{
                      background: gradients.accent,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    SaaS
                  </Box>{' '}
                  Stack.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    color: 'text.secondary',
                    maxWidth: 520,
                  }}
                >
                  Integrated tools for the modern founder. Automate workflows, analyze growth, and scale infrastructure without the enterprise bloat.
                </Typography>

                {/* CTA Buttons */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      background: gradients.primary,
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        background: gradients.accent,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Get Early Access
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<PlayArrow />}
                    sx={{
                      borderColor: 'text.primary',
                      color: 'text.primary',
                      px: 4,
                      py: 1.5,
                      fontSize: '1rem',
                      '&:hover': {
                        borderColor: 'primary.main',
                        bgcolor: 'rgba(26, 35, 126, 0.04)',
                      },
                    }}
                  >
                    Watch Demo
                  </Button>
                </Stack>

                {/* Social Proof */}
                <Stack direction="row" alignItems="center" spacing={2} sx={{ pt: 2 }}>
                  <Stack direction="row" spacing={-0.5}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} sx={{ fontSize: 20, color: '#F59E0B' }} />
                    ))}
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    Trusted by 500+ founders
                  </Typography>
                </Stack>
              </Stack>
            </Grid>

            {/* Right Column: Hero Image Placeholder */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  width: '100%',
                  height: { xs: 300, md: 450 },
                  borderRadius: 4,
                  background: gradients.dark,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.25)',
                }}
              >
                {/* Floating Card Mock */}
                <Card
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    p: 2,
                    borderRadius: 2,
                    animation: 'float 3s ease-in-out infinite',
                    '@keyframes float': {
                      '0%, 100%': { transform: 'translateY(0px)' },
                      '50%': { transform: 'translateY(-15px)' },
                    },
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    API Calls
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'success.main' }}>
                    +42.8%
                  </Typography>
                </Card>

                <Card
                  sx={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '15%',
                    p: 2,
                    borderRadius: 2,
                    animation: 'float 3s ease-in-out infinite 1s',
                  }}
                >
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Status
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'success.main' }}>
                    ✓ Deployed
                  </Typography>
                </Card>

                {/* Glow Effect */}
                <Box
                  sx={{
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: gradients.accent,
                    opacity: 0.15,
                    filter: 'blur(60px)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ======================== TRUSTED BY SECTION ======================== */}
      <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
        <Container maxWidth="xl">
          <Typography
            variant="overline"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: 'text.secondary',
              mb: 4,
              letterSpacing: 1.5,
            }}
          >
            TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {['Accenture', 'Deloitte', 'Nvidia', 'Vercel', 'Shopify', 'Stripe'].map((company) => (
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={company}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: 'center',
                    color: 'text.disabled',
                    fontWeight: 600,
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 },
                  }}
                >
                  {company}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ======================== FEATURES SECTION ======================== */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
              Everything you need to{' '}
              <Box
                component="span"
                sx={{
                  background: gradients.accent,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                grow
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: '1.125rem',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Powerful features wrapped in a simple, intuitive interface designed for lean teams.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <FeatureCard {...feature} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ======================== CTA SECTION ======================== */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Card
            elevation={0}
            sx={{
              background: gradients.dark,
              borderRadius: 4,
              p: { xs: 4, md: 8 },
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background Glow */}
            <Box
              sx={{
                position: 'absolute',
                top: -100,
                right: -100,
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: gradients.accent,
                opacity: 0.1,
                filter: 'blur(80px)',
              }}
            />

            <Typography variant="h3" sx={{ color: 'white', mb: 2 }}>
              Ready to simplify your stack?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 4,
                maxWidth: 500,
                mx: 'auto',
              }}
            >
              Join 500+ companies that have already transformed their workflows with Bigeen Solutions.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button
                variant="contained"
                size="large"
                sx={{
                  background: gradients.accent,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    background: gradients.primary,
                  },
                }}
              >
                Get Started for Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
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
  );
};
