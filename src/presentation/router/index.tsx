import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Loader } from "@/presentation/components";

const Home = lazy(() => import("@/presentation/pages/home"));

type Props = {};

const Router: React.FC<Props> = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
