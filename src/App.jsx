import Header from "./components/Header";
import Body from "./components/Body";
import { useDispatch } from "react-redux";
import { deFocus } from "./utils/focusTrack";
import Footer from "./components/Footer";

export default function App() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(deFocus());
      }}
      className="h-dvh bg-black text-white"
    >
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
