import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Repository } from "../../store/ducks/repositories/types";
import * as RepositoriesActions from "../../store/ducks/repositories/actions";
import { ApplicationState } from "../../store";

interface StateProps {
  repositories: Repository[];
}
interface DispatchProps {
  loadRequest(): void;
}
type Props = StateProps & DispatchProps;

function index(props: Props) {
  const { repositories, loadRequest } = props;
  loadRequest();
  return <ul>{repositories.map((repository) => repository.name)}</ul>;
}

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});
const mapDispatchProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(index);
