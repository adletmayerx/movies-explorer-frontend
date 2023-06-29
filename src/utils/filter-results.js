export default function filterResults(data, inputQuery, isShortFilmsSelected) {
  let result = data.filter((movie) => {
    return (
      movie.nameRU.toLowerCase()?.includes(inputQuery.toLowerCase()) ||
      movie.nameEN?.includes(inputQuery.toLowerCase())
    );
  });

  if (isShortFilmsSelected) {
    result = result.filter((movie) => movie.duration <= 40);
  }

  return result;
}
