import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFilePdf,
  FaDownload
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative z-10 pt-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      {/* Contact Details */}
      <div className="bg-gray-900 p-6 rounded-lg space-y-4 text-gray-400 mb-8">
        <p className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400" />
          <a
            href="mailto:jankarthik6@gmail.com"
            className="text-blue-400"
          >
            abinkalarikkal@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-3">
          <FaPhoneAlt className="text-green-400" />
          <span className="text-white">
            +91 7592991511
          </span>
        </p>

        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-400" />
          <span className="text-white">
            Wayanad, Kerala, India
          </span>
        </p>
      </div>

      {/* CV Section */}
      <div className="bg-gray-900 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">
          Curriculum Vitae
        </h3>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* View CV */}
          <a
            href="/ABIN fs.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 justify-center bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <FaFilePdf className="text-red-500" />
            View CV
          </a>

          {/* Download CV */}
          <a
            href="/ABIN fs.pdf"
            download
            className="flex items-center gap-3 justify-center bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">
          Connect with me
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href="https://www.instagram.com/abinkalarikkal?igsh=MXF5MnRjNWNnam5hMQ=="
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-pink-400"
          >
            <FaInstagram size={22} />
            Instagram
          </a>

          <a
            href="http://www.linkedin.com/in/abin-sunny-k21"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-400"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

          {/* <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 text-gray-400 hover:text-blue-500"
          >
            <FaFacebook size={22} />
            Facebook
          </a> */}
        </div>
      </div>
    </section>
  );
}
