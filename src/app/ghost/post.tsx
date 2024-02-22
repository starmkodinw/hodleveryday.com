const url = process.env.URL;
const key = process.env.KEY;

export async function getPosts() {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/?key=${key}`);
    const data = await response.json();
    return data?.posts || [];
}