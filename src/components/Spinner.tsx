import React from 'react';

type Props = {
  style?: any;
};

const Spinner = ({ style }: Props) => (
  <div className="text-center" style={{ height: 40 }}>
    <div
      className="m-loader m-loader--brand m-loader--lg"
      style={style}
    />
  </div>
);

Spinner.defaultProps = {
  style: undefined,
};

export default Spinner;
