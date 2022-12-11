// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
process.env.WORKIZ_API_KEY = 'api_jb6rzeawcq70onjvkfxjt3hnivoc6gb2'
const BASE_URL = 'https://api.workiz.com/api/v1/'
import axios from 'axios'

export default function handler(req, res) {
  const postData = async (data) => {
    console.log('Handler Function')
    console.log(req.body.data)
    axios
      .post(`${BASE_URL}${process.env.WORKIZ_API_KEY}/Client/create/`, data)
      .then((response) => {
        console.log('Success from Client', response)
        return res.status(200).send(response.data)
      })
      .catch((error) => {
        console.log('Error from Client', error)
        return res.status(422).send(error)
      })
    // const response = await fetch(
    //   `${BASE_URL}${process.env.WORKIZ_API_KEY}/Client/create/`,
    //   {
    //     method: 'POST',
    //     headers: {
    //       Accept: '*/*',
    //     },
    //     body: JSON.stringify(data),
    //   }
    // )
    // const resData = await response.json()
    // console.log(resData)
    // return res.status(resData.code).json(resData)
  }
  postData(req.body.data)
}
