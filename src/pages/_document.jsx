import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col">
        {/* <script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAimXOrD9QzIBGnOFhsKnv6LDydGHmC-5w&libraries=places&callback=initMap"
          async
        /> */}
        {/* <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAimXOrD9QzIBGnOFhsKnv6LDydGHmC-5w&libraries=places"
        /> */}
        <Main />
        <NextScript />
        <Script
          id="googlemaps"
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfflp8BavsXzu_nkjx2YaTm6DGMbYLa6I&libraries=places"
        />
      </body>
    </Html>
  )
}
