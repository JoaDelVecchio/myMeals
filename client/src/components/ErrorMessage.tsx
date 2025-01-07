const ErrorMessage = ({ message }: { message: string }) => (
  <div className="bg-red-100 text-red-800 border border-red-500 p-4 rounded-lg">
    {message}
  </div>
);

export default ErrorMessage;
