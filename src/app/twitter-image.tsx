import { ImageResponse } from 'next/og';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://franzluthier.vercel.app');

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(180deg, #f1efeb 0%, #e7e1d8 100%)',
          color: '#201711',
          gap: 18,
        }}
      >
        <img src={`${siteUrl}/logoFranzLuthier.png`} alt="Franz Luthier" width={420} height={420} style={{ objectFit: 'contain' }} />
        <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em' }}>Franz Luthier</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
