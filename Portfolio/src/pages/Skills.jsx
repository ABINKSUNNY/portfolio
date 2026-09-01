// export default function Skills() {
//   return (
//     <section className="relative z-10 pt-28 px-6 max-w-5xl mx-auto">
//       <h2 className="text-3xl font-bold mb-6">Skills</h2>
      
      
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Software Testing</h3>
//           <p className="text-gray-400">Manual Testing, Functional Testing, Regression Testing, Smoke Testing, Sanity Testing,
//           Exploratory Testing, User Acceptance Testing (UAT)</p>
//         </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Programming</h3>
//           <p className="text-gray-400">Python</p>
//         </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Programming</h3>
//           <p className="text-gray-400">Python</p>
//         </div>

//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Frontend</h3>
//           <p className="text-gray-400">
//             HTML, CSS, React.js, Tailwind CSS,
//           </p>
//         </div>

//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Backend</h3>
//           <p className="text-gray-400">Django, FastAPI</p>
//         </div>

//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Database</h3>
//           <p className="text-gray-400">MySQL, PostgreSQL</p>
//         </div>

//         <div className="bg-gray-900 p-5 rounded-lg">
//           <h3 className="text-xl mb-2">Tools</h3>
//           <p className="text-gray-400">
//             VS Code, Postman, Jira, PyCharm, GitHub,
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



export default function Skills() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Software Testing */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Software Testing</h3>
          <p className="text-gray-400">
            Manual Testing, Functional Testing, Regression Testing,
            Smoke Testing, Sanity Testing, Exploratory Testing,
            User Acceptance Testing (UAT)
          </p>
        </div>

        {/* Programming */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Programming</h3>
          <p className="text-gray-400">
            Python, JavaScript
          </p>
        </div>

        {/* Frontend */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Frontend</h3>
          <p className="text-gray-400">
            HTML, CSS, React.js, Tailwind CSS
          </p>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Backend</h3>
          <p className="text-gray-400">
            Python, Node.js, Django, Django REST Framework (DRF), FastAPI
          </p>
        </div>

        {/* Database */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Database</h3>
          <p className="text-gray-400">
            MySQL, PostgreSQL
          </p>
        </div>

        {/* Testing & Development Tools */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Testing & Development Tools</h3>
          <p className="text-gray-400">
            Jira, Postman, Git/GitHub, Selenium
          </p>
        </div>

        {/* Development Tools */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Development Tools</h3>
          <p className="text-gray-400">
            PyCharm, VS Code, Kiro
          </p>
        </div>

        {/* Productivity */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Productivity</h3>
          <p className="text-gray-400">
            Microsoft Excel, Microsoft Word, Microsoft PowerPoint
          </p>
        </div>

        {/* Additional Skills */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Additional Skills</h3>
          <p className="text-gray-400">
            AI-Assisted Development, Rapid Prototyping, Vibe Coding
          </p>
        </div>

        {/* Soft Skills */}
        <div className="bg-gray-900 p-5 rounded-lg">
          <h3 className="text-xl mb-2">Soft Skills</h3>
          <p className="text-gray-400">
            Problem Solving & Analytical Thinking, Attention to Detail,
            Team Collaboration, Adaptability & Learning Agility,
            Technical Communication, Discipline & Responsibility
          </p>
        </div>

      </div>
    </section>
  );
}
