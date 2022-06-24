import React from 'react';

const SmartText = ({ text = '', length = 300 }) => {
  const [showLess, setShowLess] = React.useState(true);

  if (text.length < length) {
    return <p>{text}</p>;
  }

  return (
    <>
      <p
        dangerouslySetInnerHTML={{
          __html: showLess ? `${text.slice(0, length)}...` : text,
        }}
      />
      <div onClick={() => setShowLess(!showLess)}>{`Leer ${showLess ? 'más ...' : 'menos'}`}</div>
    </>
  );
};

export default SmartText;
