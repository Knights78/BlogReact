const conf={
   appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),//string to convert it into string
   
   appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   
   appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   
   
   appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)


}
//in this file we are just exporting the the key value pairs so that we dont need to write everytime import.mta and all that stuffs
export default conf