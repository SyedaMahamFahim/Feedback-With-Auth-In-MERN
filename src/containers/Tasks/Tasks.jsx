import React from "react";
import { Flex } from "@chakra-ui/react";
import { Card, Loader } from "../../components";

const Tasks = ({ loading, allTasks }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Flex
          wrap={"wrap"}
          align="center"
          justify="center"
          mt={{ base: "2rem", lg: "5rem" }}
          m={{ md: "1.5rem", lg: "2rem" }}
        >
          {allTasks?.map((task, index) => {
            return (
              <Card
                key={index}
                title={task.title}
                description={task.description}
                status={task.status}
                createdAt={task.createdAt}
                index={index}
              />
            );
          })}
        </Flex>
      )}

      {console.log("allTasks", allTasks)}
    </>
  );
};

export default Tasks;
