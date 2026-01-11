import { Box, Card, CardContent, Typography, Button } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import type { FeatureCardProps } from "../../types"

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = "#667eea",
  showLearnMore = false,
}) => (
  <Card
    elevation={0}
    sx={{
      height: "100%",
      border: "1px solid",
      borderColor: "divider",
      borderRadius: 3,
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: `0 12px 40px ${color}20`,
        borderColor: color,
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
        }}
      >
        {icon}
      </Box>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "text.secondary", lineHeight: 1.7 }}
      >
        {description}
      </Typography>
      {showLearnMore && (
        <Button
          endIcon={<ArrowForward sx={{ fontSize: "1rem" }} />}
          sx={{
            mt: 2,
            color: color,
            fontWeight: 600,
            fontSize: "0.875rem",
            textTransform: "none",
            p: 0,
            "&:hover": {
              backgroundColor: "transparent",
              "& .MuiButton-endIcon": {
                transform: "translateX(4px)",
              },
            },
            "& .MuiButton-endIcon": {
              transition: "transform 0.2s",
            },
          }}
        >
          See features
        </Button>
      )}
    </CardContent>
  </Card>
)
