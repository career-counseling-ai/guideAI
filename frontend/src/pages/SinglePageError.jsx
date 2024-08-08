import { useRouteError } from 'react-router-dom';

function SinglePageError() {
  const error = useRouteError();
  return (
    <div>
      <h2>{error.message}</h2>
    </div>
  );
}

export default SinglePageError;
