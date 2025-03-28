"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NestedNavigation({ items, onClose }) {
  const [stack, setStack] = useState([items]);
  const currentItems = stack[stack.length - 1];

  const pushStack = (items) => {
    setStack([...stack, items]);
  };

  const popStack = () => {
    if (stack.length > 1) {
      setStack(stack.slice(0, -1));
    }
  };

  return (
    <div className="h-min flex flex-col">
      <div className="flex items-center justify-start gap-1 p-4 bg-black border-b border-gray-200 dark:border-gray-900">
        {stack.length > 1 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              popStack();
            }}
            className="!menu-back-button text-white"
            aria-label="Go back"
          >
            <ChevronLeft size={20} />
          </button>
        )}
        <h2 className="!menu-title text-white ">
          {stack.length > 1 ? stack[stack.length - 1][0].name : "Menu"}
        </h2>
      </div>
      <nav className="flex-1 overflow-y-auto bg-black">
        <ul className="px-2 py-2">
          {currentItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={item.type === "link" ? onClose : undefined}
                className="menu-item flex items-center justify-between "
              >
                <span className="text-white">{item.name}</span>
                {item.type === "nested" && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      pushStack(item.items);
                    }}
                    className="!menu-nested-icon text-white"
                    aria-label={`Open ${item.name} submenu`}
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
