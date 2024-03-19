import { Context, Hono } from 'hono'
import { cors } from 'hono/cors';

interface postDataType {
  'message': string
}

interface KeyValueData {
  key: string;
  value?: string;
}

const handleGetRequest = async (c: Context): Promise<Response> => {
  const key = c.req.query('key');
  try {
    if (!key) {
      return new Response("Key not provided", { status: 400 });
    }
    const value = await c.env.PICK.get(key);
    return c.text(value)
  } catch (err: any) {
    console.error(`KV returned error: ${err}`)
    return new Response(err, { status: 500 })
  }
}

const handlePutRequest = async (c: Context): Promise<Response> => {
  const {key, value} = await c.req.json<KeyValueData>()
  try {
    if (!key || value === null) {
      return new Response("Value not found", { status: 404 });
    }
    await c.env.PICK.put(key, value);
    return new Response(`saved: ${key}: ${value}`);
  } catch (err: any) {
    console.error(`KV returned error: ${err}`)
    return new Response(err, { status: 500 })
  }
}

const app = new Hono()
app.use(cors());
app
  .get('/', (c) => {
    return c.text('Hello Hono!')
  })
  .get('/get-value', handleGetRequest)
  .post('/', async (c) => {
    const postData = await c.req.json<postDataType>();
    return c.json(postData)
  })
  .put('/', handlePutRequest)

export default app