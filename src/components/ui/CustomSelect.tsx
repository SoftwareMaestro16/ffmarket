import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type Option<T> = {
  value: T;
  label: string;
};

type Props<T> = {
  value: T;
  options: Option<T>[];
  onChange: (value: T) => void;
};

function CustomSelect<T extends string>({ value, options, onChange }: Props<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div ref={ref} className="relative w-full sm:w-28">
      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 hover:border-yellow-400/50 transition-all"
      >
        <span>{selected?.label}</span>
        <ChevronDown
          size={16}
          className={`ml-2 transition-all duration-300 ${open ? 'rotate-180 text-yellow-400' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-full min-w-[120px] rounded-lg border border-white/10 bg-zinc-900/95 backdrop-blur-xl shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`w-full px-3 py-2.5 text-left text-sm transition-all hover:bg-yellow-400 hover:text-black ${
                option.value === value 
                  ? 'bg-yellow-400/10 text-yellow-400' 
                  : 'text-white/80 hover:text-black'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;