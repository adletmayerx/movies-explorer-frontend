export default function filterResults(data, inputQuery, isShortFilmsSelected) {
  let result = data.filter((movie) => {
    return (
      movie.nameRU.toLowerString()?.includes(inputQuery.toLowerString()) ||
      movie.nameEN?.includes(inputQuery.toLowerString())
    );
  });

  if (isShortFilmsSelected) {
    result = result.filter((movie) => movie.duration <= 40);
  }

  return result;
}
