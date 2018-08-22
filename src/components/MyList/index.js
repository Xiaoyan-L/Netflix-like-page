import {connect} from "react-redux";
import MovieList from "../MovieList";
import {setRemove} from "../../action/mylist";

const mapStateToProps = state => ({
  movies: state.mylist,
  header: "My List"
});

const mapDispatchToProps = dispatch => ({
  handleClick: id => { dispatch(setRemove(id)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
