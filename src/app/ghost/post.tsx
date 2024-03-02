const url = process.env.URL;
const key = process.env.KEY;

export async function getPosts() {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/?key=${key}&limit=all`);
    const data = await response.json();
    return data?.posts || [];
}

export async function getPostsByTags(tag: string) {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/?key=${key}&limit=all&filter=tag:${tag}`);
    const data = await response.json();
    return data?.posts || [];
}

export async function getPost(slug: string) {
    const response = await fetch(`${url}/ghost/api/v3/content/posts/slug/${slug}/?key=${key}&include=authors,tags`);
    const data = await response.json();
    if (data?.posts?.length > 0) {
        return data?.posts[0]
    }

    return [];
}

export async function getTags() {
    const response = await fetch(`${url}/ghost/api/v3/content/tags/?key=${key}`);
    const data = await response.json();
    return data;
}

export async function getTagsSlug(slug: string) {
    const response = await fetch(`${url}/ghost/api/v3/content/tags/slug/${slug}/?key=${key}`);
    const data = await response.json();
    return data;
}