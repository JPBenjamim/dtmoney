import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <>
      <Header />
     <Dashboard />
      <GlobalStyle />
    </>
  );
}