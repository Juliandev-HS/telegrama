import { StoryblokComponent } from "@storyblok/react";

export const Services = ({ blok }: any) => {
    
    return (
            <div className="p-4 border rounded-lg shadow-sm">
             {blok.service_card?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                 ))}
            </div>
         )
    
}