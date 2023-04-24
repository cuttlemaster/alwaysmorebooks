import styled from "@emotion/styled";

const HeaderComponent = styled.header`
  margin: auto;
  max-width: 1000px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderComponent>
      <h1><span class="red">Always</span><span class="tan">More</span><span class="light-blue">Books</span></h1>
    </HeaderComponent>
  );
};

export default Header;
