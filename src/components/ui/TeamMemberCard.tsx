import { Box, Card, CardContent, Typography } from "@mui/material"
import type { TeamMemberProps } from "../../types"

export const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  initials,
  gradient,
}) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 3,
      overflow: "hidden",
      border: "1px solid",
      borderColor: "divider",
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 40px rgba(102, 126, 234, 0.15)",
      },
    }}
  >
    <Box
      sx={{
        height: 240,
        background: gradient,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
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
        <Typography variant="h4" sx={{ color: "white", fontWeight: 700 }}>
          {initials}
        </Typography>
      </Box>
    </Box>
    <CardContent sx={{ p: 3, textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, mb: 0.5, color: "text.primary" }}
      >
        {name}
      </Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {role}
      </Typography>
    </CardContent>
  </Card>
)
