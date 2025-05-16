import { a } from "framer-motion/client";
import React, { useState } from "react";
const allUsers = [
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Monthly",
    status: "Active",
  },
  {
    name: "Nihal",
    email: "nihal@gmail.com",
    subscription: "Yearly",
    status: "Suspend",
  },
];
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 11;
  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  const pageWindowSize = 3;
  const currentWindowStart =
    Math.floor((currentPage - 1) / pageWindowSize) * pageWindowSize + 1;
  const currentWindowEnd = Math.min(
    currentWindowStart + pageWindowSize - 1,
    totalPages
  );

  const startIndex = (currentPage - 1) * usersPerPage;
  const paginatedUsers = allUsers.slice(startIndex, startIndex + usersPerPage);
  console.log(paginatedUsers);

  return (
    <>
      <div className="flex items-center justify-end mt-6 space-x-2">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          className="px-4 py-1 border rounded-lg"
        >
          Prev
        </button>

        {currentWindowStart > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-3 py-1 rounded-md border"
            >
              01
            </button>
            <span className="text-gray-400 px-2">•••</span>
          </>
        )}

        {Array.from(
          { length: currentWindowEnd - currentWindowStart + 1 },
          (_, i) => {
            const pageNum = currentWindowStart + i;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === pageNum
                    ? "bg-purple-600 text-white"
                    : "border"
                }`}
              >
                {String(pageNum).padStart(2, "0")}
              </button>
            );
          }
        )}

        {currentWindowEnd < totalPages && (
          <>
            <span className="text-gray-400 px-2">•••</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-3 py-1 rounded-md border"
            >
              {String(totalPages).padStart(2, "0")}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          className="px-4 py-1 border rounded-lg"
        >
          Next
        </button>
      </div>
    </>
  );
}
