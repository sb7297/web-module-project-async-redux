import { updateForm } from "../actions/formActions";
import { connect } from 'react-redux';

const TextForm = (props) => {
  return (
    <textarea
    value={props.formText}
    onChange={(ev) => props.updateForm(ev.target.value)}></textarea>
  );
}

const mapStateToProps = (state) => {
  return {
    formText: state.formReducer.formText
  };
}

export default connect(mapStateToProps, { updateForm })(TextForm);