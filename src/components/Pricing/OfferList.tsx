const OfferList = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center mb-2">
      <svg
        className="w-5 h-5 text-green-600 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="text-base text-body-color dark:text-dark-6">{text}</span>
    </div>
  );
};

export default OfferList;
