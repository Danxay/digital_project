// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const splitChunks = (array: Array<any>, chunkSize: number): Array<Array<any>> => {
  return array.reduce((acc, item, index) => {
    if (index % chunkSize === 0) {
      acc.push([]);
    }

    acc[acc.length - 1].push(item);
    return acc;
  }, []);
};
