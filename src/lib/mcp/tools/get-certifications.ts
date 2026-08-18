import { defineTool } from "@lovable.dev/mcp-js";
import { certifications } from "../portfolio-data";

export default defineTool({
  name: "get_certifications",
  title: "Get certifications",
  description: "List Muhammad Asim Saqlain's certifications with issuer and date.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(certifications, null, 2) }],
    structuredContent: { certifications },
  }),
});
