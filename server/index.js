const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors()); // Enable CORS

// MongoDB connection URI
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.piv95.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient instance
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Keeping the MongoDB client connection open
async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Create DB and collection references
    const database = client.db("insertDB");
    const JobsCollection = database.collection("jobs");

    // POST job route
    app.post("/post-job", async (req, res) => {
      try {
        const body = req.body;
        body.createdAt = new Date(); // Set creation date
        const result = await JobsCollection.insertOne(body);
        if (result.insertedId) {
          return res.status(200).json(result);
        } else {
          return res.status(400).json({
            message: "Cannot insert item! Try again.",
            status: false,
          });
        }
      } catch (error) {
        return res.status(500).json({ message: "Server error", error });
      }
    });

    // GET all jobs route
    app.get("/all-jobs", async (req, res) => {
      try {
        const jobs = await JobsCollection.find({}).toArray();
        return res.status(200).json(jobs);
      } catch (error) {
        return res.status(500).json({ message: "Error fetching jobs", error });
      }
    });

    // Get jobs by email
    app.get("/myjobs/:email", async (req, res) => {
      const email = req.params.email;
      try {
        const jobs = await JobsCollection.find({ postedBy: email }).toArray(); // Filter by posted email
        if (jobs.length > 0) {
          return res.status(200).json(jobs);
        } else {
          return res.status(404).json({ message: "No jobs found for this email." });
        }
      } catch (error) {
        return res.status(500).json({ message: "Error fetching jobs", error });
      }
    });

    // DELETE a job by ID
    app.delete("/job/:id", async (req, res) => {
      const id = req.params.id;
      try {
        const filter = { _id: new ObjectId(id) }; // Correctly cast the ID to ObjectId
        const result = await JobsCollection.deleteOne(filter);
        if (result.deletedCount === 1) {
          return res.status(200).json({ message: "Job deleted successfully." });
        } else {
          return res.status(404).json({ message: "Job not found." });
        }
      } catch (error) {
        return res.status(500).json({ message: "Error deleting job", error });
      }
    });

  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}

// Run the MongoDB connection setup
run().catch(console.dir);

// Simple test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
