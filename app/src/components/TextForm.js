import { updateForm } from "../actions/formActions";
import { sendText } from "../actions/apiActions";
import { connect } from 'react-redux';

const TextForm = (props) => {
  const { updateForm, formText, sendText } = props;
  return (<>
    <textarea
    value={formText}
    onChange={(ev) => updateForm(ev.target.value)}></textarea>
    <input type="button" value="Submit" onClick={() => sendText(formText)} />
  </>);
}

const mapStateToProps = (state) => {
  return {
    formText: state.formReducer.formText
  };
}

export default connect(mapStateToProps, { updateForm, sendText })(TextForm);