import './app.css';

function App() {
  const name = 'elon';
  return (
    <>
      <h1>Hello :)</h1>;
      {name && <h1>Hello! {name}</h1>}
    </>    
  );
}

export default App;
