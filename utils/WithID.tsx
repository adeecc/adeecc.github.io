import React from 'react';

interface Props {
  id: string;
}

const WithID: React.FC<Props> = ({ id, children }) => {
  return <div id={id}>{children}</div>;
};

export default WithID;
