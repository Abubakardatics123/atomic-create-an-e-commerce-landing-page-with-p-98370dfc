"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ categories, selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={
            selected === cat
              ? "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-indigo-600 text-white shadow-md"
              : "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
          }
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
