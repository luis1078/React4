import './App.css';
import Logo from './components/Logo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="tasks-app">
        <Logo/>
        <div className='main-tasks-list'>
          <h1 className='main-title'> My tasks </h1>
          <TaskList/>
        </div>
    </div>
  );
}

export default App;
