import Image from 'next/image';

function CompanyImage() {
  return (
    <div style={{ padding: '0' }}>
      <Image
        src="/images/AboutUsFooter.webp"
        alt=""
        layout="responsive"
        width={3840}
        height={1080}
      />
    </div>
  );
}

export default CompanyImage;
