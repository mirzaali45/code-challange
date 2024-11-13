"use client";

import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg cursor-pointer"
      >
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-100 p-2 rounded-full">{icon}</div>
          <span className="text-lg font-semibold text-yellow-800">{title}</span>
        </div>
        <span className="text-yellow-800">{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
