import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Terminal() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  // ✅ dynamic last login
  const lastLogin = new Date().toLocaleString();

  // Boot sequence
  useEffect(() => {
    const bootSequence = [
      "Welcome to DRISYA OS 1.0 (React Shell)",
      `Last login: ${lastLogin}`,
      "",
      "Type 'help' for available commands.",
      "",
    ];

    let i = 0;

    const interval = setInterval(() => {
      setOutput((prev) => [...prev, bootSequence[i]]);
      i++;

      if (i === bootSequence.length) {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  // File system simulation
  const fileSystem = {
    help: `
Available commands:
ls
cd about
cd skills
cd projects
cd contact
clear
whoami
    `,

    ls: `
assets/
components/
about/
skills/
projects/
contact/
    `,
  };

  const handleCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();

    // HELP
    if (cmd === "help") return fileSystem.help;

    // WHOAMI (personality touch)
    if (cmd === "whoami") {
      return "drisya - full stack developer | MERN | React enthusiast 🚀";
    }

    // LS
    if (cmd === "ls") return fileSystem.ls;

    // NAVIGATION
    if (cmd === "cd about") {
      navigate("/about");
      return "opening /about ...";
    }

    if (cmd === "cd skills") {
      navigate("/skills");
      return "opening /skills ...";
    }

    if (cmd === "cd projects") {
      navigate("/projects");
      return "opening /projects ...";
    }

    if (cmd === "cd contact") {
      navigate("/contact");
      return "opening /contact ...";
    }

    // CLEAR
    if (cmd === "clear") {
      setOutput([]);
      return null;
    }

    return `command not found: ${cmd}`;
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      const result = handleCommand(input);

      setOutput((prev) => [...prev, `$ ${input}`]);

      if (result) {
        setOutput((prev) => [...prev, result]);
      }

      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-400 min-h-screen p-5 font-mono">

      {/* Output */}
      <div className="whitespace-pre-line mb-3">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* Prompt UI */}
      <div className="flex items-center gap-2">
        <span className="text-green-500">drisya@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~/home</span>
        <span className="text-white">$</span>

        <input
          className="bg-black text-green-400 outline-none w-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="type command..."
          autoFocus
        />
      </div>

    </div>
  );
}

export default Terminal;