import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium uppercase tracking-widest transition-colors duration-100 focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--foreground)] focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--foreground)]",
        outline: "bg-transparent text-[var(--foreground)] border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]",
        ghost: "bg-transparent text-[var(--foreground)] border-none hover:underline underline-offset-4",
        destructive: "bg-[var(--foreground)] text-[var(--background)] border-2 border-[var(--foreground)]",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-xs",
        lg: "h-14 px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
