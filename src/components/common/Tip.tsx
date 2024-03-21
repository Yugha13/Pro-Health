import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Tip({title, mess}:{title: string, mess: string}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">{title}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{mess}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
