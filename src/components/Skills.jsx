import {
    SiCplusplus,
    SiCss,
    SiFirebase,
    SiFlutter,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiLaravel,
    SiMysql,
    SiOpenjdk,
    SiPhp,
    SiPostman,
    SiPython,
    SiReact,
    SiSpringboot,
    SiTensorflow,
} from "react-icons/si";

const skillGroups = [
    {
        title: "Languages",
        skills: [
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "Python", icon: SiPython, color: "#3776AB" },
            { name: "Java", icon: SiOpenjdk, color: "#ED8B00" },
            { name: "HTML", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS", icon: SiCss, color: "#1572B6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "PHP", icon: SiPhp, color: "#777BB4" },
            { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        ],
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
            { name: "React Native", icon: SiReact, color: "#61DAFB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
        ],
    },
    {
        title: "Technologies",
        skills: [
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        ],
    },
];

function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-header">
                <h1>Skills</h1>
                <p>
                    A quick snapshot of the languages, frameworks, and tools I have experience with.
                </p>
            </div>

            <div className="skills-groups">
                {skillGroups.map((group) => (
                    <article className="skills-group-card" key={group.title}>
                        <h2>{group.title}</h2>
                        <div className="skills-grid">
                            {group.skills.map((skill) => (
                                <div className="skill-icon-card" key={skill.name}>
                                    <div className="skill-icon" aria-hidden="true">
                                        <skill.icon style={{ color: skill.color }} />
                                    </div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills
