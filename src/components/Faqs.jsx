import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is the Landscape?',
      answer:
        'Landscape is a lawn care app that connects you with local lawn care professionals. We make it easy to get a free quote for your lawn care needs.',
    },
    {
      question: 'How much does Landscape cost?',
      answer:
        'Landscape prices vary depending on the size of your lawn and the services you need. Get a free quote today to see how much Landscape can save you.',
    },
    {
      question: 'Who will be mowing my lawn?',
      answer:
        'Landscape connects you with local lawn care professionals. Landscape choose the best local lawn care professional that best fits your needs.',
    },
  ],
  [
    {
      question: 'How can I be sure that my lawn will be taken care of?',
      answer:
        'Landscape services are backed by our 100% satisfaction guarantee. If you are not satisfied with your lawn care service, we will send someone else to fix it.',
    },
    {
      question: 'How soon can I get my lawn mowed?',
      answer:
        'Landscape can get your lawn mowed as soon as tomorrow. Get a free quote today to see how soon we can get your lawn mowed.',
    },
    {
      question: 'How do I pay for Landscape services?',
      answer:
        'Landscape accepts all major credit cards. You pay for Landscape services after your lawn has been mowed.',
    },
  ],
  [
    {
      question: 'Do I need to be home when Landscape mows my lawn?',
      answer:
        'No, you do not need to be home when Landscape mows your lawn. We will send you a notification when your lawn has been mowed.',
    },
    {
      question: 'Is Landscape available in my area?',
      answer:
        'Landscape is available in most areas. Get a free quote today to see if Landscape is available in your area.',
    },
    {
      question: 'Can I cancel Landscape services at any time?',
      answer:
        'Yes, you can cancel Landscape services at any time. You can cancel Landscape services by contacting Landscape customer support.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
