/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Router, { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Services() {
  const router = useRouter()

  const handleNavigation = (type) => {
    router.push({
      pathname: '/clientDetails',
      query: { type: type },
    })
  }
  return (
    <div>
      <Header />
      <div className="mx-auto mb-5 mt-5 flex flex-col items-center justify-center bg-white px-6 py-8 lg:py-0">
        <section className="body-font text-gray-600">
          <div className="container mx-auto px-5 py-12">
            <h1 className="mb-5 text-center text-3xl font-bold text-gray-800">
              Choose From Our Services
            </h1>
            <div className="-m-4 flex flex-wrap">
              <div
                className="cursor-pointer p-4 md:w-1/3"
                onClick={(e) => handleNavigation('Weekly Mowing')}
              >
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    className="h-[300px] w-[400px]"
                    src="/favicon.ico"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Weekly Mowing
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lawn mowing, edging, and blowing clippings.
                    </p>
                    <div className="flex flex-wrap items-center ">
                      <a className="inline-flex items-center text-xl text-indigo-500 md:mb-2 lg:mb-0">
                        $36.29
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer p-4 md:w-1/3"
                onClick={() => handleNavigation('Bi-Weekly Mowing')}
              >
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    className="h-[300px] w-[400px]"
                    src="/favicon.ico"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Bi-Weekly Mowing
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lawn mowing, edging, and blowing clippings.
                    </p>
                    <div className="flex flex-wrap items-center">
                      <a className="inline-flex items-center text-xl text-indigo-500 md:mb-2 lg:mb-0">
                        $40.82
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="cursor-pointer p-4 md:w-1/3"
                onClick={() => handleNavigation('Monthly Mowing')}
              >
                <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
                  <img
                    className="h-[300px] w-[400px]"
                    src="/favicon.ico"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
                      Monthly Mowing
                    </h1>
                    <p className="mb-3 leading-relaxed">
                      Lawn mowing, edging, and blowing clippings.
                    </p>
                    <div className="flex flex-wrap items-center ">
                      <a className="inline-flex items-center text-xl text-indigo-500 md:mb-2 lg:mb-0">
                        $65.35
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
