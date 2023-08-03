import { APIRoute } from "astro";
// To use Deno KV, swiitch this import to "resources_kv" in the same directory
import { deleteResource } from "../../data/resources.ts";
import { deleteResource as DR } from "../../data/resources_kv.ts";

export const del: APIRoute = async ({ request }) => {
  const title = new URL(request.url).searchParams.get("title");
  if (title !== 'undefined') return new Response(null, { status: 400 });

  await deleteResource(title);
  await DR('')
  return new Response(null, { status: 204 });
};
