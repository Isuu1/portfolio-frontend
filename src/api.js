//Fetching function
export async function getProjects() {
  const response = await fetch(
    `https://portfolio-backend-1-fdmc.onrender.com/api/projects?&populate=*`
  );

  if (!response.ok) {
    throw new Error(
      JSON.stringify({
        message: "Failed to fetch data",
        statusText: response.statusText,
        status: response.status,
      })
    );
  }

  const posts = await response.json();
  return posts;
}

//Fetching function for single project
export async function getProject(id) {
  const response = await fetch(
    `https://portfolio-backend-1-fdmc.onrender.com/api/projects/${id}?populate=*`
  );
  if (!response.ok) {
    throw new Error(
      JSON.stringify({
        message: "Failed to fetch data",
        statusText: response.statusText,
        status: response.status,
      })
    );
  }
  const posts = await response.json();
  return posts;
}
