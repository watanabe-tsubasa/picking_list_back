// import { env } from "hono/adapter";

export interface Env {
  PICK: KVNamespace;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

    try {
      await env.PICK.put("KEY", "VALUE");        
      const value = await env.PICK.get("KEY");        
      if (value === null) {            
        return new Response("Value not found", { status: 404 });        
        }        
      return new Response(value);
    } catch (err) {
      // In a production application, you could instead choose to retry your KV
      // read or fall back to a default code path.
      console.error(`KV returned error: ${err}`)
      return new Response(err, { status: 500 })
    } 
	}, 	
};