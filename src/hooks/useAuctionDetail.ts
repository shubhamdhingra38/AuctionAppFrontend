import React from "react"
import { useQuery } from "react-query"

const fetchAuction = async (auctionId: string) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/auction/${auctionId}`,
    {
      method: "GET",
      headers: {
        Authorization: "Basic dGVzdDp0ZXN0",
      },
    }
  )
  const data = await response.json()

  if (!response.ok) {
    throw Error(`Failed to fetch auction: ${data.message}`)
  }

  return data
}

export interface AuctionDetail {
  id: number
  name: string
  description: string
  item: ItemDetail
  closingTime: Date
  createdById: number
}

export interface ItemDetail {
  id: number
  name: string
  description: string
  startingPrice: number
  category: Category
  auctionId: number
}

interface Category {
  id: number
  name: string
}

const useAuctionDetail = (auctionId: string) => {
  const { data, isLoading, isSuccess, isError, error } = useQuery<
    AuctionDetail,
    Error
  >("fetchAuction", () => fetchAuction(auctionId), {
    retry: false,
    refetchOnWindowFocus: false,
  })
  return { data, isLoading, isSuccess, isError, error }
}

export default useAuctionDetail
