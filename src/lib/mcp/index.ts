import { defineMcp } from "@lovable.dev/mcp-js";
import getProfile from "./tools/get-profile";
import getServices from "./tools/get-services";
import getSkills from "./tools/get-skills";
import getExperience from "./tools/get-experience";
import getCertifications from "./tools/get-certifications";
import getContact from "./tools/get-contact";

export default defineMcp({
  name: "asim-s-digital-portfolio",
  title: "Asim's Digital Portfolio",
  version: "0.1.0",
  instructions:
    "Read-only tools exposing Muhammad Asim Saqlain's public portfolio: profile, services, skills, experience & education, certifications, and contact details. Use these to answer questions about his background or to draft outreach.",
  tools: [getProfile, getServices, getSkills, getExperience, getCertifications, getContact],
});
