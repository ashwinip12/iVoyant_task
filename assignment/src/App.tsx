// // src/App.tsx
// import React from 'react';
// import { Provider } from 'react-redux';
// import { Store } from './redux/store';
// // import ContentForm from './component/ContentForm';
// // import ContentList from './component/ContentList';
// import 'antd'; // Import Ant Design styles
// import './App.css';
// import ContentManager from './component/ContentManager';

// const App: React.FC = () => {
//   return (
//     <Provider store={Store}>
//       <div className="app">
//         <h1>Todo</h1>
//         {/* <ContentForm />
//         <ContentList /> */}
//         <ContentManager/>
//       </div>
//     </Provider>
//   );
// };

// export default App;

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import ContentForm from './component/ContentForm';
// // import ContentList from './component/ContentList';
// // import SuccessPage from './component/SucessPage';


// // const App: React.FC = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<ContentForm />} />
// //         <Route path="/list" element={<ContentList />} />
// //         <Route path="/success" element={<SuccessPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContentManager from './component/ContentManager';
import SuccessPage from './component/SuccessPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContentManager />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
