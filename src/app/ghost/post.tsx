const url = process.env.URL;
const key = process.env.KEY;

export async function getPosts() {
  const response = await fetch(
    `${url}/ghost/api/v3/content/posts/?key=${key}&limit=all&include=authors,tags`
  );
  const data = await response.json();
  if (data?.posts?.length > 0) {
    for (let i = 0; i < data?.posts?.length; i++) {
      if (
        data?.posts[i].tags === undefined ||
        data?.posts[i].tags.length === 0
      ) {
        data.posts[i].tags = [{ name: "crypto" }];
      }
      if (data?.posts[i].excerpt === undefined) {
        data.posts[i].excerpt = "";
      }
      if (data?.posts[i].feature_image === null) {
        data.posts[i].feature_image = "https://hodleveryday.com/wallpaper.jpeg";
      }
    }
    return data?.posts;
  }
  return [];
}

export async function getPostsUser() {
  const response = await fetch(
    `${url}/ghost/api/v3/content/posts/?key=${key}&limit=all&include=authors,tags&filter=tag:user`
  );
  const data = await response.json();
  if (data?.posts?.length > 0) {
    for (let i = 0; i < data?.posts?.length; i++) {
      if (
        data?.posts[i].tags === undefined ||
        data?.posts[i].tags.length === 0
      ) {
        data.posts[i].tags = [{ name: "crypto" }];
      }
      if (data?.posts[i].excerpt === undefined) {
        data.posts[i].excerpt = "";
      }
      if (data?.posts[i].feature_image === null) {
        data.posts[i].feature_image = "https://hodleveryday.com/wallpaper.jpeg";
      }
    }
    return data?.posts;
  }
  return [];
}

export async function getPostsByTags(tag: string) {
  const response = await fetch(
    `${url}/ghost/api/v3/content/posts/?key=${key}&limit=all&filter=tag:${tag}&include=authors,tags`
  );
  const data = await response.json();
  if (data?.posts?.length > 0) {
    for (let i = 0; i < data?.posts?.length; i++) {
      if (
        data?.posts[i].tags === undefined ||
        data?.posts[i].tags.length === 0
      ) {
        data.posts[i].tags = [{ name: "crypto" }];
      }
      if (data?.posts[i].excerpt === undefined) {
        data.posts[i].excerpt = "";
      }
      if (data?.posts[i].feature_image === null) {
        data.posts[i].feature_image = "https://hodleveryday.com/wallpaper.jpeg";
      }
    }
    return data?.posts;
  }
  return [];
}

export async function getPost(slug: string) {
  const response = await fetch(
    `${url}/ghost/api/v3/content/posts/slug/${slug}/?key=${key}&include=authors,tags`
  );
  const data = await response.json();
  if (data?.posts?.length > 0) {
    if (data?.posts[0].tags === undefined || data?.posts[0].tags.length === 0) {
      data.posts[0].tags = [{ name: "crypto" }];
    }
    if (data?.posts[0].excerpt === undefined) {
      data.posts[0].excerpt = "";
    }
    if (data?.posts[0].feature_image === null) {
      data.posts[0].feature_image = "https://hodleveryday.com/wallpaper.jpeg";
    }
    return data?.posts[0];
  }

  return [];
}

export async function getTags() {
  const response = await fetch(`${url}/ghost/api/v3/content/tags/?key=${key}`);
  const data = await response.json();
  return data;
}

export async function getTagsSlug(slug: string) {
  const response = await fetch(
    `${url}/ghost/api/v3/content/tags/slug/${slug}/?key=${key}`
  );
  const data = await response.json();
  return data;
}
