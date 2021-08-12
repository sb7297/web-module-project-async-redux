import { updateForm } from "../actions/formActions";
import { sendText } from "../actions/apiActions";
import { connect } from 'react-redux';

const TextForm = (props) => {
  const { updateForm, formText, sendText } = props;
  return (<div className="flex flex-col items-center space-y-2">
    <textarea
    className="border-2 w-5/6"
    value={formText}
    onChange={(ev) => updateForm(ev.target.value)}></textarea>
    <input className="w-1/2 p-1" type="button" value="Analyze" onClick={() => sendText(formText)} />
  </div>);
}

const mapStateToProps = (state) => {
  return {
    formText: state.formReducer.formText
  };
}

export default connect(mapStateToProps, { updateForm, sendText })(TextForm);