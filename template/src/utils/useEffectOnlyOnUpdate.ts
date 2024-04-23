import React, {useEffect, useRef} from 'react';

const useEffectOnlyOnUpdate = (
  callback: React.EffectCallback,
  deps?: React.DependencyList | undefined
) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback();
    } else {
      didMount.current = true;
    }
  }, [callback, deps]);
};

export default useEffectOnlyOnUpdate;
