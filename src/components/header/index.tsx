import earthIcon from '@/assets/icons/earth.svg';
import infoIcon from '@/assets/icons/info.svg';
import restartIcon from '@/assets/icons/restart.svg';
import SVG from 'react-inlinesvg';
import { Button } from '../ui/button';
import Tooltip from '../ui/tooltip';
import WishlishButton from './wishlist-button';

const Header = () => {
    return (
        <div className="bg-light h-[90px] border border-b-green-dark-2 flex items-center justify-between pl-3 pr-6">
            <Button className='text-md hover:cursor-pointer'>
                <SVG
                    src={restartIcon}
                    className='scale-[1.4]'
                />
                <p>restart</p>
            </Button>
            <div className='flex items-center gap-1'>
                <p className="text-green-dark text-[22px] font-medium">
                    Your top 3
                </p>
                <Tooltip content={
                    <div className='w-[300px] text-green-dark font-medium text-[16px] p-1 leading-6'>
                        <p>
                            We use relevant data from past matching processes and successful consultations for the personal selection and combine them with your information.
                        </p>
                        <p className='mt-3'>
                            The top 3 represent a high accuracy of fit. The subsequent profiles are sorted by the accuracy of the match.
                        </p>
                    </div>
                }>
                    <div
                        className='hover:cursor-pointer text-primary hover:bg-gray-100 p-2 rounded-full'
                    >
                        <SVG
                            src={infoIcon}
                            width={16}
                            className='hover:cursor-pointer'
                        />
                    </div>
                </Tooltip>
            </div>

            <div className='flex items-center gap-2'>
                <Button className='text-green-dark h-[34px] px-3' variant={'outline'}>
                    <p>EN</p>
                    <SVG
                        src={earthIcon}
                    />
                </Button>
                <WishlishButton />
            </div>
        </div>
    )
}

export default Header