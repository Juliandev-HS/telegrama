import { getStoryblokApi } from "@storyblok/react/rsc";

const fetchProjectPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`projects/${slug}`, { version: "draft" });
  return response.data.story;
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // unwrap params
  console.log("Server slug:", slug);

  try {
    const story = await fetchProjectPage(slug);
    return <pre>{JSON.stringify(story, null, 2)}</pre>;
  } catch (err: any) {
    console.error("Storyblok fetch failed:", err.response?.data || err);
    return <div>Story not found</div>;
  }
}