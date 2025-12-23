import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import PlayerBar from "./components/PlayerBar";

export default function App() {
  return (
    <Provider store={appStore}>
      <div className="h-dvh bg-black text-white">
        <Header />
        <Body />
        <PlayerBar />
      </div>
    </Provider>
  );
}
