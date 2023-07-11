import { NextPage } from 'next';

import { notFound } from 'next/navigation';

import { ProjectDetails } from 'components/ProjectDetails/ProjectDetails';
import { projectsDetails } from 'constants/projects';

interface IProjectDetailsPageProps {
  params: { id: string };
}

const ProjectDetailsPage: NextPage<IProjectDetailsPageProps> = async ({ params }) => {
  const project = projectsDetails[Number(params.id) - 1];

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
