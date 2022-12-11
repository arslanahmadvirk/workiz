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
  const [clientID, setClientID] = useState()
  const [loading, setLoading] = useState(false)

  console.log(`${startDate}T${startTime}:33.001Z`)
  console.log(clientData)
  console.log(API_KEY, AUTH_SEC)
  console.log(clientID)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Handle Client Submit')
    setLoading(true)
    const payload = {
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
    }

    try {
      const { data } = await axios.post('/api/workiz', { data: payload })
      console.log(data.msg)
      console.log(data.data[0].client_id)
      setClientID(data.data[0].client_id)
      toast.success('Client Created successfully', {
        position: toast.POSITION.TOP_CENTER,
      })
      setLoading(false)
    } catch (e) {
      console.log('Error', e)
      toast.error('An error occured while creating Client!!!', {
        position: toast.POSITION.TOP_CENTER,
      })
      setLoading(false)
    }
  }

  const handleLeadSubmit = async () => {
    console.log('Handle Lead Submit')
    const payload = {
      auth_secret: AUTH_SEC,
      LeadDateTime: `${startDate}T${startTime}:33.001Z`,
      LeadEndDateTime: `${endDate}T${endTime}:33.001Z`,
      ClientId: clientID,
      Phone: clientData.phone,
      PhoneExt: clientData.phoneExt,
      Email: clientData.email,
      comments: '',
      service_type: clientData.serviceType,
      FirstName: clientData.fname,
      LastName: clientData.lname,
      Company: clientData.company,
      Address: clientData.address,
      City: clientData.city,
      State: clientData.state,
      PostalCode: clientData.zipcode,
      Country: clientData.country,
      JobType: 'Landscaping',
      Timezone: 'US/Pacific',
      JobSource: 'HOA',
      LeadNotes: notes,
    }

    try {
      const { data } = await axios.post('/api/workizlead', { data: payload })
      console.log(data)
      toast.success('Lead Created successfully', {
        position: toast.POSITION.TOP_CENTER,
      })
    } catch (e) {
      console.log('Error', e)
      toast.error('An error occured while creating Lead!!!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  useEffect(() => {
    const client = localStorage.getItem('clientData')
    console.log(JSON.parse(client))
    setClientData(JSON.parse(client))
  }, [])

  useEffect(() => {
    if (clientID) {
      handleLeadSubmit()
    }
  }, [clientID])

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
          {loading ? (
            <div
              role="status"
              className="mx-auto flex items-center justify-center"
            >
              <svg
                className="mr-2 mb-12 mt-8 inline h-8 w-8 animate-spin fill-red-600 text-gray-200"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <div className="mx-auto flex items-center justify-center">
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  )
}
