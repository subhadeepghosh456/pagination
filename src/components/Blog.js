import React, { useContext, useEffect } from "react";
import { AppContext } from "../cotext/AppContext";
import Spinner from "./spinner/Spinner";

const Blog = () => {
  const { loading, posts, handlePageChange, page } = useContext(AppContext);

  useEffect(() => {
    handlePageChange(page);
  }, [page]);

  return (
    <div className="">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No Post Found</div>
      ) : (
        posts.map((item) => (
          <div key={item.id} className="px-[20%]">
            <p className="text-xl font-bold">{item?.title}</p>
            <p>
              By <span className="font-bold">{item?.author}</span> on <span className="font-bold">{item?.category}</span>
            </p>
            <p>{item.content}</p>
            <p>
              Posted on <span className="font-serif font-bold">{item?.date}</span>
            </p>
            <div>
              {item.tags.map((tag, index) => (
                <span className="text-sm text-blue-950" key={index}>#{tag} </span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
