import { styled } from "../../../stitches.config";
import { motion } from "framer-motion";

export const Box = styled("div", {
  variants: {
    width: {
      full: {
        width: "100%",
      },
      half: {
        width: "50%",
      },
      third: {
        width: "33.333%",
      },
      quarter: {
        width: "25%",
      },
      threeQuarters: {
        width: "75%",
      },
      twoThirds: {
        width: "66.666%",
      },
    },
    padding: {
      xs: {
        padding: "$xs",
      },
      sm: {
        padding: "$sm",
      },
      md: {
        padding: "$md",
      },
      lg: {
        padding: "$lg",
      },
      xl: {
        padding: "$xl",
      },
      "2xl": {
        padding: "$2xl",
      },
    },
    border: {
      full: {
        border: "1px solid $gray10",
      },
      top: {
        borderTop: "1px solid $gray10",
      },
      bottom: {
        borderBottom: "1px solid $gray10",
      },
      right: {
        borderRight: "1px solid $gray10",
      },
      left: {
        borderLeft: "1px solid $gray10",
      },
    },
    m: {
      xs: {
        margin: "$xs",
      },
      sm: {
        margin: "$sm",
      },
      md: {
        margin: "$md",
      },
      lg: {
        margin: "$lg",
      },
      xl: {
        margin: "$xl",
      },
      "2xl": {
        margin: "$2xl",
      },
    },
    mt: {
      xs: {
        marginTop: "$xs",
      },
      sm: {
        marginTop: "$sm",
      },
      md: {
        marginTop: "$md",
      },
      lg: {
        marginTop: "$lg",
      },
      xl: {
        marginTop: "$xl",
      },
      "2xl": {
        marginTop: "$2xl",
      },
    },
    mb: {
      xs: {
        marginBottom: "$xs",
      },
      sm: {
        marginBottom: "$sm",
      },
      md: {
        marginBottom: "$md",
      },
      lg: {
        marginBottom: "$lg",
      },
      xl: {
        marginBottom: "$xl",
      },
      "2xl": {
        marginBottom: "$2xl",
      },
    },
    radius: {
      none: {
        borderRadius: "0px",
      },
      sm: {
        borderRadius: "4px",
      },
      md: {
        borderRadius: "8px",
      },
      lg: {
        borderRadius: "12px",
      },
    },
    spaceY: {
      xs: {
        sy: "$xs",
      },
      sm: {
        sy: "$sm",
      },
      md: {
        sy: "$md",
      },
      lg: {
        sy: "$lg",
      },
      xl: {
        sy: "$xl",
      },
    },
    spaceX: {
      xs: {
        sx: "$xs",
      },
      sm: {
        sx: "$sm",
      },
      md: {
        sx: "$md",
      },
      lg: {
        sx: "$lg",
      },
      xl: {
        sx: "$xl",
      },
    },
    gap: {
      xs: {
        gap: "$xs",
      },
      sm: {
        gap: "$sm",
      },
      md: {
        gap: "$md",
      },
      lg: {
        gap: "$lg",
      },
      xl: {
        gap: "$xl",
      },
      "2xl": {
        gap: "$2xl",
      },
    },

    flex: {
      row: {
        display: "flex",
        flexDirection: "row",
      },
      column: {
        display: "flex",
        flexDirection: "column",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      start: {
        justifyContent: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
    },
    align: {
      center: {
        alignItems: "center",
      },
      start: {
        alignItems: "flex-start",
      },
      end: {
        alignItems: "flex-end",
      },
      between: {
        alignItems: "space-between",
      },
    },
    full: {
      true: {
        width: "100%",
      },
    },
    tall: {
      true: {
        height: "100%",
      },
    },
    bg: {
      primary: {
        backgroundColor: "$primary",
      },
      secondary: {
        backgroundColor: "$secondary",
      },
      dark: {
        backgroundColor: "$dark",
      },
    },
    shadow: {
      true: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  defaultVariants: {
    radius: "none",
  },
});
