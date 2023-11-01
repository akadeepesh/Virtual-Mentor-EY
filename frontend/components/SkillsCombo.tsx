import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
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

export default function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string[]>([]);
  const [skills, setSkills] = React.useState<
    { value: string; label: string }[]
  >([]);

  useEffect(() => {
    fetch("/skills.txt")
      .then((response) => response.text())
      .then((data) => {
        const skills = data.split("\n").map((skill) => ({
          value: skill,
          label: skill,
        }));
        setSkills(skills);
      });
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex mr-4 gap-2 flex-wrap">
        {value.map((val) => (
          <Badge className=" h-5" key={val} variant="secondary">
            {val}
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
              Select your skills...
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[600px] max-h-[200px] p-0 overflow-y-auto">
            <ScrollArea>
              <Command>
                <CommandInput placeholder="Search skill..." />
                <CommandEmpty>No skills found.</CommandEmpty>
                <CommandGroup>
                  {skills.map((skill) => (
                    <CommandItem
                      key={skill.value}
                      value={skill.value}
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
                          value.includes(skill.value)
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {skill.label}
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
