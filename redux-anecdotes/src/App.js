import {
  AnecdoteForm,
  Header,
  Notification,
  Filter,
} from './components/';

const App = () => {
  return (
    <div>
      <Header message='Anecdotes' />
      <Notification />
      <Filter />
      {/* <AnecdoteList /> */}
      <Header message='Create New' />
      <AnecdoteForm />
    </div>
  );
};

export default App;
