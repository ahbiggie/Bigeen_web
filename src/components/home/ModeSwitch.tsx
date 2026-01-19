import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useBigeenStore } from "../../store/useBigeenStore"
import { glassStyles, gradients } from "../../theme/theme"
import type { ViewMode } from "../../data/content"

// ============================================
// MOTION COMPONENTS
// ============================================

const MotionBox = motion.create(Box)

// ============================================
// MODE SWITCH COMPONENT
// ============================================

export const ModeSwitch: React.FC = () => {
  const { appMode, setAppMode } = useBigeenStore()

  const modes: { value: ViewMode; label: string }[] = [
    { value: "tech", label: "Technology" },
    { value: "consult", label: "Consulting" },
  ]

  return (
    <Box
      sx={{
        display: "inline-flex",
        p: 0.5,
        borderRadius: 3,
        ...glassStyles.medium,
        position: "relative",
      }}
    >
      {modes.map((item) => (
        <MotionBox
          key={item.value}
          onClick={() => setAppMode(item.value)}
          whileHover={{ scale: appMode === item.value ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          sx={{
            px: 3,
            py: 1.25,
            borderRadius: 2.5,
            cursor: "pointer",
            position: "relative",
            zIndex: 1,
            transition: "color 0.2s ease",
          }}
        >
          {/* Active Background Indicator */}
          {appMode === item.value && (
            <MotionBox
              layoutId="activeMode"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
              sx={{
                position: "absolute",
                inset: 0,
                borderRadius: 2.5,
                background: gradients.accent,
                boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
                zIndex: -1,
              }}
            />
          )}

          <Typography
            variant="body2"
            sx={{
              fontWeight: 600,
              fontSize: "0.875rem",
              color: appMode === item.value ? "white" : "text.secondary",
              transition: "color 0.2s ease",
              userSelect: "none",
            }}
          >
            {item.label}
          </Typography>
        </MotionBox>
      ))}
    </Box>
  )
}
