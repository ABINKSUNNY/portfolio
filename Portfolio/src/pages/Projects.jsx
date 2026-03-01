

const projects = [
  {
    title: "Medigo",
    tech: "Django • MySQL  • HTML  • JavaScript ",
    description: `
    Medigo is a comprehensive healthcare web application that bridges the gap between patients and providers. 
    It integrates hospital search, specialist lookup, consultation booking, and medicine ordering into one intuitive platform. 
    Medigo ensures ease of use even for the elderly and digitally inexperienced, improving healthcare access, informed decision-making, and delivery for all.
    `,
    github: "https://github.com/ABINKSUNNY/medigo"
  },

  {
    title: "Beyond Bars",
    tech: "Django • MySQL  • HTML  • JavaScript",
    description: `
    Beyond Bars is a socially-driven e-commerce platform showcasing products crafted by inmates—from food and clothing to handicrafts, furniture, and agricultural goods. 
    Built on structured rehabilitation programs, it empowers incarcerated individuals with skills, purpose, and economic opportunity.
    `,
    github: "https://github.com/ABINKSUNNY/beyond_bars"
  },

  {
    title: "Booking App",
    tech: "Python • Django REST framework (DRF) • SQL • React • JavaScript",
    description: `
    Hotel Booking React App is a web application that lets users browse hotel rooms, select available dates, and book rooms online. 
    It includes user authentication, a room gallery with image sliders, and a personalized booking dashboard, built with React, React Router, and Axios.
    `,
    github: "https://github.com/ABINKSUNNY/Booking-App"
  },

];

export default function Projects() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="text-sm text-blue-400 mt-1">
              {project.tech}
            </p>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              🔗 View GitHub Repository
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
