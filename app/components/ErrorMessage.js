const ErrorMessage = ({ error }) => {
  if (!error) return;
  return <span className='text-secondary-100 text-xs pl-2'>{error}</span>;
};

export default ErrorMessage;
