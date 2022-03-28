import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    color-scheme: dark;
  }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
      unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format('woff2');
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }




    /* OUTRA */

    /* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 300;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 300;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 300;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 400;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 500;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 600;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 800;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* vietnamese */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLySOxK-vA.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLyTOxK-vA.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 900;
  font-stretch: 100%;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/archivo/v9/k3kPo8UDI-1M0wlSV9XAw6lQkqWY8Q82sLydOxI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    outline: unset;
  }

  ul {
    list-style: none;
  }
  
  
  a {
    text-decoration: none;
  }

  html {
    height: -webkit-fill-available;
    scroll-behavior: smooth;
  }


  body {
    background: #FFFFFF;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
    background-color: ${props => props.theme.colors.Primary};
    #__next {
        display: flex;
        flex-direction: column;
        row-gap: 70px;
    }
  }
  .hidden__scroll {
    @media screen and (max-width: 768px) {
      overflow: hidden;
    }
  }
`;
