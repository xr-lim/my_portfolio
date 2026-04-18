import recycAI from "../assets/recycAI.png";
import ereport from "../assets/ereport.png";

const projects = [
    {
        title: "AI-Powered Smart Recycling System",
        image: recycAI,
        alt: "RecycAI project preview",
        description:
            "RecycAI is an intelligent recycling assistant designed to improve waste sorting accuracy using AI-powered image recognition. It helps users identify the correct disposal method in real-time, reducing contamination and promoting sustainable practices.",
        technologies: "Python, TensorFlow, Keras, Google Teachable Machine",
        link: "https://github.com/xr-lim/recycAI",
    },
    {
        title: "UTM E-Report System",
        image: ereport,
        alt: "UTM E-Report System project preview",
        description:
            "The UTM E-Report System is an integrated security information platform developed for Universiti Teknologi Malaysia (UTM) to enhance communication, awareness, and responsiveness between students, staff, and the security department. It includes a mobile app for real-time incident submissions and an admin web portal for managing, analyzing, and visualizing reports.",
        technologies: "Flutter, Dart, Firebase, Laravel, TensorFlow, YOLOv8n",
        link: "https://github.com/xr-lim/UTM_e-Report_System",
    },
];

function ProjectCard() {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <h1>Projects</h1>
            </div>

            <div className="projects-list">
                {projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-image">
                            <img src={project.image} alt={project.alt} />
                        </div>

                        <div className="project-content">
                            <h2>{project.title}</h2>

                            <p className="project-desc">{project.description}</p>

                            <p className="project-tech">
                                <strong>Technologies Used:</strong> {project.technologies}
                            </p>

                            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                                GitHub →
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ProjectCard
