import { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: "file" | "text"
    children?: string
}

export default function Input({type, children, ...props}: Props) {
    const styles = type === "file" ? "block w-full text-sm text-white/60 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0         file:text-sm file:font-semibold         file:bg-white/10 file:text-white         hover:file:bg-white/20         cursor:pointer file:transition-colors file:duration-250" : "max-h-6 bg-white/[0.05] hover:bg-white/[0.1] transition-colors duration-250 focus:outline-none p-2"
    return (
        <div className="flex flex-col gap-3">
            <label className="text-sm font-bold">{children}</label>
            <input type={type} className={styles} {...props} />
        </div>
    )
}