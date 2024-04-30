import { ThemeProvider, BaseStyles, PageLayout, Box, ButtonGroup, Button } from '@primer/react';
import { Blankslate } from '@primer/react/experimental';
import { PackageIcon, FileIcon, TerminalIcon, QuestionIcon } from '@primer/octicons-react';

const redirectLinks = [
  'https://github.com/microsoft/Windows-Containers/issues',
  'https://github.com/microsoft/Windows-Containers/issues',
  'https://github.com/microsoft/Windows-Containers/issues',
];

function App() {
  return (
    <ThemeProvider>
      <BaseStyles>
        <PageLayout>
          <PageLayout.Content>
            <Box id='blankslate-base' sx={{ borderColor: 'fg.muted'}}>
              <Blankslate id='blankslate-wrapper'>
                <Blankslate.Visual>
                  <PackageIcon size='medium' />
                </Blankslate.Visual>
                <Blankslate.Heading>React + Windows Containers</Blankslate.Heading>
                <Blankslate.Description>
                  This is a starter template for a React Web App running in a Windows Container. 
                  You can modify this application and its source code to suit your needs. Check 
                  the documentation for more information on how to build, run, and manage your 
                  Windows Container.
                </Blankslate.Description>
                <ButtonGroup>
                  <Button 
                    leadingVisual={FileIcon} 
                    onClick={() => window.location.href=redirectLinks[0]}
                  >
                    Docs
                  </Button>
                  <Button 
                    leadingVisual={TerminalIcon} 
                    onClick={() => window.location.href=redirectLinks[1]}
                  >
                    Source Code
                  </Button>
                  <Button 
                    leadingVisual={QuestionIcon} 
                    onClick={() => window.location.href=redirectLinks[2]}
                  >
                    Get Help
                  </Button>
                </ButtonGroup>
                <Blankslate.SecondaryAction href={redirectLinks[2]}>
                  Report problems or feedback
                </Blankslate.SecondaryAction>
              </Blankslate> 
            </Box>
          </PageLayout.Content>
        </PageLayout>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App;
