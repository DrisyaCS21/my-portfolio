import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Terminal() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [bootDone, setBootDone] = useState(false);

  const lastLogin = new Date().toLocaleString();

  // Linux-style boot messages
  const bootSequence = [
    "Booting DRISYA OS 1.0...",
    "Loading kernel modules...",
    "Mounting filesystem...",
    "Starting network services...",
    "Initializing UI shell...",
    "",
    "Welcome to DRISYA OS 1.0 (React Shell)",
    `Last login: ${lastLogin}`,
    "",
    "Type 'help' for available commands.",
    "",
  ];

  // ANIMATED BOOT
  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setHistory((prev) => [...prev, bootSequence[i]]);
      i++;

      if (i === bootSequence.length) {
        clearInterval(interval);
        setBootDone(true);
      }
    }, 250); // speed of boot animation

    return () => clearInterval(interval);
  }, []);

  // COMMANDS
  const commands = {
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
    whoami: "drisya - full stack developer 🚀",
  };

  const runCommand = (cmdRaw) => {
    const cmd = cmdRaw.trim().toLowerCase();

    if (cmd === "clear") {
      setHistory([]);
      return null;
    }

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

    return commands[cmd] || `command not found: ${cmd}`;
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && bootDone) {
      const result = runCommand(input);

      setHistory((prev) => [
        ...prev,
        `$ ${input}`,
        ...(result ? [result] : []),
      ]);

      setInput("");
    }
  };

  return (
    <div className="bg-black text-green-400 min-h-screen p-5 font-mono">

      {/* TERMINAL OUTPUT */}
      <div className="whitespace-pre-line mb-4">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {/* INPUT (only after boot finishes) */}
      {bootDone && (
        <div className="flex gap-2">
          <span>drisya@portfolio:~/home$</span>

          <input
            className="bg-black text-green-400 outline-none w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            autoFocus
          />
        </div>
      )}
    </div>
  );
}

export default Terminal;