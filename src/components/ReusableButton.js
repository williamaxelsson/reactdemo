

import { Box, Button } from '@chakra-ui/react'

const ReusableButton = ( { text, customFunction } ) => {

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'  
        >
            <Button colorScheme='blue' onClick={ customFunction } > {text} </Button> 
        </Box>
    );
}

export default ReusableButton;