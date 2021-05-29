import React from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
function Navigation() {
  return (
    <nav aria-label="navigation mt-2">
      <ul className="pagination-ul justify-content-center py-2">
        <li>
          <button className="btn pagination-item-root panigation-disabel">
            <ChevronLeft />
          </button>
        </li>
        <li>
          <button className="btn btn-secondary pagination-item-root">1</button>
        </li>
        <li>
          <button className="btn pagination-item-root panigation-disabel">
            <ChevronRight />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
