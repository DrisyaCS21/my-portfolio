import React from "react";
import { useState } from "react";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const commands = {
    help: "Available: about, skills, projects, clear",
    about: "I am a full-stack developer 🚀",
    skills: "React, Node.js, MongoDB",
    projects: "QR Menu System, Portfolio Website",
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = input.toLowerCase();

      if (cmd === "clear") {
        setOutput([]);
      } else {
        setOutput((prev) => [
          ...prev,
          `> ${cmd}`,
          commands[cmd] || "Command not found",
        ]);
      }

      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-5 font-mono">
      <div className="mb-4">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <input
        className="bg-black border-none outline-none text-green-400 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="type help..."
      />
    </div>
  );
}

export default Terminal;