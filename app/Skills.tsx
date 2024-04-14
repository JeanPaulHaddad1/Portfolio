import Image from "next/image";
export default function Skills() {
  return (
    <div className="w-11/12 p-4 rounded-lg ">
      <h2 className="text-2xl font-bold text-center mb-4 text-mainColor">
        Technologies I Use
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center bg-white text-black rounded-lg px-3 py-2 w-auto"
          >
            <img
              src={`/logos/${skill.logo}`}
              alt={skill.name}
              style={{ width: 25, height: 25 }}
            />
            <span className="ml-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Define your skills and their corresponding logos
const skills = [
  { name: "C", logo: "c-logo.png" },
  { name: "C++", logo: "cpp-logo.png" },
  { name: "Java", logo: "java-logo.png" },
  { name: "JavaFX", logo: "javafx-logo.png" },
  { name: "HTML", logo: "html-logo.png" },
  { name: "JavaScript", logo: "javascript-logo.png" },
  { name: "CSS", logo: "css-logo.png" },
  { name: "React", logo: "react-logo.png" },
  { name: "React Native", logo: "react-logo.png" },
  { name: "SQL", logo: "sql-logo.png" },
  { name: "PL/SQL", logo: "plsql-logo.png" },
  { name: "C#", logo: "csharp-logo.png" },
  { name: "ASP.NET", logo: "aspnet-logo.png" },
  { name: "Next.js", logo: "nextjs-logo.png" },
  { name: "CentOS", logo: "centos-logo.png" },
  { name: "Bash Scripting", logo: "bash-logo.png" },
  { name: "Laravel", logo: "laravel-logo.png" },
];
