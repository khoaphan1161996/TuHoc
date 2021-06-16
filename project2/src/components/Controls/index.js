import Search from '../Search'
import Sort from '../Sort'

function Controls(props) {
  return (
    <div className="row mt-15">
      {/* Search */}
        <Search onSearch={props.onSearch} />
      {/* Sort */}
        <Sort />
    </div>
  );
}

export default Controls;
