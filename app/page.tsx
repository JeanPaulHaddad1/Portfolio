import Image from "next/image";
import Skills from "./Skills";

export default function Home() {
  return (
    <div className="bg-darkgray">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-mainColor ">
          Hello, I am Jean-Paul
        </h1>
        <p className="text-base mt-2 text-white">Full stack developer</p>
        <a
  href="/Resume.pdf" // Replace with the actual path to your PDF
  target="_blank" // Opens in a new tab
  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-xs sm:text-sm md:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
>
  <svg
    className="mr-2 -ml-1 w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
  My Resume
</a>

        <input type="button" placeholder="Resume" className="mt-2" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center my-4 text-mainColor">
          Education
        </h2>
        <div className="w-11/12 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center bg-black text-orange-500 rounded-lg px-3 py-1">
              <svg
                className="h-5 w-5 mr-2 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 011-1h6a1 1 0 110 2h-1v1a1 1 0 11-2 0V3H7v1a1 1 0 11-2 0V3H6a1 1 0 01-1-1zM4 6a1 1 0 000 2h12a1 1 0 100-2H4zm1 4a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1zm-1 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              2021-2024
            </div>
            <div className="flex-1 text-right">Graduation</div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex items-center bg-black text-orange-500 rounded-lg px-3 py-1 mb-2">
              <svg
                className="h-5 w-5 mr-2 text-orange-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 011-1h6a1 1 0 110 2h-1v1a1 1 0 11-2 0V3H7v1a1 1 0 11-2 0V3H6a1 1 0 01-1-1zM4 6a1 1 0 000 2h12a1 1 0 100-2H4zm1 4a1 1 0 011-1h10a1 1 0 110 2H6a1 1 0 01-1-1zm-1 3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              {"Bachelor's Degree"}
            </div>
            <div className="font-bold text-xl">
              Bachelor in Computer Science
            </div>
          </div>
          <div className="flex items-center mb-2">
            <Image
              src="/logos/ua-logo.png"
              alt="University"
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <div>Anthonine University</div>
          </div>
          <div className="flex items-center">
            <Image
              src="/logos/location-logo.png"
              alt="Location"
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <div>Baabda, Lebanon</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center my-4 text-mainColor">
          Experience
        </h2>
        <div className="w-11/12 bg-gray-100 p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center bg-black text-orange-500 rounded-lg px-3 py-1">
              <h3 className="text-lg font-bold text-orange-500">
                “@Sams” Computer Repairs
              </h3>
            </div>
            <p className="bg-black text-orange-500 rounded-lg px-3 py-1 text-sm">
              Jun 2018 – Present
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Diagnosed and resolved hardware and software issues for various
              computer systems.
            </li>
            <li>
              Conducted in-depth troubleshooting to identify root causes of
              technical problems.
            </li>
            <li>Installed new hardware into computers.</li>
            <li>
              Communicated technical solutions to non-technical customers in a
              clear and understandable manner.
            </li>
            <li>
              Repaired and upgraded computer hardware components, including
              motherboards, processors, VGAs, and RAMs.
            </li>
            <li>Managed inventory of computer components and peripherals.</li>
            <li>
              Demonstrated effective time management skills in handling multiple
              repair tasks simultaneously.
            </li>
            <li>
              Met or exceeded repair deadlines to ensure timely delivery of
              services to clients.
            </li>
          </ul>
        </div>

        <div className="w-11/12 bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center bg-black text-orange-500 rounded-lg px-3 py-1">
              <h3 className="text-lg font-bold text-orange-500">
                Freelance Developer
              </h3>
            </div>
            <p className="bg-black text-orange-500 rounded-lg px-3 py-1 text-sm">
              April 2022 – Present
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Developed web applications utilizing C#, ASP.NET, and MVC
              frameworks, focusing on backend processes and user experience
              improvements.
            </li>
            <li>
              Designed and implemented dynamic and responsive mobile
              applications using React-Native, achieving cross-platform
              functionality.
            </li>
            <li>
              Developed desktop applications with JavaFX, enhancing application
              interfaces and user interaction features.
            </li>
            <li>
              Managed all aspects of the software development lifecycle (SDLC),
              including planning, design, development, testing, and deployment.
            </li>
            <li>
              Collaborated with clients to understand their requirements and
              delivered solutions that met their business needs.
            </li>
            <li>
              Adhered to best practices in coding and development to ensure
              high-quality software solutions and maintenance ease.
            </li>
          </ul>
        </div>

        <div className="w-11/12 bg-gray-100 p-4 mt-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center bg-black text-orange-500 rounded-lg px-3 py-1">
              <h3 className="text-lg font-bold text-orange-500">
                Enghouse networks internship
              </h3>
            </div>
            <p className="bg-black text-orange-500 rounded-lg px-3 py-1 text-sm">
              Jun 2023 – August
            </p>
          </div>
          <ul className="list-disc pl-5 text-sm">
            <li>
              Gained hands-on experience with CentOS OS, enhancing skills in
              Linux-based system management and operations.
            </li>
            <li>
              Learned to configure and manage MariaDB databases, focusing on
              optimizing performance and ensuring data security.
            </li>
            <li>
              Acquired practical knowledge in the setup and administration of
              CentOS environments, leading to improved system reliability.
            </li>
            <li>
              Trained under experienced database administrators, gaining
              insights into best practices in database management and system
              maintenance.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <Skills />
      </div>
      <div className="w-full mt-8 py-4 bg-gray-800 text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Contact Me</h2>
          <p className="mt-2">Email: <a href="mailto:jeanpaulHaddad123@hotmail.com" className="text-indigo-400">jeanpaulHaddad123@hotmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-indigo-400">+961 70506227</a></p>
        </div>
    </div>
  );
}
