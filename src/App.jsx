// import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Route, Routes} from "react-router-dom";
import { Provider} from "react-redux";
import { store } from "./utils/appStore";
function App() {
 


  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
    </Provider>
  );
}

export default App;
