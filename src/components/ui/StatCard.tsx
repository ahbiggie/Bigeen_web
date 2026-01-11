import { Box, Card, Typography } from "@mui/material"
import type { StatCardProps } from "../../types"

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  color,
}) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 3,
      border: "1px solid",
      borderColor: "divider",
      background: `linear-gradient(135deg, ${color}08 0%, ${color}03 100%)`,
      p: 4,
      textAlign: "center",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "scale(1.05)",
        borderColor: color,
      },
    }}
  >
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: 2,
        background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mx: "auto",
        mb: 2,
      }}
    >
      {icon}
    </Box>
    <Typography
      variant="h3"
      sx={{ fontWeight: 800, mb: 1, color: "text.primary" }}
    >
      {value}
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: "text.secondary", fontWeight: 500 }}
    >
      {label}
    </Typography>
  </Card>
)
