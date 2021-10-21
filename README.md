# thescore
This app is available via preview [here](https://thescore.vercel.app/).

## Setting up the server
To run this app locally, you will first want to get the server running.  The server is a NodeJS server with a Mongo NoSQL database.  You can create your own cluster and add it to a `.env` file under the name `DATABASE_URL`.  There is one other important `.env` property to set which is the `PORT` variable, set this to which port you want the server to run on.  A full list of `.env` variables can be found in the `.env.example` file.  The `CORS_ORIGIN` is used for local development if cors isn't being nice, you can set this to which ever url your local client is running on like `http:localhost:3000`.

If you created your own cluster, you will want to load in some data to it.  MongoDB allows you to upload data via JSON file, upload the `./src/data/.nfl-rushing.json` to your cluster and your DB will be populated!

Once this is set up, you can start the server by having two terminals open if you want to make changes or just one if you do not.  First, install the depencies using the command `yarn`.  To have your changes rendered immediately in one terminal run the command `yarn watch`.  In another terminal run the command `yarn dev`.  The server should now be running.

## Starting the client
Open another terminal in the `./client` directory and run the command `yarn` to install the needed dependencies.  After this, run the command `yarn dev` and you should see it start to run on `http://localhost:3000`.  Open that in your browser and you're good to go!
