import { lazy, Suspense } from "react";
import Audiomack from "./Components/Audiomack";

function Songs() {
  const Songs = lazy(() => import("./Components/Audiomack"));

  return (
    <>
      <Suspense fallback={<div>Loading....</div>}>
        <Audiomack />
      </Suspense>
    </>
  );
}

export default Songs;
