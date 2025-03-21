import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import NoteListings from "../components/NoteListings";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center bg-red-100 min-h-screen relative">
      <div className="container mx-auto w-[90%] rounded-md mb-8">
        <h1 className="font-heading py-8 text-4xl md:text-8xl text-center ">
          Cute Notes
        </h1>
        {/* lists of notes */}
        <div className="absolute top-10 left-10 w-8 h-8 md:top-14 md:left-20 md:w-14 md:h-14 lg:top-14 lg:left-60 lg:w-14 lg:h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 436.593"
          >
            <path
              fill="#f08080"
              fill-rule="nonzero"
              d="M21.128 179.213V40.201l.388-1.704c.702-3.089 1.578-6.02 2.646-8.761 1.162-2.976 2.53-5.781 4.128-8.378C33.634 12.675 40.506 7.387 48.544 4.16 55.626 1.317 63.179.36 71.217.068c20.772-.76 46.171 4.955 70.314 12.862 36.957 12.105 72.128 29.823 81.879 36.677a54.983 54.983 0 0134.505-12.109 54.983 54.983 0 0132.729 10.742c11.979-7.622 45.114-23.942 79.825-35.31C394.612 5.023 420.011-.692 440.783.068c8.038.292 15.59 1.249 22.671 4.092 8.04 3.226 14.912 8.513 20.255 17.198l-.04.024a52.052 52.052 0 014.169 8.354c1.068 2.741 1.944 5.672 2.646 8.761l.388 1.704v135.17c0 14.22-4.629 24.169-18.464 29.386-6.121 2.308-13.479 3.25-22.048 2.838-36.721-1.767-78.79-23.215-110.74-39.505l-3.852-1.963a1252.309 1252.309 0 01-25.095-13.148 1136.18 1136.18 0 01-23.844-13.2 56.85 56.85 0 01-1.263.754L512 319.118l-94.955 1.608-13.969 115.867-21.033-42.693-121.207-246.029a55.706 55.706 0 01-9.519-.316l-6.144 12.472-136.249 276.566-13.969-115.867L0 319.118l228.103-179.904-.903-.593-1.629.928a1136.379 1136.379 0 01-24.244 13.43 1252.309 1252.309 0 01-25.095 13.148l-3.852 1.963c-31.95 16.29-74.019 37.738-110.74 39.505-8.569.412-15.927-.53-22.048-2.838-4.025-1.517-7.499-3.578-10.42-6.179-4.802-4.283-7.464-8.942-8.044-19.365z"
            />
            <path
              fill="#f4978e"
              d="M117.281 387.646l115.216-233.873L39.896 305.676l67.641 1.145 9.744 80.825zm224.907-234.138c-16.823-8.563-33.096-17.307-48.786-26.247 56.714-12.108 119.101-7.08 163.435 33.487 7.733 7.076 14.38 14.744 19.996 22.975-3.923 7.169-12.557 10.395-25.809 9.758-35.025-1.686-77.611-24.082-108.836-39.973zm-38.577-43.314c6.15-17.053 4.413-33.419-7.016-48.943 14.455-10.3 95.173-48.844 143.69-47.068 13.141.48 24.17 2.91 31.358 14.592 2.372 3.852 3.998 8.163 5.059 12.822v118.052c-44.168-48.342-105.219-56.929-173.091-49.455zm-45.696-58.527c22.674 0 41.056 18.382 41.056 41.056 0 22.674-18.382 41.054-41.056 41.054-22.673 0-41.054-18.38-41.054-41.054 0-22.674 18.381-41.056 41.054-41.056zm-49.526 58.527c-6.15-17.053-4.414-33.419 7.016-48.943-14.455-10.3-95.175-48.844-143.69-47.068-13.143.48-24.17 2.91-31.36 14.592-2.37 3.852-3.996 8.163-5.057 12.822v118.052c44.168-48.342 105.219-56.929 173.091-49.455zm-38.577 43.314c16.823-8.563 33.096-17.307 48.785-26.247-56.713-12.108-119.1-7.08-163.434 33.487-7.733 7.076-14.38 14.744-19.996 22.975 3.923 7.169 12.557 10.395 25.809 9.758 35.025-1.686 77.611-24.082 108.836-39.973zm224.907 234.138L279.501 153.773l192.603 151.903-67.641 1.145-9.744 80.825z"
            />
            <path
              fill="#fbc4ab"
              fill-rule="nonzero"
              d="M255.999 75.511c4.75 0 9.055 1.928 12.169 5.043a17.158 17.158 0 015.042 12.169c0 4.751-1.927 9.055-5.042 12.169a17.158 17.158 0 01-12.169 5.043 17.154 17.154 0 01-12.168-5.043 17.157 17.157 0 01-5.043-12.169c0-4.75 1.928-9.055 5.043-12.169a17.154 17.154 0 0112.168-5.043z"
            />
            <circle fill="#e7c6ff" cx="256" cy="92.723" r="15.116" />
          </svg>
        </div>
        <div className="absolute top-10 right-10 w-8 h-8 md:top-14 md:right-20 md:w-14 md:h-14 lg:top-14 lg:right-60 lg:w-14 lg:h-14">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 512 436.593"
          >
            <path
              fill="#f08080"
              fill-rule="nonzero"
              d="M21.128 179.213V40.201l.388-1.704c.702-3.089 1.578-6.02 2.646-8.761 1.162-2.976 2.53-5.781 4.128-8.378C33.634 12.675 40.506 7.387 48.544 4.16 55.626 1.317 63.179.36 71.217.068c20.772-.76 46.171 4.955 70.314 12.862 36.957 12.105 72.128 29.823 81.879 36.677a54.983 54.983 0 0134.505-12.109 54.983 54.983 0 0132.729 10.742c11.979-7.622 45.114-23.942 79.825-35.31C394.612 5.023 420.011-.692 440.783.068c8.038.292 15.59 1.249 22.671 4.092 8.04 3.226 14.912 8.513 20.255 17.198l-.04.024a52.052 52.052 0 014.169 8.354c1.068 2.741 1.944 5.672 2.646 8.761l.388 1.704v135.17c0 14.22-4.629 24.169-18.464 29.386-6.121 2.308-13.479 3.25-22.048 2.838-36.721-1.767-78.79-23.215-110.74-39.505l-3.852-1.963a1252.309 1252.309 0 01-25.095-13.148 1136.18 1136.18 0 01-23.844-13.2 56.85 56.85 0 01-1.263.754L512 319.118l-94.955 1.608-13.969 115.867-21.033-42.693-121.207-246.029a55.706 55.706 0 01-9.519-.316l-6.144 12.472-136.249 276.566-13.969-115.867L0 319.118l228.103-179.904-.903-.593-1.629.928a1136.379 1136.379 0 01-24.244 13.43 1252.309 1252.309 0 01-25.095 13.148l-3.852 1.963c-31.95 16.29-74.019 37.738-110.74 39.505-8.569.412-15.927-.53-22.048-2.838-4.025-1.517-7.499-3.578-10.42-6.179-4.802-4.283-7.464-8.942-8.044-19.365z"
            />
            <path
              fill="#f4978e"
              d="M117.281 387.646l115.216-233.873L39.896 305.676l67.641 1.145 9.744 80.825zm224.907-234.138c-16.823-8.563-33.096-17.307-48.786-26.247 56.714-12.108 119.101-7.08 163.435 33.487 7.733 7.076 14.38 14.744 19.996 22.975-3.923 7.169-12.557 10.395-25.809 9.758-35.025-1.686-77.611-24.082-108.836-39.973zm-38.577-43.314c6.15-17.053 4.413-33.419-7.016-48.943 14.455-10.3 95.173-48.844 143.69-47.068 13.141.48 24.17 2.91 31.358 14.592 2.372 3.852 3.998 8.163 5.059 12.822v118.052c-44.168-48.342-105.219-56.929-173.091-49.455zm-45.696-58.527c22.674 0 41.056 18.382 41.056 41.056 0 22.674-18.382 41.054-41.056 41.054-22.673 0-41.054-18.38-41.054-41.054 0-22.674 18.381-41.056 41.054-41.056zm-49.526 58.527c-6.15-17.053-4.414-33.419 7.016-48.943-14.455-10.3-95.175-48.844-143.69-47.068-13.143.48-24.17 2.91-31.36 14.592-2.37 3.852-3.996 8.163-5.057 12.822v118.052c44.168-48.342 105.219-56.929 173.091-49.455zm-38.577 43.314c16.823-8.563 33.096-17.307 48.785-26.247-56.713-12.108-119.1-7.08-163.434 33.487-7.733 7.076-14.38 14.744-19.996 22.975 3.923 7.169 12.557 10.395 25.809 9.758 35.025-1.686 77.611-24.082 108.836-39.973zm224.907 234.138L279.501 153.773l192.603 151.903-67.641 1.145-9.744 80.825z"
            />
            <path
              fill="#fbc4ab"
              fill-rule="nonzero"
              d="M255.999 75.511c4.75 0 9.055 1.928 12.169 5.043a17.158 17.158 0 015.042 12.169c0 4.751-1.927 9.055-5.042 12.169a17.158 17.158 0 01-12.169 5.043 17.154 17.154 0 01-12.168-5.043 17.157 17.157 0 01-5.043-12.169c0-4.75 1.928-9.055 5.043-12.169a17.154 17.154 0 0112.168-5.043z"
            />
            <circle fill="#e7c6ff" cx="256" cy="92.723" r="15.116" />
          </svg>
        </div>
        <NoteListings />
      </div>
      {/* Add note button  */}
      <button className="bg-[#f08080] shadow-md text-white text-bold h-[50px] w-[50px] fixed bottom-8 right-4 rounded-full flex flex-col items-center justify-center">
        <Link to="/new-note">
          <FaPlus className="inline-block" />
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
