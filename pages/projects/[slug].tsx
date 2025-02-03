// pages/projects/[slug].tsx

import React from "react";

type ProjectPageProps = {
  // your props here
};

export default function ProjectPage({ /* props */ }: ProjectPageProps) {
  return <div>Your project page goes here</div>;
}

// If you’re doing SSG or SSR:
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';

interface StaticProps {
    // your props here
}

export async function getStaticProps(context: GetStaticPropsContext): Promise<GetStaticPropsResult<StaticProps>> {
    // ...
    return { props: {} };
}

export async function getStaticPaths() {
  // ...
  return { paths: [], fallback: "blocking" };
}
