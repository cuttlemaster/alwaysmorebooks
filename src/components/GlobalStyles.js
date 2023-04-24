import { Global, css } from "@emotion/react";

const GlobalStyles = ({theme}) => {
  console.log(theme);
  return (
    <Global
      styles={css`
        /* LAYOUT STYLES ========================= */
        html { background-color: ${theme.colors.mainBg}; }

        /* ELEMENT STYLES ========================= */
        h1 {
          margin-bottom: 15px;
          border-bottom: 3px solid $dark-gray;
          font-family: ${theme.fonts.lilitaOne};
          font-size: 36px;
          line-height: 36px;
        }

        /* COLOR HELPER CLASSES ========================= */
        .red { color: ${theme.colors.red}; }
        .tan { color: ${theme.colors.tan}; }
        .light-blue { color: ${theme.colors.lightBlue}; }
      `}
    />
  );
};

export default GlobalStyles;
