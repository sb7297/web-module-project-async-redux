import { connect } from 'react-redux';

const Response = props => {
  const res = props.sentiments.result;

  return (<>
    <div>{res ? res.polarity : ""}</div>
    <div>{res ? res.type : ""}</div>
  </>);
}

const mapStateToProps = state => {
  return {
    sentiments: state.apiReducer.sentiments
  }
}

export default connect(mapStateToProps, {})(Response);