const sdk = require("node-appwrite");

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - request body data as a string
    'variables' - object with function variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200

  If an error is thrown, a response with code 500 will be returned.
*/

module.exports = async function (req, res) {
  if(req.variables['APPWRITE_FUNCTION_TRIGGER'] !== 'event') {
    throw Error('This function can only be triggered by Appwrite event.');
  }

  const client = new sdk.Client();

  // You can remove services you don't use
  const database = new sdk.Databases(client);

  if (
    !req.variables['APPWRITE_FUNCTION_ENDPOINT'] ||
    !req.variables['APPWRITE_FUNCTION_API_KEY']
  ) {
    throw Error("Environment variables are not set. Function cannot use Appwrite SDK.");
  }

  client
    .setEndpoint(req.variables['APPWRITE_FUNCTION_ENDPOINT'])
    .setProject(req.variables['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.variables['APPWRITE_FUNCTION_API_KEY']);

  const data = JSON.parse(req.variables['APPWRITE_FUNCTION_EVENT_DATA']);

  const collectionId = data['$collectionId'];
  const databaseId = data['$databaseId'];
  const userId = req.variables['APPWRITE_FUNCTION_USER_ID'];

  console.log("Collection", collectionId);
  console.log("Database", databaseId);
  console.log("User", userId);

  if(collectionId === 'profiles') {
    const documentUserId = data.userId;

    if(documentUserId !== userId) {
      console.log(`Deleting. ${userId} is logged, but creating document for ${documentUserId}`);
      await database.deleteDocument(databaseId, collectionId, data['$id']);
    }
  } else if(collectionId === 'links') {
    const profiles = await database.listDocuments(databaseId, 'profiles', [
      sdk.Query.equal('userId', userId),
      sdk.Query.limit(1)
    ]);

    const profile = profiles.documents[0] ?? null;

    if(!profile || profile['$id'] !== data.profileId) {
      console.log(`Deleting. ${userId} is logged and creating link for ${data.profileId}, but profile below was found:`);
      console.log(profile);
      await database.deleteDocument(databaseId, collectionId, data['$id']);
    }
  }

  res.json({
    success: true,
  });
};
