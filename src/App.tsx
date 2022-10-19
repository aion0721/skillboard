import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Skills } from "./types/Skill";

function App() {
  const targetUser: Skills = {
    level1: [
      {
        name: "level1",
        level2: [
          {
            name: "level2",
            level3: [
              { name: "testa", level: 2, content: "a" },
              { name: "testa", level: 2, content: "a" },
            ],
          },
        ],
      },
    ],
  };
  return (
    <div className="App">
      {targetUser.level1.map((level1) =>
        level1.level2.map((level2) =>
          level2.level3.map((skill) => (
            <p>
              {level1.name}-{level2.name}-{skill.name}
            </p>
          ))
        )
      )}
    </div>
  );
}

export default App;
