import React, { useContext } from "react";
import { AppContext } from "../cotext/AppContext";

const Pagination = () => {
  const { page, setPage, totalpages } = useContext(AppContext);
  return (
    <div className="px-[20%] w-full flex justify-between my-8">
      <div>
        {page > 1 && (
          <button
            className="mr-9 bg-slate-500 rounded-sm px-2 text-white"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
        )}

        {page < totalpages && (
          <button
            className="mr-9 bg-slate-500 rounded-sm px-2 text-white"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div>
      <div>
        <p>
          Page <span className="font-bold">{page}</span> of{" "}
          <span className="font-bold">{totalpages}</span>
        </p>
      </div>
    </div>
  );
};

export default Pagination;
