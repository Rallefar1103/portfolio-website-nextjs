// "use client";

// import { useState } from "react";
// import { useRouter } from "next/router";

// import { allProjects, projectDescriptions } from "@/constants/all-projects";
// import styles from "./projectDetails.module.css";
// import { ProjectIntro } from "./project-intro/projectIntro";
// import OneMockupView from "./one-mockup/oneMockup";
// import TwoMockupView from "./two-mockup/twoMockup";
// import ThreeMockupView from "./three-mockup/threeMockup";

// const ProjectDetails = () => {
//   const router = useRouter();
//   const { projectId } = router.query;
//   const project = allProjects.find((p) => p.id === projectId);
//   const projectDescription = projectDescriptions.find(
//     (p) => p.id === projectId
//   );
//   const [slogan, setSlogan] = useState(projectDescription.slogan);
//   const [challenge, setChallenge] = useState(projectDescription.challenge);
//   const [challengeDescription, setChallengeDescription] = useState(
//     projectDescription.challengeDescription
//   );
//   const [solution, setSolution] = useState(projectDescription.solution);
//   const [solutionDescription, setSolutionDescription] = useState(
//     projectDescription.solutionDescription
//   );
//   const [extraText, setExtraText] = useState(projectDescription.extraText);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div section="project-details-section" className={styles.projectDetails}>
//       <ProjectIntro
//         backgroundImage={project.backgroundImage}
//         title={project.name}
//         tags={project.stack}
//         tagline={slogan}
//       />
//       {/* Project Mockups */}
//       {project.presentationImages.length === 1 && (
//         <OneMockupView
//           challenge={challenge}
//           challengeDescription={challengeDescription}
//           image={project.presentationImages[0].image}
//         />
//       )}

//       {project.presentationImages.length === 2 && (
//         <>
//           <OneMockupView
//             challenge={challenge}
//             challengeDescription={challengeDescription}
//             image={project.presentationImages[0].image}
//           />
//           <TwoMockupView
//             solution={solution}
//             solutionDescription={solutionDescription}
//             imageTwo={project.presentationImages[1].image}
//           />
//         </>
//       )}

//       {project.presentationImages.length === 3 && (
//         <>
//           <OneMockupView
//             challenge={challenge}
//             challengeDescription={challengeDescription}
//             image={project.presentationImages[0].image}
//           />
//           <TwoMockupView
//             solution={solution}
//             solutionDescription={solutionDescription}
//             imageTwo={project.presentationImages[1].image}
//           />
//           <ThreeMockupView
//             extraText={extraText}
//             imageThree={project.presentationImages[2].image}
//           />
//         </>
//       )}
//       {/* Project Tech Description */}
//       <div className={styles.projectTech}>
//         <div className={styles.techDetailsContent}>
//           <div className={styles.techTitleContainer}>
//             <h1 className={styles.techTitle}>
//               Lets talk
//               <span className={styles.techYellow}> Tech!</span>
//             </h1>
//           </div>
//           <div className={styles.callToAction}>
//             <p>
//               If you have any questions regarding this project, feel free to
//               reach me directly or check out the GitHub page!
//             </p>
//           </div>
//           <div className={styles.callToActionBtnContainer}>
//             <a
//               href="mailto:rasmus.henriksen@live.dk"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button type="button" className={styles.getInTouchBtn}>
//                 Get in touch
//               </button>
//             </a>
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <button type="button" className={styles.getInTouchBtn}>
//                 GitHub
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;
