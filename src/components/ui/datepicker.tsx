"use client";

import { format, parseISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface DueDatePickerProps {
  value?: string; // 格式为 "YYYY-MM-DD"
  onChange: (value: string) => void;
}

export function DueDatePicker({ value, onChange }: DueDatePickerProps) {
  // 使用 parseISO 来正确解析 "YYYY-MM-DD"
  const parsedDate = value ? parseISO(value) : undefined;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!value}
          className="h-10 data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(parsedDate!, "PPP") : <span>Pick a due date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={parsedDate}
          onSelect={(date) => {
            if (date) {
              // 避免使用 toISOString，直接格式化为本地 YYYY-MM-DD
              const localDate = format(date, "yyyy-MM-dd");
              onChange(localDate);
            }
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
