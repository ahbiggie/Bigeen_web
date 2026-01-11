import { Card, CardContent, Typography, Button, Chip } from "@mui/material"
import { ArrowForward } from "@mui/icons-material"
import type { ProjectCardProps } from "../../types"

export const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  categoryColor,
  title,
  description,
  isDarkMode = false,
}) => (
  <Card
    elevation={0}
    sx={{
      height: "100%",
      borderRadius: 3,
      background: isDarkMode
        ? "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)"
        : "background.paper",
      border: "1px solid",
      borderColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "divider",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: isDarkMode
          ? "0 12px 40px rgba(0, 0, 0, 0.4)"
          : "0 12px 40px rgba(102, 126, 234, 0.15)",
      },
    }}
  >
    <CardContent sx={{ p: 4 }}>
      <Chip
        label={category}
        sx={{
          backgroundColor: `${categoryColor}20`,
          color: categoryColor,
          fontWeight: 600,
          fontSize: "0.75rem",
          mb: 2,
          height: 24,
        }}
      />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          mb: 2,
          color: isDarkMode ? "white" : "text.primary",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "text.secondary",
          lineHeight: 1.7,
          mb: 3,
        }}
      >
        {description}
      </Typography>
      <Button
        variant="text"
        endIcon={<ArrowForward />}
        sx={{
          color: isDarkMode ? "white" : "text.primary",
          fontWeight: 600,
          textTransform: "none",
          p: 0,
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        Read Case Study
      </Button>
    </CardContent>
  </Card>
)
