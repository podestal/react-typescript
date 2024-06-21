import { ReactNode } from "react"

// useState<number | null>()
// useState<number | undefined>()

type CounterProps = {
    setCount: React.Dispatch<React.SetStateAction<number>>,
    children: ReactNode,
}

const Counter = ({ setCount, children } : CounterProps) => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-center gap-12 my-10">
        {children}
        <button className="bg-slate-700 text-slate-100 p-4 rounded-full" onClick={() => setCount(prev => prev + 1)}>+</button>
        <button className="bg-slate-700 p-4 text-slate-100 rounded-full" onClick={() => setCount(prev => prev - 1)}>-</button>
        </div>
    </div>
  )
}

export default Counter