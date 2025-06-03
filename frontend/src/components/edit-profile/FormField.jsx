import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

export function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
  component: Component,
  ...props
}) {
  const InputComponent = Component || (type === "textarea" ? Textarea : Input)

  if (type === "date") {
    return (
      <div className="space-y-1.5">
        <Label htmlFor={id} className="text-neutral-400">
          {label}
        </Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal bg-neutral-750 border-neutral-600 hover:bg-neutral-700 text-neutral-200",
                !value && "text-neutral-400",
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {value ? format(new Date(value), "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-neutral-800 border-neutral-700" align="start">
            <Calendar
              mode="double"
              selected={value ? new Date(value) : null}
              onSelect={(date) => onChange({ target: { name: id, value: date ? format(date, "yyyy-MM-dd") : "" } })} // Ensure correct format for state
              initialFocus
              // className="text-neutral-200"
              // classNames={{
              //   day_selected: "bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600",
              //   day_today: "text-blue-400",
              // }}
            />
          </PopoverContent>
        </Popover>
      </div>
    )
  }

  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-neutral-400">
        {label}
      </Label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />}
        <InputComponent
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`bg-neutral-750 border-neutral-600 focus:border-blue-500 text-neutral-200 ${Icon ? "pl-9" : ""} ${type === "textarea" ? "min-h-[100px]" : ""}`}
          {...props}
        />
      </div>
    </div>
  )
}
