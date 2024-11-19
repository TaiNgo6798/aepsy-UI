import calendar from '@/assets/icons/calendar.svg';
import checkedCalendar from '@/assets/icons/checked-calendar.svg';
import heartIcon from '@/assets/icons/heart.svg';
import lotus from '@/assets/icons/lotus.svg';
import moon from '@/assets/icons/moon.svg';
import playIcon from '@/assets/icons/play.svg';
import solidHeartIcon from '@/assets/icons/solid-heart.svg';
import sun from '@/assets/icons/sun.svg';
import users from '@/assets/icons/users.svg';
import { useAepsyStore } from "@/core/context";
import { capitalize, cn } from "@/lib/utils";
import { ProviderData } from "@/types";
import SVG from 'react-inlinesvg';
import MainCTAButton from "../main-cta-button";
import { Button } from "../ui/button";
import ShareButton from "./share-button";

const quoteIcons = [
  users,
  sun,
  moon,
  calendar,
  lotus
]

type CardProps = {
  provider: ProviderData
  matchBadgeText?: string
} & React.ComponentProps<'div'>

const ProviderCard = ({
  provider,
  matchBadgeText,
  ...props
}: CardProps) => {
  const { addToWishlist, removeFromWishlist, isContainedInWishlist } = useAepsyStore()

  return (
    <div {...props} className="relative w-full bg-white rounded-[20px] text-green-dark shadow-md px-4 pt-6 max-w-[90vw]">
      <div className="text-sm font-medium absolute -top-4 right-6 w-fit h-auto bg-green-light text-green-dark px-2 py-1 rounded-full">
        <p>{matchBadgeText || ''}</p>
      </div>
      <div className="absolute bg-green-dark text-white flex p-3 items-center gap-2 -left-[16px] rounded-md z-10 rounded-bl-none">
        <SVG
          src={checkedCalendar}
          className="scale-[1.4]"
        />
        Flexible appointments
        <div className="w-0 h-0
          border-t-[0px] border-t-transparent
          border-r-[16px] border-r-black opacity-70
          border-b-[14px] border-b-transparent
          absolute
          z-0
          -left-[0px]
          -bottom-[14px]
        ">
        </div>
      </div>

      {/* === TOP SECTION === */}
      <div className="text-green-dark flex ml-auto w-fit -mr-1">
        <ShareButton provider={provider} />
        <Button
          className={cn(
            "text-green-dark p-2 h-fit hover:bg-primary hover:bg-opacity-20 rounded-lg hover:opacity-100",
          )}
          onClick={() => {
            if (!provider?.id) return
            if (isContainedInWishlist(provider.id)) removeFromWishlist(provider.id)
            else addToWishlist(provider)
          }}
        >
          <SVG
            src={isContainedInWishlist(provider.id) ? solidHeartIcon : heartIcon}
            className="scale-[1.2] h-4 w-4"
          />
        </Button>
      </div>

      <div className="flex flex-row md:flex-col items-start scale-[0.9] md:scale-100 items-center md:items-start w-full gap-6 md:gap-0">
        {/* === AVATAR SECTION === */}
        <div className="flex items-center justify-center mt-4 w-fit relative mx-auto min-w-[150px] w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
          <img src={provider.avatarUrl} className="rounded-full" />
          <div className="hover:cursor-pointer hover:bg-blue-light w-[45px] h-[45px] md:w-[65px] md:h-[65px] rounded-full bg-white flex items-center justify-center absolute bottom-0 right-0 shadow-md">
            <SVG
              src={playIcon}
              className="ml-1 text-primary"
            />
          </div>
        </div>

        {/* === INFO SECTION === */}
        <div className=''>
          <div className="flex items-center gap-2 mt-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <p className="text-green-600 font-medium">Tomorrow</p>
          </div>
          <p className="font-medium text-2xl mt-1">{provider.fullName}</p>
          <p className="mt-4 text-gray-400">{provider.yearsOfExperience + 6} years of experience, {capitalize(provider.title)}</p>
        </div>
      </div>

      {/* === TAGS SECTION === */}
      <div className="flex gap-2 overflow-x-scroll mt-5">
        {provider.tags.map((tag) => {
          return <div key={tag} className="w-fit h-auto bg-blue-light text-green-dark px-2 py-1 rounded-full">
            <p className="text-sm font-medium break-keep whitespace-nowrap">{tag}</p>
          </div>
        })}
      </div>

      {/* === PRICING SECTION === */}
      <p className="my-4 text-gray-400">from CHF {provider.pricing?.price || 165} / {provider.pricing?.durationType || '30 min'}</p>

      {/* === CTA SECTION === */}
      <MainCTAButton className="py-6 mb-4">
        Show more
      </MainCTAButton>

      {/* === FOOTER SECTION === */}
      <div className="h-[1px] bg-green-light mt-2 -mx-6"></div>
      <div className="flex gap-3 overflow-x-scroll items-center -mx-1 h-10 overflow-y-hidden">
        {provider.therapyQuotes.map((quote, i) => {
          return <div key={quote} className="flex gap-1 items-center w-fit text-gray-400">
            <SVG
              src={quoteIcons[Math.abs(i - quoteIcons.length + 1)]}
              width={16}
            />
            <p className="text-sm font-medium break-keep whitespace-nowrap">{quote}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default ProviderCard