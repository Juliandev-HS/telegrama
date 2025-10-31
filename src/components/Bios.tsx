import { StoryblokComponent } from "@storyblok/react";

export const Bios = ({ blok }: any) => {
    
    return (
         <div className="p-4 border rounded-lg shadow-sm">
                    {blok.bio_card?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
    )
}