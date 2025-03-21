import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Send } from 'lucide-react'

const GenerateForm = () => {
  return (
    <div className='mt-8 flex items-center justify-center w-full'>
        <form>
            <div className='flex items-center gap-4 w-96 lg:min-w-3xl'>
                <Input
                    type='text'
                    placeholder='Write Propmt To Generate Form ...'
                    className='border border-black text-base'
                />
                <Button><Send/></Button>
            </div>
        </form>
    </div>
  )
}

export default GenerateForm