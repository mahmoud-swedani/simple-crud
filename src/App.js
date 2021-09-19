import './App.css';
import { ViewItem } from './component/ViewItem/ViewItem';
import AddItem from './component/AddItem/AddItem';
function App() {
  return (
    <section className="App">
      <h2>Simple Crud App</h2>
      <AddItem />
      <ViewItem />
    </section>
  );
}

export default App;
