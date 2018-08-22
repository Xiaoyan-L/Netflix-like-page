import {connect} from "react-redux";
import MovieList from "../MovieList";
import {setAdd} from "../../action/mylist";
import {setRemove} from "../../action/recommendations";

const mapStateToProps = state => ({
  movies: state.recommendations,
  header: "Recommendations"
});

const mapDispatchToProps = dispatch => ({
  handleClick: (id, movie) => {
    dispatch(setRemove(id));
    dispatch(setAdd(movie));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);