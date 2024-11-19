import { Button } from "../ui/button"
import filterIcon from '@/assets/icons/filter.svg'
import SVG from 'react-inlinesvg'

export const FilterButton = () => {
    return <Button variant={'outline'} className="text-green-dark px-5 py-6 ml-auto border-2 relative">
        <div className="absolute -right-2 -top-2 text-base text-white bg-green-dark rounded-full h-5 w-5 flex items-center justify-center">
            1
        </div>
        <p>Filter</p>
        <SVG
            src={filterIcon}
            className="scale-[1.4] ml-1"
        />
    </Button>
}