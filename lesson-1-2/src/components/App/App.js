import { Container, Header, } from './App.styled';
import PageTitle from '../PageTitle/PageTitle';
import EventBoard from '../EventBoard/EventBoard';

import events from '../../temp/upcoming-events.json';

function App() {
  return (
    <Container>
      <Header></Header>

      <PageTitle title="24th Core Worlds Coalition Conference" />
      <EventBoard events={events} />
    </Container>
  );
}

export default App;