"use client"
import { getStaticProps } from "destack/build/server";
import { ContentProvider } from "destack";

async function page() {
  const props = await getStaticProps().then((d) => d.props);

  return <ContentProvider data={props?.data}></ContentProvider>;
}

export default page;
