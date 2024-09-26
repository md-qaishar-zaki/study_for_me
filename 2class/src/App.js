import './App.css';
import ProjectSidebar from './Components/ProjectSidebar';
import NewProject from './Components/NewProject';
function App() {
  return (
    <div className="row">
      <div className="w-25">
        <ProjectSidebar />
      </div>
      <div className="w-75">
        <NewProject />
      </div>
    </div>
  );
}

export default App;
