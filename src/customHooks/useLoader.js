import { useState } from "react";

const useLoader = (initialValue) => {
  const [showLoader, setShowLoader] = useState(initialValue);

  const handleLoader = (val) => {
    setShowLoader(val);
  };

  return [showLoader, handleLoader];
};

export default useLoader;
