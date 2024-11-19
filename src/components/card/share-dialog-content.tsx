import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog'

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import MainCTAButton from '../main-cta-button'
import { Button } from '../ui/button'
import { FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { ProviderData } from '@/types'
import { sleep } from '@/lib/utils'
const formSchema = z.object({
  email: z.string().email(),
})

type Props = {
  provider: ProviderData
}
const ShareDialogContent = ({
  provider
}: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const emailData = {
      email: values.email,
      providerId: provider.id
    }
    console.log(emailData)
    await sleep(2000)
  }

  return (
    <FormProvider {...form}>
      <DialogHeader>
        <DialogTitle className='text-green-dark mb-4 text-xl'>
          Save favorite profiles and come back later
        </DialogTitle>
        <DialogDescription className='text-center'>
          Forward the favorite profiles to your email as reminder. Attention:
          Appointment slots of your favorite profiles are not reserved and can still be booked out.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className='col-span-4'>
                <FormControl>
                  <Input
                    {...field}
                    className='text-green-dark text-xl bg-white'
                    placeholder='Email'
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className='text-center col-span-4 text-sm text-green-dark'>We send the links to the favorite profiles to this email</p>
        </div>
      </div>
      <DialogFooter>
        <div className='flex flex-col gap-2 w-fit items-center mx-auto'>
          <MainCTAButton
            color='primary'
            onClick={form.handleSubmit(onSubmit)}
            disabled={form.formState.isSubmitting || !form.formState.isValid}
          >
            Send selection via Email
          </MainCTAButton>
          <DialogClose asChild>
            <Button >Close</Button>
          </DialogClose>
        </div>
      </DialogFooter>
    </FormProvider>
  )
}

export default ShareDialogContent