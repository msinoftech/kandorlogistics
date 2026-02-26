"use client";
import { useState } from "react";
import { blogs } from "@/lib/data";
import BlogCard from "@/components/BlogCard";

export default function BlogClient() {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogs.slice(startIndex, startIndex + itemsPerPage);
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section className="bg-white pb-20 sm:pt-40 md:pt-40 lg:pt-40 pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl lg:max-w-4xl mx-auto text-center pb-12">
            <h1 className="text-2xl text-gray-900 md:text-4xl font-bold">Latest Business News, Insights & Analysis</h1>
            <p className="mt-3 mx-auto text-md">Explore the latest trends, tips, and expert insights to drive your trucking business or related. Our experts address entrepreneurship, management, marketing, and innovation to help your business grow and stay ahead of the competition.</p>
          </div>

        {/* Blog grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {blogs.length > itemsPerPage && (
          <div className="flex justify-center items-center mt-10 space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-2 rounded-md text-sm font-medium border ${
                currentPage === 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-2 rounded-md text-sm font-medium border ${
                  currentPage === page
                    ? "bg-red-600 text-white border-red-600"
                    : "text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 rounded-md text-sm font-medium border ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}