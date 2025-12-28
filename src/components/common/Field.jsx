import React from "react";

const Field = ({ label, children, htmlFor, error }) => {
  const id = htmlFor || getChildrenId(children);
  return (
    <div className="form-control">
      {label && (
        <label htmlFor={id} className="auth-label">
          {label}
        </label>
      )}
      {children}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// const getChildrenId = (children) => {
//   const child = React.Children.only(children);
//   if ("id" in child.props) {
//     return child.props.id;
//   }
// };

export default Field;
