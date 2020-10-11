import React, { useRef } from 'react';

const scrollToRef = (ref) => window.scrollTo(500, ref.current.offsetTop);

const ScrollTo = () => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <>
      <div ref={myRef}>I wanna be seen</div>
      <button onClick={executeScroll}> Click to scroll </button>
    </>
  );
};

export default ScrollTo;
