import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary)] text-white rounded-xl hover:bg-[var(--blue-700)] shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30",
        outline: "bg-transparent text-[var(--foreground)] border-2 border-[var(--border-dark)] rounded-xl hover:border-[var(--primary)] hover:text-[var(--primary)]",
        ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--secondary)] rounded-xl",
        destructive: "bg-[var(--destructive)] text-white rounded-xl hover:bg-red-600",
        dark: "bg-[var(--blue-900)] text-white rounded-xl hover:bg-[var(--blue-800)] shadow-md",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-13 px-8 py-3.5 text-base",
        icon: "h-11 w-11",
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
