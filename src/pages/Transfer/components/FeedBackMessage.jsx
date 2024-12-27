/* eslint-disable react/prop-types */
const FeedbackMessage = ({ successMessage, errorMessage }) => (
    <>
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
    </>
  );
  
  export default FeedbackMessage;
  