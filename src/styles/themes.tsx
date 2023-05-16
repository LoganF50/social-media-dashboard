const defaultTheme = {
  borderStyles: {
    none: "none",
    solid: "solid",
  },
  borderRadius: {
    none: "0",
    base100: "0.25rem",
    base200: "0.375rem",
    base300: "0.5rem",
    base400: "1rem",
    base500: "2rem",
    circular: "9999rem",
  },
  borderWidth: {
    none: "0",
    base100: "1px",
    base200: "2px",
    base300: "4px",
    base400: "8px",
  },
  breakpoint: {
    mobileSm: "320px",
    mobileMd: "375px",
    mobileLg: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopLg: "1440px",
    desktop: "2560px",
  },
  color: {},
  duration: {
    short: "250ms",
    medium: "375ms",
    long: "500ms",
  },
  fontFamily: {
    primary: "Inter, sans-serif",
  },
  fontSize: {
    base100: "0.75rem",
    base200: "0.875rem",
    base300: "1rem",
    base400: "1.125rem",
    base500: "1.25rem",
    base600: "1.5rem",
    base700: "2rem",
    base800: "3rem",
    base900: "4rem",
    base1000: "6rem",
  },
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  spacing: {
    base100: "0.125rem",
    base200: "0.25rem",
    base300: "0.5rem",
    base400: "0.75rem",
    base500: "1rem",
    base600: "1.25rem",
    base700: "1.75rem",
    base800: "2rem",
    base900: "2.25rem",
    base1000: "3rem",
  },
};

const darkTheme = {
  name: "dark",
  color: {
    ...defaultTheme.color,
    green: "hsl(163, 72%, 41%)",
    red: "hsl(356, 69%, 56%)",
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: {
      yellow: "hsl(37, 97%, 70%)",
      pink: "hsl(329, 70%, 58%)",
    },
    youtube: "hsl(348, 97%, 39%)",
    background: {
      primary: "hsl(230, 17%, 14%)",
      secondary: "hsl(232, 19%, 15%)",
    },
    card: {
      background: "hsl(228, 28%, 20%)",
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(228, 34%, 66%)",
    },
    toggle: {
      background: {
        blue: "hsl(210, 78%, 56%)",
        gray: "hsl(230, 22%, 74%)",
        green: "hsl(146, 68%, 55%)",
      },
    },
  },
};

const lightTheme = {
  name: "light",
  color: {
    ...defaultTheme.color,
    green: "hsl(163, 72%, 41%)",
    red: "hsl(356, 69%, 56%)",
    facebook: "hsl(208, 92%, 53%)",
    twitter: "hsl(203, 89%, 53%)",
    instagram: {
      yellow: "hsl(37, 97%, 70%)",
      pink: "hsl(329, 70%, 58%)",
    },
    youtube: "hsl(348, 97%, 39%)",
    background: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(225, 100%, 98%)",
    },
    card: {
      background: "hsl(227, 47%, 96%)",
    },
    text: {
      primary: "hsl(230, 17%, 14%)",
      secondary: "hsl(228, 12%, 44%)",
    },
    toggle: {
      background: {
        blue: "hsl(210, 78%, 56%)",
        gray: "hsl(230, 22%, 74%)",
        green: "hsl(146, 68%, 55%)",
      },
    },
  },
};

export const Themes = {
  dark: {
    ...defaultTheme,
    name: darkTheme.name,
    color: darkTheme.color,
  },
  light: {
    ...defaultTheme,
    name: lightTheme.name,
    color: lightTheme.color,
  },
};
