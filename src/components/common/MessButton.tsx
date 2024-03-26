import { toast } from "sonner"

import { Button } from "../../components/ui/button"

export function MessButton({message, date, time, open}: {message:string, date:string, time:string, open:boolean}) {
  console.log('here');
  return (
    <Button
      variant="default"
      onClick={() =>
        open?toast(message, {
          description: date+" "+time,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        }):null
      }
    >
      Show Toast
    </Button>
  )
}
