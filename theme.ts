export const lightTheme = {
  colors: {
    primary: "#5A4FCF",
    background: "#5A4FCF",
    card: "#FFFFFF",
    textPrimary: "#FFFFFF",
    textSecondary: "#E0E0E0",
    textMuted: "#999999",
    border: "#DDDDDD",
    shadow: "#000000",
  },

  spacing: {
    xs: 5,
    sm: 10,
    md: 15,
    lg: 20,
    xl: 24,
    xxl: 30,
  },

  radius: {
    sm: 8,
    md: 10,
    lg: 16,
  },

  fontSize: {
    sm: 14,
    md: 16,
    lg: 32,
  },

  fontWeight: {
    medium: "500" as const,
    semiBold: "600" as const,
    bold: "700" as const,
  },

  shadow: {
    card: {
      shadowColor: "#000000",
      shadowOpacity: 0.15,
      shadowRadius: 20,
      elevation: 8,
    },
  },
};

export const darkTheme = {
  colors: {
    primary: "#7C6FF0",
    background: "#0F1020",
    card: "#1A1B2E",
    textPrimary: "#FFFFFF",
    textSecondary: "#B8B8D1",
    textMuted: "#8A8AA3",
    border: "#2A2B45",
    shadow: "#000000",
  },

  spacing: lightTheme.spacing,
  radius: lightTheme.radius,
  fontSize: lightTheme.fontSize,
  fontWeight: lightTheme.fontWeight,

  shadow: {
    card: {
      shadowColor: "#000000",
      shadowOpacity: 0.4,
      shadowRadius: 30,
      elevation: 10,
    },
  },
};
export const theme = lightTheme;
