import { defineTool } from "@lovable.dev/mcp-js";
import { education, experience } from "../portfolio-data";

export default defineTool({
  name: "get_experience",
  title: "Get experience and education",
  description: "Get Muhammad Asim Saqlain's work experience and education history.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify({ experience, education }, null, 2) }],
    structuredContent: { experience, education },
  }),
});
