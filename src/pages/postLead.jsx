import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import Datetime from 'react-datetime'
import axios from 'axios'
import { API_KEY } from '@/helpers/keys'
import { AUTH_SEC } from '@/helpers/keys'
import { BASE_URL } from '@/helpers/keys'
import { toast } from 'react-toastify'

export default function PostLead() {
  const router = useRouter()
  const [clientData, setClientData] = useState({})
  const [startDate, setStartDate] = useState()
  const [startTime, setStartTime] = useState()
  const [endDate, setEndDate] = useState()
  const [endTime, setEndTime] = useState()
  const [notes, setNotes] = useState('')

  console.log(`${startDate}T${startTime}:33.001Z`)
  console.log(clientData)
  console.log(API_KEY, AUTH_SEC)

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post(BASE_URL + API_KEY + `/Client/create/`, {
        auth_secret: AUTH_SEC,
        FirstName: clientData.fname,
        LastName: clientData.lname,
        Address: clientData.address,
        City: clientData.city,
        State: clientData.state,
        Phone: clientData.phone,
        PhoneExt: clientData.phoneExt,
        Company: clientData.company,
        Country: clientData.country,
        Zip: clientData.zipcode,
        AllowBilling: 'true',
        Source: 'HOA',
        Email: clientData.email,
      })
      .then(
        (response) => {
          toast.success('Client Registered', {
            position: toast.POSITION.TOP_CENTER,
          })
          console.log('Success from Client', response.data)
        },
        (error) => {
          toast.error('Error occured!!!', {
            position: toast.POSITION.TOP_CENTER,
          })
          console.log(error)
        }
      )
  }

  useEffect(() => {
    const client = localStorage.getItem('clientData')
    console.log(JSON.parse(client))
    setClientData(JSON.parse(client))
  }, [])

  return (
    <div>
      <Header />
      <div className="mx-auto mb-5 mt-5 flex flex-col items-center justify-center bg-white px-6 py-8 lg:py-0">
        <div className="container mx-auto px-5 py-12">
          <h1 className="mb-3 text-center text-3xl font-bold text-gray-800">
            Enter Your Schedule Details
          </h1>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Start Date
              </label>
              <input
                type="date"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="John"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Start Time
              </label>
              <input
                type="time"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="Doe"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="first_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                End Date
              </label>
              <input
                type="date"
                id="first_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="John"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                End Time
              </label>
              <input
                type="time"
                id="last_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
                placeholder="Doe"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label
              for="company"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Your Notes
            </label>
            <textarea
              type="textarea"
              id="company"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
              placeholder="Enter your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}
