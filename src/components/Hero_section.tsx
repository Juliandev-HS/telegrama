import { StoryblokComponent } from "@storyblok/react";

export const Hero_section = ({ blok }: any) => {

  return (
    <div className="p-4 border rounded-lg shadow-sm">
                    {blok.hero_projects?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
  );
};
