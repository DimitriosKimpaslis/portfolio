import { useEffect, useState } from "react"

const Loading = (props) => {
    const { loading } = props
    const [hidden, setHidden] = useState(false)
    useEffect(() => {
        if (!loading) {
            setTimeout(() => setHidden(true), 1000)
        }
    }, [loading])
return (
    <div className={'w-screen h-screen bg-blue-600 text-2xl font-bold absolute flex justify-center items-center top-0 transition-opacity ' + (loading ? 'opacity-100 ' : 'opacity-0 ') + (hidden && "  hidden")}>
        <div className={'loader transition-opacity ' + (loading ? 'opacity-100' : 'opacity-0')}></div>
    </div>
)
}

export default Loading