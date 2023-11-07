import React from "react";
import classes from "./pagination.module.css";
import ReactPaginate from "react-paginate";
interface pageProps {
  forcepage: number;
  onChange: (value: any) => void;
  count: number;
}
export default function CustomPagination({
  forcepage = 0,
  onChange,
  count,
}: pageProps) {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        // onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={count}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeClassName={classes.activeicon}
        containerClassName={classes.pagecontainer}
        nextClassName={classes.nextbtn}
        previousClassName={classes.prebtn}
        previousLinkClassName={classes.links}
        nextLinkClassName={classes.links}
        // pageLinkClassName={classes.pages}
        pageClassName={classes.pages}
        forcePage={forcepage}
        onPageChange={onChange}
        // breakClassName={classes.pages}
      />
    </div>
  );
}
