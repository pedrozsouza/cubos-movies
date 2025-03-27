import {
  mauve,
  mauveDark,
  purple,
  purpleDark,
  amber,
  amberDark,
  slate,
  slateDark,
} from "@radix-ui/colors";

export const lightTheme = {
  colors: {
    ...mauve,
    ...purple,
    ...amber,
    ...slate,
    background: mauve.mauve1,
    foreground: mauve.mauve12,
    card: "white",
    cardHover: mauve.mauve2,
    primary: purple.purple9,
    primaryHover: purple.purple10,
    primaryActive: purple.purple8,
    secondary: purple.purple11,
    secondaryHover: purple.purple10,
    secondaryActive: purple.purple12,
    border: mauve.mauve6,
    text: {
      primary: mauve.mauve12,
      secondary: mauve.mauve11,
      tertiary: mauve.mauve10,
    },
    rating: {
      background: amber.amber9,
      text: "white",
    },
    header: {
      background: mauve.mauve12,
      text: mauve.mauve1,
    },
    input: {
      background: "white",
      border: mauve.mauve6,
      borderFocus: purple.purple8,
      text: mauve.mauve12,
      placeholder: mauve.mauve9,
    },
    genre: {
      background: purple.purple9,
      text: "white",
    },
  },
};

export const darkTheme = {
  colors: {
    ...mauveDark,
    ...purpleDark,
    ...amberDark,
    ...slateDark,
    background: mauveDark.mauve1,
    foreground: mauveDark.mauve12,
    card: mauveDark.mauve3,
    cardHover: mauveDark.mauve4,
    primary: purpleDark.purple9,
    primaryHover: purpleDark.purple10,
    primaryActive: purpleDark.purple8,
    secondary: purpleDark.purple11,
    secondaryHover: purpleDark.purple10,
    secondaryActive: purpleDark.purple12,
    border: mauveDark.mauve6,
    text: {
      primary: mauveDark.mauve12,
      secondary: mauveDark.mauve11,
      tertiary: mauveDark.mauve10,
    },
    rating: {
      background: amberDark.amber9,
      text: mauveDark.mauve12,
    },
    header: {
      background: mauveDark.mauve1,
      text: mauveDark.mauve12,
    },
    input: {
      background: mauveDark.mauve3,
      border: mauveDark.mauve6,
      borderFocus: purpleDark.purple8,
      text: mauveDark.mauve12,
      placeholder: mauveDark.mauve9,
    },
    genre: {
      background: purpleDark.purple9,
      text: mauveDark.mauve12,
    },
  },
};
