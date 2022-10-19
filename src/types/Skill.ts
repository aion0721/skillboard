export type Skills = {
  level1: Array<level1>;
};

type level1 = {
  name: string;
  level2: Array<level2>;
};

type level2 = {
  name: string;
  level3: Array<skillItem>;
};

type skillItem = {
  name: string;
  level: number;
  content: string;
};

const UserA: skillItem = {
  name: "test",
  level: 1,
  content: "aaa",
};

const UserB: level2 = {
  name: "test",
  level3: [
    { name: "testa", level: 2, content: "a" },
    { name: "testa", level: 2, content: "a" },
  ],
};

const UserC: level1 = {
  name: "test",
  level2: [
    {
      name: "test",
      level3: [
        { name: "testa", level: 2, content: "a" },
        { name: "testa", level: 2, content: "a" },
      ],
    },
  ],
};

const targetUser: Skills = {
  level1: [
    {
      name: "test",
      level2: [
        {
          name: "test",
          level3: [
            { name: "testa", level: 2, content: "a" },
            { name: "testa", level: 2, content: "a" },
          ],
        },
      ],
    },
  ],
};
