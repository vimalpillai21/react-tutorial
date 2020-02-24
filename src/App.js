import React from 'react';
// import Comp from './components/Greet/Greet';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome/Welcome';
// import Hello from './components/Hello/Hello';
// import Message from './components/Message/Message';
// import Counter from './components/Counter/Counter';
// import FunctionClick from './components/FunctionClick/FunctionClick';
// import EventBind from  './components/EventBind/EventBind';
// import FileUpload from './components/FileUpload/FileUpload';
// import API from './components/ReactComponentAPI/API';
// import DomMan from  './components/DomMan/DomMan';
// import Event from './components/EventTrainer/Event';
// import FormValid from './components/FormValid/FormValid';
// import FormValid2 from './components/FormValid/FormValid2';
// import ClassClick from './components/ClassClick/ClassClick';
// import ParentComponent from './components/ParentComponent/ParentComponent';
// import UserGreeting from './components/UserGreeting/UserGreeting';
// import Stylesheet from './components/StyleApp/Stylesheet';
// import Inline from './components/StyleApp/Inline';
// import LifeCycleA from './components/LifeCycleHooks/LifeCycleA';
// import Fragment from './components/FragmentDemo/Fragment';
// import Table from './components/FragmentDemo/Table';
// import ParentComp from './components/PureComponent/ParentComp';
// import NameList from './components/UserGreeting/NameList';
// import RefDemo from './components/RefDemo/RefDemo';
// import FocusInput from './components/Input/FocusInput';
// import Hero from './components/Hero/Hero';
// import ErrorBoundary from './components/Hero/ErrorBoundary';
// import FRParentInput from './components/ForwardRef/FRParentInput';
// import PortalDemo from './components/Portals/PortalDemo';
// import styles from './appStyles.module.css';
import ClickCounter from './Components2/ClickCounter/ClickCounter';
import './App.css';
import './appStyles.css';
import HoverCounter from './Components2/ClickCounter/HoverCounter';
import ClickCounterTwo from './Components2/ClickCounterTwo/ClickCounterTwo';
import HoverCounterTwo from './Components2/ClickCounterTwo/HoverCounterTwo';
import User from './Components2/ClickCounterTwo/User';


function App() {
  return (
    <div className="App">
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
      
      <Stylesheet primary={true} /> */}
      {/* <LifeCycleA /> */}
      {/* <PureComp /> */}
      {/* <ParentComp /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <Fragment /> */}
      {/* <Table /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <FileUpload /> */}
      {/* <API /> */}
      {/* <DomMan /> */}
      {/* <Event /> */}
      {/* <FormValid /> */}
      {/* <FormValid2 /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Comp /> */}
      {/* <Welcome name="Bruce" heroName="Batman">This is a children prop</Welcome>
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* <hr />  */}
      {/* <Greet /> */}
      {/* <Hello name="Bruce" heroName="Batman">This is a children prop</Hello>
      <Hello name="Clark" heroName="Superman"><button>Action</button></Hello>
      <Hello name="Diana" heroName="Wonder Woman" /> */}
      {/* <ClickCounter name="Hello" />
      <HoverCounter name="World" /> */}
      <ClickCounterTwo />
      <HoverCounterTwo />
      {/* <User name="Hello" /> */}
      <User render={ (isLoggedIn) => isLoggedIn ? "Logged In": " Logged out"} />
    </div>
  );
}

export default App;
