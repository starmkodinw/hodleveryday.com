// import { ImageResponse } from 'next/og'

// export const runtime = 'edge'
 
// export const alt = 'hodleveryday.com - เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร บทความเกี่ยวกับคริปโตเคอร์เรนซี่'

// export const size = {
//   width: 1024,
//   height: 1024,
// }
// export const contentType = 'image/png'
 
// export default async function Image({ params }: { params: { blogSlug: string } }) {

//   return new ImageResponse(
//     (
//       <div
//         style={{
//           fontSize: 48,
//           background: 'white',
//           width: '100%',
//           height: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <img src="http://localhost:3000/pixel - logo.png" alt="hodleveryday.com - เว็บไซต์ที่รวบรวมข้อมูล ข่าวสาร บทความเกี่ยวกับคริปโตเคอร์เรนซี่" width="1024" height="1024" />
//       </div>
//     ),
//     {
//       ...size,
//     }
//   )
// }