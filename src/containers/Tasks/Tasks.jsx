import React from "react";
import { Flex ,Box} from "@chakra-ui/react";
import { Card, Loader} from "../../components";

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
          { allTasks?.map((task, index) => {
            return (
              <Box key={index}>
              <Card
                title={task.title}
                description={task.description}
                status={task.status}
                createdAt={task.createdAt}
                index={index}
              />
              </Box>
            );
          })}
        </Flex>
      )}

      {console.log("allTasks", allTasks)}
    </>
  );
};

export default Tasks;
