import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../portfolio-data";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Get public contact details and social links (email, phone, LinkedIn, GitHub, location).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});
