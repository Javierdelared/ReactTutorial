import { useState, useEffect } from 'react'
import {Heading, Text, Button, Container, Center, Highlight, Mark} from '@chakra-ui/react';

function App() {
  const COUNT_KEY_NAME = "count";
  const retrieveCount = () => Number(localStorage.getItem(COUNT_KEY_NAME));
  const [count, setCount] = useState(retrieveCount());
  const incrementCount = () => setCount(count + 1)

  useEffect(() => {
    localStorage.setItem(COUNT_KEY_NAME, count);
  }, [count]);

  return (
    <>
      <Container
        maxW={['full', 'container.lg']}
        mt={4}
        mb={4}
      >
        <Center>
          <Heading lineHeight='tall'>
            <Highlight
              query='Stranger'
              styles={
              {
                px: '2',
                py: '1',
                rounded: 'full',
                bg: 'red.100'
              }
            }
            >
              Welcome Stranger!
            </Highlight>
          </Heading>
        </Center>
        <Center>
          <Text
            fontSize='lg'
            color='tomato'
            fontStyle='italic'
          >
            This is my beautiful React Tutorial
          </Text>
        </Center>
        <Center mb={2} fontWeight='bold'>
          <Mark
            bg='black'
            color='white'
            fontSize='lg'
            fontWeight='bold'
            fontFamily='NewYork'
            p='1'
          >
            Count is {count}
          </Mark>
        </Center>
        <Center>
          <Button
            size='md'
            height='48px'
            widht='200px'
            border='2px'
            variant='solid'
            fontStyle='italic'
            onClick={() => incrementCount()}
          >
            Count Me!
          </Button>
        </Center>
      </Container>
    </>
  )
}

export default App
