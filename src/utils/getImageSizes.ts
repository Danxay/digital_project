import sizeOf from 'image-size';

export const getImageSizes = async (imageUrl: string): Promise<{ width: number; height: number } | undefined> => {
  try {
    const response = await fetch(imageUrl, { next: { revalidate: 500 } });
    const arrayBuffer = await response.arrayBuffer();
    const sizes = sizeOf(Buffer.from(arrayBuffer));

    return { width: Number(sizes.width), height: Number(sizes.height) };
  } catch (e) {
    return undefined;
  }
};
