const protocol = "ws";
const domain = "127.0.0.1";
const port = 1233;
const url: URL = new URL(`${protocol}://${domain}:${port}`);

export default url;
