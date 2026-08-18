import { defineTool } from "@lovable.dev/mcp-js";
import { skills } from "../portfolio-data";

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description:
    "List technical skills grouped by area (generative AI, development, automation, data, networking & security).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(skills, null, 2) }],
    structuredContent: { skills },
  }),
});
