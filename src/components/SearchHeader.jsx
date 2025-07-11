import "../assets/css/Header.css";

function SearchHeader() {
  return (
    <header id="header" style={{ height: "332px" }}>
      <div className="container ps-0">
        <div
          className="d-flex align-items-center justify-content-start m-0 p-0"
          style={{ height: "332px" }}
        >
          <div className="content-left" style={{ width: "400px" }}>
            <h1>Curated jobs from all around the glob</h1>
            <p>Search, like, get hired faster and smarter</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SearchHeader;
