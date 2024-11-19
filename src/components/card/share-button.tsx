import shareIcon from '@/assets/icons/share.svg'
import SVG from 'react-inlinesvg'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import ShareDialogContent from './share-dialog-content'
import { ProviderData } from '@/types'

const ShareButton = ({ provider }: { provider: ProviderData }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
        className="text-green-dark p-2 h-fit hover:bg-primary hover:bg-opacity-20 rounded-lg hover:opacity-100"
        >
          <SVG
            src={shareIcon}
            className="scale-[1.2]"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ShareDialogContent provider={provider}/>
      </DialogContent>
    </Dialog>
  )
}

export default ShareButton