import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import Wishlish from '../wishlist'
import { useAepsyStore } from '@/core/context'
import solidHeartIcon from '@/assets/icons/solid-heart.svg'
import SVG from 'react-inlinesvg'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

const WishlishButton = () => {
    const { wishlist } = useAepsyStore();
    return (
        <Popover>
            <PopoverTrigger className={cn(wishlist.length || 'hidden')}>
                <Button
                    className={cn(
                        "text-green-dark p-2 h-fit relative",
                    )}
                >
                    <div className='absolute z-10 top-0 right-0 p-1 h-3.5 w-3.5 rounded-full text-[10px] text-white flex items-center justify-center bg-red-500'>{wishlist.length}</div>
                    <SVG
                        src={solidHeartIcon}
                        className="scale-[1.2] text-primary"
                    />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("w-fit z-50 shadow-md mr-4", wishlist.length || 'hidden')}>
                <Wishlish />
            </PopoverContent>
        </Popover>
    )
}

export default WishlishButton