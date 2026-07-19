import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
    title: "Meetup Ideas",
    description: "A site to help add and vote on meetup ideas",
    extends: [vikeReact],
    prerender: true,
} satisfies Config;
