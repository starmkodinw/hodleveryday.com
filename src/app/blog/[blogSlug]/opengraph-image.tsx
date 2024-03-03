import { ImageResponse } from 'next/og'
import { getPost } from "../../ghost/post";

export const runtime = 'edge'
 
export const alt = 'blog image'
export const size = {
  width: 1920,
  height: 1080,
}
export const contentType = 'image/jpeg'
 
export default async function Image({ params }: { params: { blogSlug: string } }) {
  const post = await getPost(params?.blogSlug);

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={post.feature_image} alt={post.title} width="1920" height="1080" />
      </div>
    ),
    {
      ...size,
    }
  )
}