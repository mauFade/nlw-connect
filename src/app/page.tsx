import Button from "@/components/button"
import IconButton from "@/components/icon-button"
import { InputField, InputIcon, InputRoot } from "@/components/input"
import { ArrowRight, Copy, Mail } from "lucide-react"

export default function Home() {
  return (
    <main>
      <div>
        <Button>
          Enviar
          <ArrowRight />
        </Button>
        <IconButton>
          <Copy />
        </IconButton>

        <InputRoot>
          <InputIcon>
            <Mail className="size-5" />
          </InputIcon>

          <InputField placeholder="E-mail" />
        </InputRoot>
      </div>
    </main>
  )
}
