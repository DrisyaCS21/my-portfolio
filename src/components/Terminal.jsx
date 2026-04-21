import { useState } from "react";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);

  const commands = {
    help: "Available commands: about, skills, projects, clear",
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
        setOutput([...output, `> ${cmd}`, commands[cmd] || "Command not found"]);
      }

      setInput("");
    }
  };

  return (
    <div style={{ background: "#000", color: "#0f0", padding: "20px" }}>
      <div>
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <input
        style={{ background: "black", color: "lime", border: "none" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleCommand}
        placeholder="type help..."
      />
    </div>
  );
}

export default Terminal;