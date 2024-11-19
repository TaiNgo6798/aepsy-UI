import sendIcon from "@/assets/icons/send.svg";
import trashBin from "@/assets/icons/trash.svg";
import { useAepsyStore } from "@/core/context";
import { cn } from "@/lib/utils";
import SVG from "react-inlinesvg";
import MainCTAButton from "../main-cta-button";
import { Button } from "../ui/button";
import { Fragment, useMemo } from "react";

const Wishlish = () => {
    const { wishlist, removeFromWishlist, clearWishlist } = useAepsyStore();
    const sortedWishlist = useMemo(() => wishlist.sort((a, b) => a.title.localeCompare(b.title)), [wishlist])

    return (
        <div className="bg-white w-[400px] min-h-40 rounded-lg flex flex-col">
            {sortedWishlist.map((provider, i) => (
                <Fragment key={provider.id}>
                    <div className="p-2 text-green-dark flex items-center gap-3">
                        <img src={provider.avatarUrl} className="w-12 h-12 rounded-full" />
                        <div>
                            <p className="font-medium">{provider.fullName}</p>
                            <Button className="p-0 h-fit mt-1">To the profile</Button>
                        </div>
                        <Button className="ml-auto" onClick={() => removeFromWishlist(provider.id)}>
                            <SVG
                                src={trashBin}
                                className="scale-[1.2]"
                            />
                        </Button>
                    </div>
                    <div className={cn(
                        "w-full h-[1px] bg-gray-100 my-2",
                        i === wishlist.length - 1 && 'hidden'
                    )} />
                </Fragment>
            ))}

            <div className="px-4 mt-6">
                <MainCTAButton color="primary" className="py-6">
                    <SVG
                        src={sendIcon}
                        className="scale-[1.2]"
                    />
                    Send selection
                </MainCTAButton>
                <Button className="w-full text-md mt-2" onClick={clearWishlist}>Delete selection</Button>
            </div>
        </div>
    )
}

export default Wishlish