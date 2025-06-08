// EditorSkeleton.tsx
import React from "react";

const EditorSkeleton = () => {
return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-6 animate-pulse">
        <div className="h-6 w-1/3 bg-gray-700 rounded"></div>
        <div className="h-6 w-16 bg-yellow-500 rounded-full"></div>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Skeleton (Description, Examples, Constraints, Tags) */}
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 rounded-lg shadow animate-pulse space-y-4">
            <div className="h-6 bg-gray-700 rounded w-1/2"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-3/4"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-2/3"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-1/2"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
            </div>
            <div className="flex gap-2 mt-2">
              <div className="h-5 w-16 bg-gray-600 rounded"></div>
              <div className="h-5 w-16 bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right Skeleton (Code + Test Cases) */}
        <div className="space-y-6">
          {/* Code Block Placeholder */}
          <div className="bg-gray-800 p-4 rounded-lg shadow animate-pulse">
            <div className="h-64 bg-gray-700 rounded"></div>
          </div>

          {/* Test Cases Placeholder */}
          <div className="bg-gray-800 p-4 rounded-lg shadow animate-pulse space-y-4">
            <div className="h-5 w-1/4 bg-gray-700 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-full"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorSkeleton;
