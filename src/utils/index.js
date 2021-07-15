export function formatArray(data) {
  return data.map((item, index) => {
    return index < data.length - 1 ? ` ${item}` : ` and ${item}`;
  });
}

export default function Utils() {
  return {
    formatArray,
  };
}
