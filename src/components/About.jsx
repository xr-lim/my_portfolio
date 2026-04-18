import informal_pic from "../assets/informal_pic.png";
import resumePdf from "../assets/resume.pdf";

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.33 4.81-4.56 5.07.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.27 10.27 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z"
        />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.6 9.68h2.67V18H5.6V9.68Zm4.34 0H12.5v1.14h.04c.36-.68 1.23-1.4 2.53-1.4 2.7 0 3.2 1.84 3.2 4.22V18H15.6v-3.87c0-.92-.02-2.1-1.24-2.1-1.24 0-1.43.99-1.43 2.03V18H9.94V9.68Z"
        />
    </svg>
);

const EmailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M3 6.75A2.75 2.75 0 0 1 5.75 4h12.5A2.75 2.75 0 0 1 21 6.75v10.5A2.75 2.75 0 0 1 18.25 20H5.75A2.75 2.75 0 0 1 3 17.25V6.75Zm2.2-1.25 6.8 5.42 6.8-5.42H5.2Zm14.3 2.17-6.9 5.49a1 1 0 0 1-1.24 0L4.5 7.67v9.58c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V7.67Z"
        />
    </svg>
);

const DocumentIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
            fill="currentColor"
            d="M7 3.75A2.75 2.75 0 0 1 9.75 1h5.64c.73 0 1.43.29 1.94.81l3.86 3.86c.52.51.81 1.21.81 1.94v12.64A2.75 2.75 0 0 1 19.25 23h-9.5A2.75 2.75 0 0 1 7 20.25V3.75Zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v16.5c0 .69.56 1.25 1.25 1.25h9.5c.69 0 1.25-.56 1.25-1.25V8h-3.25A2.25 2.25 0 0 1 15 5.75V2.5H9.75Zm6.75.56v2.69c0 .41.34.75.75.75h2.69l-3.44-3.44ZM10 11a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 10 11Zm0 3.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 10 14.5Zm0 3.5a.75.75 0 0 1 .75-.75h3.25a.75.75 0 0 1 0 1.5h-3.25A.75.75 0 0 1 10 18Z"
        />
    </svg>
);

function About() {
    return (
        <section id="about" className="about">
            <div className="about-image">
                <img
                    src={informal_pic}
                    alt="Profile"
                />
            </div>

            <div className="about-text">
                <h1>Hi, I'm Xin Rou</h1>
                <h3>Software Engineering Student</h3>
                <p>
                    I am currently a 3rd-year Software Engineering student at Universiti Teknologi Malaysia (UTM) with an interest in frontend,
                    mobile app development, and building clean user-focused interfaces.
                </p>
                <p>
                    I enjoy solving real-world problems through my coding and software development capabilities.
                    I am also passionate about learning new technologies and knowledge in this fast-evolving AI era and I am enticing to explore and adapt to the changes.
                </p>

                <div className="contact-links">
                    <a href="https://github.com/xr-lim" target="_blank" rel="noreferrer">
                        <GithubIcon />
                        <span>GitHub</span>
                    </a>
                    <a href="https://www.linkedin.com/in/xr-lim/" target="_blank" rel="noreferrer">
                        <LinkedinIcon />
                        <span>LinkedIn</span>
                    </a>
                    <a href="mailto:xinroulim2004@gmail.com">
                        <EmailIcon />
                        <span>Email</span>
                    </a>
                    <a href={resumePdf} download="XinRou-Lim-Resume.pdf">
                        <DocumentIcon />
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
