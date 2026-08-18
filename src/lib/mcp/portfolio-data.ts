export {
  profile as fullProfile,
  services,
  skillGroups,
  experience,
  certifications,
  education,
  projects,
} from "../portfolio/data";

import {
  profile as base,
  education as edu,
  experience as exp,
  skillGroups,
} from "../portfolio/data";

export const profile = {
  name: base.name,
  headline: base.title,
  location: base.location,
  availability: "Available for AI automation projects on Upwork",
  summary: base.valueProp,
  site: "https://muhammadasimsaqlainportfolio.lovable.app",
};

export const contact = {
  email: base.email,
  phone: base.phone,
  linkedin: base.linkedin,
  github: base.github,
  location: base.location,
};

export const skills = skillGroups.map((g) => ({ group: g.title, items: g.items }));

export const experienceEntries = exp;
export const educationEntries = [edu];
