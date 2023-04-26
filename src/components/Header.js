import styled from "@emotion/styled";

import theme from "../styles/theme";

const HeaderComponent = styled.header`
  margin-top: 18px;
  margin-bottom: 15px;
  border-bottom: 3px solid ${theme.colors.black};
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <h1><span className="red">Always</span><span className="tan">More</span><span className="light-blue">Books</span></h1>
    </HeaderComponent>
  );
};

export default Header;
