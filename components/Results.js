import Thumbnail from './Thumbnail';
function Results({ results }) {
  return (
    <div className="px-5 py-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((value, key) => {
        return <Thumbnail key={key} value={value} />;
      })}
    </div>
  );
}

export default Results;
