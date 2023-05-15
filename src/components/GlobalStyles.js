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

          &.about {
            margin-bottom: 50px;
            font-size: 42px;
            line-height: 54px;

            &:after {
              display: block;
              margin-top: 3px;
              content: " ";
              background-color: ${theme.colors.lightBlue};
              height: 5px;
              width: 45%;
            }
          }
        }

        h2 {
          font-family: ${theme.fonts.robotoCondensed};
          font-size: 64px;
          font-weight: 700;
          line-height: 64px;
          text-transform: uppercase;
        }

        p {
          margin-bottom: 15px;
          font-family: ${theme.fonts.alegreya};
          font-size: 20px;
          line-height: 26px;
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
