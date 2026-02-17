import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
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
        <img src="/logoFranzLuthier.png" alt="Franz Luthier" width={420} height={420} style={{ objectFit: 'contain' }} />
        <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em' }}>Franz Luthier</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
