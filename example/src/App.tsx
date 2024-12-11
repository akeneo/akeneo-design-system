import { Badge, Information, UsersIllustration } from "akeneo-design-system";

function App() {
  return (
    <>
      <Information
        illustration={<UsersIllustration />}
        title="Hello world"
      >
        This is an example of React App which leverage Akeneo Design System components
      </Information>
      <Badge level="primary">
        Primary
      </Badge>
      <Badge level="secondary">
        Secondary
      </Badge>
      <Badge level="tertiary">
        Tertiary
      </Badge>
      <Badge level="warning">
        Warning
      </Badge>
      <Badge level="danger">
        Danger
      </Badge>
    </>
  );
}

export default App;


