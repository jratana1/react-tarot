// import React from "react";
// import { connect } from "react-redux";
// import { addCount } from "../actions/counterAction";

// export const Count = ({ counter, addCount }) => {
//   return (
//     <main>
//       <div>Count: {counter}</div>
//       <button onClick={addCount}>Add to count</button>
//     </main>
//   );
// };

// const mapStateToProps = state => ({
//   counter: state.counter
// });

// const mapDispatchToProps = { addCount };

// export default connect(mapStateToProps, mapDispatchToProps)(Count);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../actions/counterAction";

export default function Count() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count.count}</div>
      <button onClick={() => dispatch(addCount())}>Add to count</button>
    </main>
  );
};

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// class Count extends Component {

//   handleOnClick() {
    
//     this.props.dispatch({
//       type: 'INCREMENT',
//     });
//   }
  
//   render() {
//     return (
//       <div>
//         <button onClick={(event) => this.handleOnClick()}>
//           Click
//         </button>
//         <p>{this.props.count.count}</p>
//       </div>
//     );
//   }
// };

// const mapStateToProps = (state) => {
//   return { count: state.count };
// };

// export default connect(mapStateToProps)(Count);