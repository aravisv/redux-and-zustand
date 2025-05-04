//import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
//import { appStore } from "./redux/store";
import "./App.css";

// export function App() {
//   return (
//     <Provider store={appStore}>
//       <Header />
//       <Body />
//     </Provider>
//   );
// }

export function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}
