export default function attackExtractor(obj) {
  const result = [];
  const { special } = obj;
  special.forEach((item) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = item;
    result.push({
      id, name, description, icon,
    });
  });
  return result;
}
