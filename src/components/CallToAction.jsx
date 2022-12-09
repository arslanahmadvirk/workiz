import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get An Instant Price
          </h2>
          <p className="mt-4 text-lg text-gray-300">
          Enter Your Street Address To Get A Free Quote For Your Home Needs.
          </p>
          <img src="https://cdn-icons-png.flaticon.com/512/2268/2268142.png" alt="" className='w-[50px] h-[50px] mt-5'/>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-4">
             
            <div className="mb-6 mx-auto md:mx-0">
        <input type="text" id="default-input" placeholder='Enter Your Street Address' class="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-900 focus:border-gray-900 block w-[300px] md:w-[500px] p-2.5"/>
    </div> 
            </div>
         
        </div>
      </Container>
    </section>
  )
}
