import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "net.js",
    label: "Net.js",
  },
  {
    value: "svltekit",
    label: "SvlteKit",
  },
  {
    value: "nut.js",
    label: "Nut.js",
  },
  {
    value: "reix",
    label: "Reix",
  },
  {
    value: "asro",
    label: "Asro",
  },
  {
    value: "sltekit",
    label: "SlteKit",
  },
  {
    value: "nt.js",
    label: "Nt.js",
  },
  {
    value: "rix",
    label: "Rix",
  },
  {
    value: "aro",
    label: "Aro",
  },
];

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex mr-4 gap-2 flex-wrap">
        {value.map((val) => (
          <Badge key={val} variant="secondary">
            {frameworks.find((framework) => framework.value === val)?.label}
          </Badge>
        ))}
      </div>
      <div className="flex w-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              Select framework...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[600px] max-h-[200px] p-0 overflow-y-auto">
            <ScrollArea>
              <Command>
                <CommandInput placeholder="Search framework..." />
                <CommandEmpty>No framework found.</CommandEmpty>
                <CommandGroup>
                  {frameworks.map((framework) => (
                    <CommandItem
                      key={framework.value}
                      value={framework.value}
                      onSelect={(currentValue) => {
                        setValue(
                          value.includes(currentValue)
                            ? value.filter((val) => val !== currentValue)
                            : [...value, currentValue]
                        );
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value.includes(framework.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </ScrollArea>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
