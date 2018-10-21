import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       {props.isAdmin && <p>This is visible only to admins.</p>}
//       <WrappedComponent {...props}/>
//     </div>
//   );
// };

// const AdminInfo = withAdminWarning(Info);

const Hoc = (SubComponent) => {
  return (props) => (
  <div>
    <h1>HOC Header</h1>
    {props.isAuthenticated ? <SubComponent {...props}/> : <p>Please login to see the info</p>}
  </div>
  );
};

const AdminInfo = Hoc(Info);

ReactDOM.render(<AdminInfo  isAuthenticated={false} info='These are the details' />, document.getElementById('app'));