import { Global, css } from "@emotion/react";

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        /* Add your global styles here */
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
            Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;
