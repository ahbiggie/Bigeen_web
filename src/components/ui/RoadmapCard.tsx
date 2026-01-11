import { Box, Card, CardContent, Typography, Chip } from "@mui/material"
import { ThumbUp, Visibility, ChatBubbleOutline } from "@mui/icons-material"
import type { RoadmapCardProps } from "../../types"

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  label,
  labelColor,
  icon,
  title,
  description,
  votes,
  views,
  status,
}) => (
  <Card
    elevation={0}
    sx={{
      borderRadius: 3,
      border: "1px solid",
      borderColor: "divider",
      transition: "all 0.3s ease",
      "&:hover": {
        borderColor: labelColor,
        boxShadow: "0 8px 24px rgba(102, 126, 234, 0.12)",
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Chip
          label={label}
          sx={{
            backgroundColor: `${labelColor}20`,
            color: labelColor,
            fontWeight: 600,
            fontSize: "0.75rem",
            height: 24,
          }}
        />
        {status && (
          <Chip
            label={status}
            size="small"
            sx={{
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              color: "#10B981",
              fontWeight: 600,
              fontSize: "0.7rem",
            }}
          />
        )}
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 2 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            backgroundColor: `${labelColor}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, mb: 1, fontSize: "1.1rem" }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", lineHeight: 1.6 }}
          >
            {description}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThumbUp sx={{ fontSize: 16, color: "text.disabled" }} />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            {votes}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Visibility sx={{ fontSize: 16, color: "text.disabled" }} />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            {views}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ChatBubbleOutline sx={{ fontSize: 16, color: "text.disabled" }} />
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", fontWeight: 600 }}
          >
            {Math.floor(votes / 3)}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
)
