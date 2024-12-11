import { Badge, connectorTheme } from 'akeneo-design-system'
import { ThemeProvider } from 'styled-components';

function DummyTest() {
  return (
    <>
      <ThemeProvider theme={connectorTheme}>
        <Badge>Hello world</Badge>
      </ThemeProvider>
    </>
  )
}

export default DummyTest


