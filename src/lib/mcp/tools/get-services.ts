import { defineTool } from "@lovable.dev/mcp-js";
import { services } from "../portfolio-data";

export default defineTool({
  name: "get_services",
  title: "Get services",
  description: "List the AI and automation services Muhammad Asim Saqlain offers to clients.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
