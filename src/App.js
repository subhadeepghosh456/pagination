import "./App.css";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
export default function App() {
  return (
    <div>
      <Header />
      <Blog />
      <Pagination />
    </div>
  );
}
