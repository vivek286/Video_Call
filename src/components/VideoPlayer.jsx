import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div style={{ width: '600px', height: '600px', margin:'10px'}}>
      Uid: {user.uid}
      <div
        ref={ref}
        style={{ width: '500px', height: '500px', margin:'10px'}}
      ></div>
    </div>
  );
};
