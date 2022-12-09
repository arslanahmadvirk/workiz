import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function ClientDetails() {
  const router = useRouter()
  const serviceType = router.query.type
  console.log(serviceType)
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    phoneExt: '',
    address: '',
    city: '',
    country: '',
    zipcode: null,
    state: '',
    company: '',
    AllowBilling: true,
    Source: 'HOC',
    serviceType: serviceType,
  })

  const handleData = (key, value) => {
    setData({ ...data, [key]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    localStorage.setItem('clientData', JSON.stringify(data))
    router.push('/postLead')
  }
  return (
    <div>
      <Header />
      <div className="mx-auto mb-5 mt-5 flex flex-col items-center justify-center bg-white px-6 py-8 lg:py-0">
        <div className="container mx-auto px-5 py-12">
          <h1 className="mb-3 text-center text-3xl font-bold text-gray-800">
            Enter Your Details
          </h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6 grid gap-6 md:grid-cols-3">
            <div>
              <label
                for="first_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="John"
                value={data.fname}
                onChange={(e) => handleData('fname', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="Doe"
                value={data.lname}
                onChange={(e) => handleData('lname', e.target.value)}
                required
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="john.doe@company.com"
                value={data.email}
                onChange={(e) => handleData('email', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="company"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="xyz"
                value={data.company}
                onChange={(e) => handleData('company', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Phone EXT
              </label>
              <input
                type="tel"
                id="phone"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="123"
                value={data.phoneExt}
                onChange={(e) => handleData('phoneExt', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="123-45-678"
                value={data.phone}
                onChange={(e) => handleData('phone', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="New York"
                value={data.city}
                onChange={(e) => handleData('city', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Zip Code
              </label>
              <input
                type="number"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="1234"
                value={data.zipcode}
                onChange={(e) => handleData('zipcode', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <input
                type="text"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="USA"
                value={data.country}
                onChange={(e) => handleData('country', e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                State
              </label>
              <input
                type="text"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="CA"
                value={data.state}
                onChange={(e) => handleData('state', e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="Enter your address"
                value={data.address}
                onChange={(e) => handleData('address', e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
            >
              Next
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
