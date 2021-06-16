import { useState } from "react";

function Search(props) {
  const [keyword,setKeyword] = useState('')

  const onChangeSearch = (e) => {
    const target = e.target
    const value = target.value
    setKeyword(value)
  }

  const onSearch = () => {
    props.onSearch(keyword)
  }

  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          className="form-control"
          name="keyword"
          type="text"
          placeholder="Nhập từ khóa"
          value={keyword}
          onChange={onChangeSearch}
        />
        <span className="input-group-btn"
          onClick={onSearch}
        >
          <button className="btn btn-primary">
            <span className="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    </div>
  );
}

export default Search;
