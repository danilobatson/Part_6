import {
  AnecdoteForm,
  Header,
  AnecdoteList,
  Notification,
} from './components/';

const App = () => {
  return (
    <div>
      <Header message='Anecdotes' />
      <AnecdoteList />
      <Header message='Create New' />
      <AnecdoteForm />
    </div>
  );
};

export default App;
