import logo from "../logo.svg";
import "../css/App.css";
import { useState } from "react";
import { ReusableButton } from '../components';
import { callEndpoint } from '../functions';
import { Box, HStack, VStack, Textarea } from "@chakra-ui/react";

export default function HomePage() {
  const [response, setResponse] = useState("Api response will be displayed here");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Box>
          <VStack>
          <HStack>
            <ReusableButton text="Test Express API" customFunction={ async () => setResponse( await callEndpoint('GET', 'http://localhost:5000/users/test'))}/>
            <ReusableButton text="Test ASP.NET API" customFunction={ async () => setResponse( await callEndpoint('GET', 'http://localhost:5165/weatherforecast'))}/>
          </HStack>
          <Textarea value={response} onChange={(e) => setResponse(e.target.value)} />
          </VStack>
        </Box>
      </header>
    </div>
  );
}
