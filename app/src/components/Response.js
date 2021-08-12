import { connect } from 'react-redux';

const Response = props => {
  const res = props.sentiments.result;
  const polarity = res ? res.polarity : null;

  let classes = "text-center text-3xl ";
  if (polarity > 0) {
    classes += "text-green-500";
  } else if (polarity < 0) {
    classes += "text-red-500";
  }

  return (<div>
    <div className={classes}>{res ? res.polarity : ""}</div>
  </div>);
}

const mapStateToProps = state => {
  return {
    sentiments: state.apiReducer.sentiments
  }
}

export default connect(mapStateToProps, {})(Response);