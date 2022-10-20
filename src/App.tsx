import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Skills } from "./types/Skill";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  ChakraProvider,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

function App() {
  const targetUser: Array<Skills> = [
    {
      level1: "Zoo",
      level2: "react",
      level3: "Recoil",
      level: 1,
      content: "recoil is statement library",
    },
    {
      level1: "App",
      level2: "zoo",
      level3: "zoo",
      level: 1,
      content: "recoil is statement library",
    },
    {
      level1: "App",
      level2: "zoo",
      level3: "Recoil",
      level: 1,
      content: "recoil is statement library",
    },
    {
      level1: "App",
      level2: "react",
      level3: "Recoil",
      level: 1,
      content: "recoil is statement library",
    },
  ];

  const sortedTargetUser = targetUser.sort((a, b) => {
    if (a.level1 == b.level1) {
      if (a.level2 == b.level2) {
        if (a.level3 > b.level3) {
          return 1;
        } else {
          return -1;
        }
      } else {
        if (a.level2 > b.level2) {
          return 1;
        } else {
          return -1;
        }
      }
    } else {
      if (a.level1 > b.level1) {
        return 1;
      } else {
        return -1;
      }
    }
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="App">
      <ChakraProvider>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>aaa</ModalBody>

            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
              <Button>Test</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Sample Table</TableCaption>
            <Thead>
              <Tr>
                <Th>id</Th>
                <Th>level1</Th>
                <Th>level2</Th>
                <Th>level3</Th>
                <Th>level</Th>
                <Th>content</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedTargetUser.map((skill, index) => {
                return (
                  <Tr key={index}>
                    <Td>{index}</Td>
                    <Td>
                      <div
                        className={
                          index !== 0
                            ? sortedTargetUser[index - 1].level1 == skill.level1
                              ? "noDisplay"
                              : "display"
                            : "display"
                        }
                      >
                        {skill.level1}
                      </div>
                    </Td>
                    <Td>
                      <div
                        className={
                          index !== 0
                            ? sortedTargetUser[index - 1].level2 == skill.level2
                              ? "noDisplay"
                              : "display"
                            : "display"
                        }
                      >
                        {skill.level2}
                      </div>
                    </Td>
                    <Td>{skill.level3}</Td>
                    <Td>{skill.level}</Td>
                    <Td>{skill.content}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </ChakraProvider>
    </div>
  );
}

export default App;
