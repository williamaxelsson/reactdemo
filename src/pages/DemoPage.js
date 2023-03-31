import "../css/App.css";
import { useState } from "react";
import { ReusableButton } from '../components';
import { callEndpoint } from '../functions';
import { Box, HStack, VStack, Textarea, Input, Text, Divider } from "@chakra-ui/react";

export default function DemoPage() {
  const [response, setResponse] = useState("Function output will be displayed here");
  const [input, setInput] = useState("");

  
  const customFunction = async (n) => [...Array( parseInt(n) )]
  .map( (_, i) => `${++i % 3?"":"Fizz"}${(i%5?"":"Buzz")}${( i%3 && i%5)?i: ""}`);
  

  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <VStack alignItems="flex-end">
          <HStack>
              <Text>Function:</Text>
              <Textarea disabled={true} borderRadius="md" value={customFunction.toString()} px="20" size="xl" fontSize="sm"/>
          </HStack>
          <Divider/>
          <HStack>
            <Text>Input:</Text>
            <Input borderRadius="md" value={input} onChange={(e) => setInput(e.target.value)} size='sm' />
            <ReusableButton text="Test this Function" customFunction={ async () => setResponse( await customFunction(input)) }/>
          </HStack>
          <Divider/>
          <HStack>
          <Text>Output:</Text>
          <Textarea disabled={true} borderRadius="md" value={response} onChange={(e) => setResponse(e.target.value)} px="20" size="xl" fontSize="sm" />
          </HStack>
          </VStack>
        </Box>
      </header>
    </div>
  );
}
