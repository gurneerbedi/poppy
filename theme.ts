import { useColorScheme } from "react-native";
export type Theme = {
  colors: {
    primary: string;
    primarySoft: string;
    background: string;
    card: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    border: string;
    shadow: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
  };
  fontSize: {
    sm: number;
    md: number;
    lg: number;
  };
  fontWeight: {
    medium: "500";
    semiBold: "600";
    bold: "700";
  };
  shadow: {
    card: {
      shadowColor: string;
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    };
  };
};

export const lightTheme: Theme = {
  colors: {
    primary: "#6D63FF",
    primarySoft: "#ECEBFF",
    background: "#F6F5FF",
    card: "#FFFFFF",
    textPrimary: "#1B1C2A",
    textSecondary: "#5E6282",
    textMuted: "#9EA3C9",
    border: "#E4E6F7",
    shadow: "#000000",
  },
  spacing: { xs: 5, sm: 10, md: 15, lg: 20, xl: 24, xxl: 30 },
  radius: { sm: 8, md: 10, lg: 16 },
  fontSize: { sm: 14, md: 16, lg: 32 },
  fontWeight: { medium: "500", semiBold: "600", bold: "700" },
  shadow: {
    card: {
      shadowColor: "#6D63FF",
      shadowOpacity: 0.08,
      shadowRadius: 18,
      elevation: 6,
    },
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: "#8A7FFF",
    primarySoft: "#2A2755",
    background: "#0E1024",
    card: "#1A1C3A",
    textPrimary: "#FFFFFF",
    textSecondary: "#C3C6E6",
    textMuted: "#8C90B8",
    border: "#2D2F55",
    shadow: "#000000",
  },
  spacing: lightTheme.spacing,
  radius: lightTheme.radius,
  fontSize: lightTheme.fontSize,
  fontWeight: lightTheme.fontWeight,
  shadow: {
    card: {
      shadowColor: "#000000",
      shadowOpacity: 0.45,
      shadowRadius: 32,
      elevation: 10,
    },
  },
};


export function useTheme() {
  const scheme = useColorScheme();
  return scheme === "dark" ? darkTheme : lightTheme;
}
export function useStyles<T>(makeStyles: (theme: Theme) => T){
  const theme = useTheme()
  const styles =makeStyles(theme);
  return {styles, theme};
}
