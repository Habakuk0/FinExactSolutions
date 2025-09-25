i// client/src/App.tsx
import { Route, Switch } from "wouter";
import { Helmet } from "react-helmet";

import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resources from "./pages/resources";
import ResourceDetail from "./pages/resource-detail";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <>
      {/* Global SEO / Meta */}
      <Helmet>
        <title>FinExact Solutions</title>
        <meta
          name="description"
          content="FinExact Solutions – Business insights, services and resources for growth."
        />
        <meta property="og:title" content="FinExact Solutions" />
        <meta
          property="og:description"
          content="Business insights, services and resources for growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://finexactsolutions.co.ke/" />
      </Helmet>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/resources" component={Resources} />
        <Route path="/resources/:slug" component={ResourceDetail} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
