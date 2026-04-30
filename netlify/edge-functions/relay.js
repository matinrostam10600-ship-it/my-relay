export default async (request, context) => {
  const url = new URL(request.url);
  // آی‌پی سرور و پورت 8080 که باز کردیم
  const upstream = "46.249.102.151:8080"; 
  
  try {
    return await fetch(`http://${upstream}${url.pathname}${url.search}`, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  } catch (err) {
    return new Response("Error connecting to server", { status: 502 });
  }
};
