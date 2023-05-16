import Head from 'next/head';
import styled from '@emotion/styled';
import theme from '../styles/theme';

import MainContainer from '../components/MainContainer';
import AboutSidebar from '../components/AboutSidebar';

const AboutContainer = styled(MainContainer)`
  display: flex;
  justify-content: space-between;
  gap: 35px;
  max-width: 1000px;
`;

const MainBody = styled.div`
  max-width: 66.666%;
`;

export default function About() {
  return (
    <>
      <Head>
        <title>Always More Books: About</title>
        <meta name="description" content="Caleb Flanagan is the author of Always More Books. Learn more about him and why this blog exists." />
      </Head>

      <AboutContainer>
        <MainBody>
          <h1 className="about">The Tale of How an Old Dog Learned New Tricks and AI Assisted Book Reviews Became a Reality</h1>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis mauris purus. Sed tincidunt ornare malesuada. Sed sit amet sem mi. Ut et nunc a erat dapibus rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean quis rhoncus diam.</p>

          <p>Etiam malesuada volutpat est, at suscipit ligula. Maecenas ullamcorper elit quis neque facilisis, a varius sem faucibus. Suspendisse condimentum rutrum tortor, non lobortis turpis. Nulla facilisi. Maecenas consectetur risus at enim dapibus, ac dictum nulla eleifend. Ut euismod, augue a lacinia condimentum, justo nisl pretium lorem, vel aliquet arcu tellus et neque. Nulla facilisi.</p>

          <p>Pellentesque bibendum convallis augue, id iaculis est vehicula quis. Donec pulvinar, eros non luctus cursus, velit ex ultrices lorem, nec aliquet enim ipsum a lorem. Maecenas ut velit nec purus pulvinar tincidunt. Suspendisse potenti. Nulla facilisi. In hac habitasse platea dictumst. Aliquam id augue congue, maximus lorem ut, iaculis metus. Aenean sit amet arcu tortor.</p>

          <p>Sed sit amet turpis condimentum, fringilla sem ut, vulputate mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean tincidunt mauris in faucibus porttitor. Donec tincidunt, metus in maximus volutpat, libero lacus vulputate justo, ac lobortis diam arcu eu metus. Vestibulum tincidunt lorem justo, at auctor ex bibendum a.</p>

          <p>Cras vehicula ipsum in convallis efficitur. Sed rhoncus, dui id auctor dictum, tortor diam tincidunt diam, sit amet imperdiet purus diam sed orci. Maecenas auctor tristique neque, at cursus mauris vestibulum vel. Morbi eget tincidunt elit, id bibendum nunc. Etiam sagittis massa non turpis venenatis, eu ultrices orci bibendum. Etiam iaculis mi a sem vestibulum, in tempus mauris laoreet.</p>

          <p>Ut non erat a risus scelerisque semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris vitae nisi ac mi pulvinar vestibulum. Proin congue massa id risus cursus, eget varius justo facilisis. Nulla facilisi. Vivamus sit amet nunc massa.</p>

          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam a risus lorem. Aenean volutpat, massa in consequat vestibulum, magna nisl elementum lacus, nec vehicula elit elit a dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ullamcorper malesuada est, in dapibus tellus luctus nec.</p>

          <p>Donec facilisis, sem id lacinia porttitor, lacus enim tincidunt nisl, vitae</p>
        </MainBody>
        <AboutSidebar />
      </AboutContainer>
    </>
  )
}
