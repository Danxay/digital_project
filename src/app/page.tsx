import { NextPage } from 'next';

import { AboutCompany } from 'components/AboutCompany/AboutCompany';
import { Contacts } from 'components/Contacts/Contacts';
import { OurProjects } from 'components/OurProjects/OurProjects';
import { PrimaryGoals } from 'components/PrimaryGoals/PrimaryGoals';
import { ProjectsSlider } from 'components/ProjectsSlider/ProjectsSlider';

const Home: NextPage = () => {
  return (
    <>
      <ProjectsSlider />
      <AboutCompany />
      <PrimaryGoals />
      <OurProjects />
      <Contacts />
    </>
  );
};

export default Home;
