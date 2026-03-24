export default function About() {
  return (
    <section className="relative z-10 pt-28 pb-4 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Intro */}
      <p className="text-gray-400 leading-relaxed mb-8">
      I am a detail-oriented and motivated MCA graduate with strong expertise in full-stack web development. 
      I specialize in building scalable and responsive web applications using Python, Django, React, and RESTful APIs, 
      with solid experience in SQL and database management. 

      I have hands-on experience developing dynamic user interfaces, implementing backend business logic, 
      and optimizing database operations. 

      I am proficient in problem-solving, debugging, writing clean and maintainable code, 
      and adapting quickly to new technologies. 

  I am committed to continuous learning and delivering reliable, high-quality technical solutions.
</p>

      {/* Personal Info */}
      <div className="bg-gray-900 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

        <ul className="space-y-2 text-gray-400">
          <li>
            <span className="text-white font-medium">Name:</span> Abin Sunny
          </li>
          <li>
            <span className="text-white font-medium">Location:</span> Wayanad, Kerala, India
          </li>
          <li>
            <span className="text-white font-medium">Email:</span> abinkalarikkal@gmail.com
          </li>
          <li>
            <span className="text-white font-medium">Phone:</span> +91 7592991511
          </li>
          <li>
            <span className="text-white font-medium">Languages:</span> English, Malayalam, Tamil, Kannada
          </li>
        </ul>
      </div>

      {/* Qualifications */}
      <div className="bg-gray-900 p-6 mb-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Qualifications</h3>

        <div className="space-y-5">
          <div>
            <h4 className="text-lg font-medium">
              Master of Computer Application (MCA)
            </h4>
            <p className="text-gray-400">
              Centre for Computer Science & Information Technology Vadakara<br />
              Calicut University (2023 – 2025)
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium">
              Bachelor of Computer Application  (BCA)
            </h4>
            <p className="text-gray-400">
              SJB college of Management Studies, Kengeri, Bangalore<br />
              Bangalore University (2019 – 2022)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
