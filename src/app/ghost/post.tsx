const url = process.env.URL;
const key = process.env.KEY;

export async function getPosts() {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/?key=${key}&limit=all`);
    const data = await response.json();
    return data?.posts || [];
}

export async function getPost(slug: string) {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/slug/${slug}/?key=${key}`);
    const data = await response.json();
    return data?.posts[0];
}