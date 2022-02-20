import { Suspense } from "react";

import Profile from "../components/profile.server";
import Path from "../components/path.server";
import Content from "../components/content.client";

export default function Home({ router }) {
  return (
    <div>
      <h1>Welcome to React Server Components</h1>
      <Suspense fallback={"Loading..."}>
        <Profile id={1} />
      </Suspense>
      <Suspense fallback={"Path Loading..."}>
        <Path router={router} />
      </Suspense>
      <Content />
    </div>
  );
}
