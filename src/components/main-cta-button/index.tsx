import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "../ui/button"

const MainCTAButton = (props: ButtonProps & { color?: 'gradient' | 'primary' }) => {
    return (
        <Button
            {...props}
            className={cn(
                props.className,
                "text-md w-full rounded-full text-white hover:opacity-60 border-none hover:cursor-pointer",
                props.color === 'primary' ? 'bg-primary' : 'bg-gradient-to-r from-[#e77972] to-[#edccae]'
            )}
        >
            {props.children}
        </Button>
    )
}

export default MainCTAButton