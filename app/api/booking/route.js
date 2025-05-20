import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = "mongodb+srv://myuser:mypassword123@cluster0.3g9azey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const dbName = "limtayar" // You can change this to your preferred database name
const collectionName = "bookings"

let cachedClient = null

async function connectToDB() {
  if (cachedClient && cachedClient.topology?.isConnected()) {
    return cachedClient
  }
  const client = new MongoClient(uri)
  await client.connect()
  cachedClient = client
  return client
}

export async function POST(req) {
  try {
    const data = await req.json()

    // Basic validation
    if (
      !data.date ||
      !data.location ||
      !data.service ||
      !data.time ||
      !data.carDetails ||
      !data.carDetails.brand ||
      !data.carDetails.model ||
      !data.carDetails.year ||
      !data.carDetails.plateNumber
    ) {
      return NextResponse.json({ success: false, message: "Missing required fields." }, { status: 400 })
    }

    const client = await connectToDB()
    const db = client.db(dbName)
    const collection = db.collection(collectionName)

    const booking = {
      ...data,
      createdAt: new Date().toISOString(),
    }

    const result = await collection.insertOne(booking)

    return NextResponse.json({ success: true, booking: { ...booking, _id: result.insertedId } }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 })
  }
}

export async function GET() {
  try {
    const client = await connectToDB()
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    const bookings = await collection.find({}).sort({ createdAt: -1 }).toArray()
    return NextResponse.json({ success: true, bookings })
  } catch (error) {
    return NextResponse.json({ success: false, message: "Failed to fetch bookings." }, { status: 500 })
  }
}