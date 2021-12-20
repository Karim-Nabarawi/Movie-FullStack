import React from "react";

import LoadingGif from "./LoadingGif";

const GenericLoading = ({ data, loadingUI, emptyUI, children }) => {
  if (!data) {
    if (loadingUI) return loadingUI;
    else return <LoadingGif />;
  } else if (data.length === 0) {
    if (emptyUI) return emptyUI;
    return <>There is no data to display</>;
  } else {
    return children;
  }
};
export default GenericLoading;
