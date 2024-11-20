import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";

const ProjectPage = () => {
  const project = useLoaderData();

  return <ProjectDetails project={project} />;
};


export default ProjectPage;