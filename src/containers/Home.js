import { connect } from "react-redux";

import Home from "../components/Home";

const mapStateToProps = state => {
  return {
    routes: state.routes
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
