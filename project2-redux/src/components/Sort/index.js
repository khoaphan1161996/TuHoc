function Sort() {
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sắp xếp
          <span className="fa fa-caret-square-o-down ml-5"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li>
            <a role="button" className="sort_selected">
              <span className="fa fa-sort-alpha-asc pr-5">Tên A-Z</span>
            </a>
          </li>
          <li>
            <a role="button">
              <span className="fa fa-sort-alpha-asc pr-5">Tên Z-A</span>
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li>
            <a role="button">Trạng thái kích hoạt</a>
          </li>
          <li>
            <a role="button">Trạng thái ẩn</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
