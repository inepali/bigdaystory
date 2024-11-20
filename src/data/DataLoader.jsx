const projectsLoader = async () => {
  const resp = await fetch(`http://localhost:5082/projects`);
  const data = await resp.json();
  return data;
};

const projectLoader = async ({ params }) => {
  const resp = await fetch(`http://localhost:5082/projects/${params.id}`);
  const data = await resp.json();
  return data;
};

export { projectsLoader, projectLoader };
