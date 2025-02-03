// import { useRouter } from 'next/router';
// import { getAllProjects, getProjectBySlug } from '@/lib/api';

// const ProjectPage = ({ project }) => {
//   const router = useRouter();

//   if (!router.isFallback && !project?.slug) {
//     return <p>404 - Project not found</p>;
//   }

//   return (
//     <div>
//       <h1>{project.title}</h1>
//       <p>{project.description}</p>
//       {/* Render other project details */}
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const projects = await getAllProjects();
//   const paths = projects.map((project) => ({
//     params: { slug: project.slug },
//   }));

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const project = await getProjectBySlug(params.slug);

//   return {
//     props: { project },
//   };
// }

// export default ProjectPage;
