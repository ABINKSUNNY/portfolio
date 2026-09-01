export default function About() {
  return (
    <section className="relative z-10 pt-28 pb-4 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      {/* Intro */}
      <p className="text-gray-400 leading-relaxed mb-8">
      Detail-oriented MCA graduate with hands-on experience in full-stack web development and a strong foundation in
      software testing. Proficient in Python, Django, React, RESTful APIs, SQL, and database-driven applications, with
      knowledge of manual testing, functional testing, regression testing, smoke testing, sanity testing, and exploratory
      testing. Experienced in analyzing application requirements, identifying issues, validating functionality, and working
      with web-based systems through academic, internship, and project experience. Demonstrates strong analytical
      problem-solving, attention to detail, disciplined work ethic, technical communication, and a willingness to learn and
      adapt in fast-paced QA and software development environments.
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
