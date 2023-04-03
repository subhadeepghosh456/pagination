import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalpages, setTotalpages] = useState(null);

  async function fetchBlogPost(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const data = await result.json();
      setPosts(data.posts);
      setPage(data.page);
      setTotalpages(data.totalPages);
    } catch (error) {
      console.log("error");
    }

    setLoading(false);
  }

  function handlePageChange(page){
    fetchBlogPost(page)
  }

  const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalpages,
    setTotalpages,
    fetchBlogPost,
    handlePageChange
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
