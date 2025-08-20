import { useNavigate } from 'react-router';
import { useCallback } from 'react';

export default function CreateDefaultNotFoundPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleCreatePage = useCallback(() => {
    // In a static build, we can't create pages dynamically
    // This is just a placeholder
    console.log('Page creation not available in static build');
  }, []);

  return (
    <div className="flex sm:w-full w-screen sm:min-w-[850px] flex-col">
      <div className="flex w-full items-center gap-2 p-5">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center justify-center w-10 h-10 rounded-md"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Back"
            role="img"
          >
            <path
              d="M8.5957 2.65435L2.25005 9L8.5957 15.3457"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.25007 9L15.75 9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="flex flex-row divide-x divide-gray-200 rounded-[8px] h-8 w-[300px] border border-gray-200 bg-gray-50 text-gray-500">
          <div className="flex items-center px-[14px] py-[5px]">
            <span>/</span>
          </div>
          <div className="flex items-center min-w-0">
            <p
              className="border-0 bg-transparent px-3 py-2 focus:outline-none truncate max-w-[300px]"
              style={{ minWidth: 0 }}
            >
              Page not found
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col items-center justify-center pt-[100px] text-center gap-[20px]">
        <h1 className="text-4xl font-medium text-gray-900 px-2">
          Uh-oh! This page doesn't exist.
        </h1>

        <p className="pt-4 pb-12 px-2 text-gray-500">
          Looks like you've navigated to a page that doesn't exist.
        </p>

        <div className="pb-20 lg:pb-[80px]">
          <p className="flex items-center text-gray-500">
            Go back to the homepage to continue exploring.
          </p>
        </div>
      </div>
    </div>
  );
}