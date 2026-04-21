import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Terminal() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    "Welcome to Drisya Portfolio Terminal v1.0 (React)",
    "Type 'help' for commands",
    "",
  ]);

  // Your folder structure simulation
  const fileSystem = {
    help: `
Available commands:
ls
cd about
cd skills
cd projects
cd contact
clear
    `,

    ls: `
assets/
components/
App.jsx
main.jsx
index.css
    `,
  };

  const handleCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();

    // HELP
    if (cmd === "help") return fileSystem.help;

    // LS
    if (cmd === "ls") return fileSystem.ls;

    // NAVIGATION COMMANDS
    if (cmd === "cd about") {
      navigate("/about");
      return "→ opening about page...";
    }

    if (cmd === "cd skills") {
      navigate("/skills");
      return "→ opening skills page...";
    }

    if (cmd === "cd projects") {
      navigate("/projects");
      return "→ opening projects page...";
    }

    if (cmd === "cd contact") {
      navigate("/contact");
      return "→ opening contact page...";
    }

    // CLEAR SCREEN
    if (cmd === "clear") {
      setOutput([]);
      return null;
    }

    return "Command not found. Type 'help'";
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

      {/* Input Line */}
      <div className="flex">
        <span className="text-green-500">$</span>
        <input
          className="bg-black text-green-400 outline-none ml-2 w-full"
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