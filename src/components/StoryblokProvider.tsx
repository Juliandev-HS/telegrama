import type { PropsWithChildren } from "react";
import {storyblokInit} from "@storyblok/react/rsc";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Page } from "./Page";
import { Hero_section } from "./Hero_section";
import { Clients } from "./Clients";
import { About_us } from "./About_us";
import { Bios } from "./Bios";
import { Services } from "./Services";
import { Faq } from "./faq";
import { Service_card } from "./Service_card";
import { Faq_card } from "./faq_card";
import { Bio_card } from "./bio_card";
import { Hero_projects } from "./Hero_projects";
import { Client_card } from "./Client_card";

storyblokInit({
    components: {
        header : Header,
        footer : Footer,
        page : Page,
        hero_section : Hero_section,
        clients : Clients,
        about_us : About_us,
        Bios : Bios,
        services : Services,
        faq : Faq,
        service_card : Service_card,
        faq_card : Faq_card,
        bio_card : Bio_card,
        hero_projects : Hero_projects,
        client_card : Client_card,
    },
    enableFallbackComponent : true,
});

export const StoryblokProvider = ({children}:PropsWithChildren) => {
    return <>{children}</>;
};