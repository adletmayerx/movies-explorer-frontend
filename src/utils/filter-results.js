export default function filterResults(data, inputQuery, isShortFilmsSelected) {
  let result = data.filter((movie) => {
    return movie.nameRU?.includes(inputQuery) || movie.nameEN?.includes(inputQuery);
  });

  if (isShortFilmsSelected) {
    result = result.filter((movie) => movie.duration <= 40);
  }

  return result;
}
