export interface ICertificate {
  id: number;
  url: string;
}

export const certificates: Array<ICertificate> = [
  { id: 1, url: `${process.env.NEXT_PUBLIC_URL}/images/certificate_1.png` },
  { id: 2, url: `${process.env.NEXT_PUBLIC_URL}/images/certificate_2.png` },
  { id: 3, url: `${process.env.NEXT_PUBLIC_URL}/images/certificate_3.png` },
  { id: 4, url: `${process.env.NEXT_PUBLIC_URL}/images/certificate_4.jpg` },
  { id: 5, url: `${process.env.NEXT_PUBLIC_URL}/images/certificate_5.jpg` },
];
